<template>
  <div
    v-if="loaded"
    class="price-list flex relative"
    :class="{ open: open }"
  >
    <header
      class="trigger flex items-center cursor-pointer"
      @click="open = !open"
    >
      <SvgIcon :name="trend(selected) ? 'trend-up' : 'trend-down'" class="w-5 h-5 mr-2" />
      <span class="font-semibold">{{ formattedPrice(selected) }}</span>
      <SvgIcon
        name="arrow-down"
        class="arrow-down w-3 h-3 ml-1"
      />
    </header>
    <main class="absolute">
      <ul class="text-center">
        <li
          v-for="(quote, i) in dropdownList"
          :key="i"
          class="cursor-pointer my-1"
          @click="select(quote)"
        >
          <span class="font-medium">
            {{ formattedPrice(quote) }}
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

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

@Component
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

  trend(quote: keyof typeof configs): boolean {
    return this.quotes[quote]?.percent_change_24h > 0
  }

  formattedPrice(quote: keyof typeof configs) {
    const { sign, fraction } = configs[quote]
    const price = this.quotes[quote]?.price

    return `${sign} ${Number(price).toFixed(fraction || 2)}`
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
      @apply text-grey;
    }
  }

  > main {
    @apply bg-white;
    display: none;
    top: calc(100%);
    left: -1rem;
    right: -1rem;
  }

  &.open {
    .trigger {
      .arrow-down {
        @apply text-blue;
        transform: rotate(180deg);
      }
    }
    > main {
      display: block;
    }
  }
}
</style>
