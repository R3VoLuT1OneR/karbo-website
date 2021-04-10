<template>
  <div
    v-if="loaded"
    v-click-outside="closeDropdown"
    class="price-list flex items-center relative font-mono"
    :class="{ open }"
  >
    <header
      class="trigger flex items-center cursor-pointer"
      @click="open = !open"
    >
      <SvgIcon :name="trend(selected) ? 'trend-up' : 'trend-down'" class="w-5 h-5 mr-2" />
      <span class="font-semibold">{{ formattedPrice(selected) }}</span>
      <SvgIcon name="arrow-down" class="arrow-down w-3 h-3 ml-2" />
    </header>
    <MobileModal v-if="$accessor.tailwind.viewSize === 'sm'" :open="open" @close="open = false">
      <ul class="font-semibold text-lg my-4">
        <li
          v-for="(quote, i) in dropdownList"
          :key="i"
          class="cursor-pointer py-2"
          @click="select(quote)"
        >
          <span class="font-medium">
            {{ formattedPrice(quote) }}
          </span>
        </li>
      </ul>
    </MobileModal>
    <main v-else class="absolute rounded border-2 border-grey-light">
      <ul>
        <li
          v-for="(quote, i) in dropdownList"
          :key="i"
          class="cursor-pointer px-4 py-1 text-xs font-medium hover:text-blue-dark"
          @click="select(quote)"
        >
          <span>
            {{ formattedPrice(quote) }}
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ClickOutside from 'vue-click-outside'
import MobileModal from '~/components/MobileModal.vue'

const LS_KEY_SELECTED_CURRENCY = 'selectedCurrency'

/* eslint-disable camelcase */
interface Quote {
  price: number
  volume_24h: number
  volume_24h_change_24h: number
  market_cap: number
  market_cap_change_24h: number
  percent_change_15m: number
  percent_change_30m: number
  percent_change_1h: number
  percent_change_6h: number
  percent_change_12h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  percent_change_1y: number
  ath_price: number
  ath_date: string
  percent_from_price_ath: number
}
/* eslint-enable camelcase */

const configs: Record<string, { sign: string, fraction?: number }> = {
  USD: {
    sign: '$',
  },
  BTC: {
    sign: '฿',
    fraction: 8,
  },
  CNY: {
    sign: '元',
  },
  EUR: {
    sign: '€',
  },
  PLN: {
    sign: 'zł',
  },
  JPY: {
    sign: '¥',
  },
  KRW: {
    sign: '₩',
  },
  RUB: {
    sign: '₽',
  },
}

@Component({
  components: { MobileModal },
  directives: {
    ClickOutside,
  },
})
export default class PriceList extends Vue {
  open: boolean = false
  loaded: boolean = false
  selected: keyof typeof configs = 'USD'
  quotes: Record<keyof typeof configs, Quote> = {}

  get dropdownList(): string[] {
    return Object.keys(configs)
  }

  async fetch() {
    this.quotes = await this.$axios.get(
      'https://api.coinpaprika.com/v1/tickers/krb-karbo', {
        params: {
          quotes: Object.keys(configs).join(','),
        },
      })
      .then(({ data: { quotes } }) => {
        this.loaded = true
        return quotes
      })

    if (typeof window !== 'undefined') {
      const savedCurrency = window.localStorage.getItem(LS_KEY_SELECTED_CURRENCY)
      if (savedCurrency && configs[savedCurrency]) {
        this.selected = savedCurrency
      }
    }
  }

  closeDropdown() {
    this.open = false
  }

  trend(quote: keyof typeof configs): boolean {
    return this.quotes[quote]?.percent_change_24h > 0
  }

  formattedPrice(quote: keyof typeof configs) {
    const { sign, fraction } = configs[quote]
    const price = this.quotes[quote]?.price

    return `${sign}${Number(price).toFixed(fraction || 2)}`
  }

  select(quote: keyof typeof configs) {
    window.localStorage.setItem(LS_KEY_SELECTED_CURRENCY, quote)
    this.selected = quote
    this.open = false
  }
}
</script>

<style lang="scss" scoped>
.price-list {
  .trigger {
    .arrow-down {
      transition: transform .3s ease-in-out;
    }
  }

  > main {
    @apply bg-white;
    display: none;
    top: calc(100% + 1rem);
    left: 0;
  }

  &.open {
    .trigger {
      .arrow-down {
        transform: rotate(180deg);
      }
    }
    > main {
      display: block;
    }
  }
}
</style>
