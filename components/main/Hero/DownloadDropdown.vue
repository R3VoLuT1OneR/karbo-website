<template>
  <div
    class="dropdown"
    :class="{ open }"
    @mouseleave="open = false"
  >
    <header>
      <nuxt-link
        :to="localeRoute({ hash: '#download'})"
        class="button rounded border-r bg-blue-mid text-white hover:no-underline font-semibold"
        @mouseover.native="open = true"
      >
        <span>{{ $t('hero.downloadButton.title') }}</span>
        <span class="arrow rounded-r">
          <SvgIcon name="arrow-down" class="text-white w-3 h-3" />
        </span>
      </nuxt-link>
      <p class="text-xs mt-2 max-w-256px">
        <!-- TODO: Link to terms and conditions? -->
        {{ $t('hero.downloadButton.disclaimer.preLine') }}<span class="font-semibold">{{ $t('hero.downloadButton.disclaimer.linkTitle') }}</span>
      </p>
    </header>
    <main v-if="open" class="pt-2">
      <a
        v-for="({ label, icon, href }, i) in wallets"
        :key="i"
        :href="href"
        class="flex items-center py-2 px-4 hover:no-underline text-sm hover:text-blue-mid"
      >
        <SvgIcon :name="`wallets/${icon}`" class="w-5 h-5 mr-2" />
        <span>{{ label }}</span>
      </a>
      <nuxt-link
        :to="localeRoute({ hash: '#download' })"
        class="flex items-center border-t border-grey-light hover:no-underline text-sm py-4 px-4 mt-2"
      >
        <SvgIcon name="arrow-right" class="w-4 h-4 mr-2 -rotate-90" />
        <span>
          {{ $t('hero.downloadButton.wallets.all') }}
        </span>
      </nuxt-link>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ClickOutside from 'vue-click-outside'
import { WalletVersion, WalletType } from '~/store/wallets'

@Component({
  directives: {
    ClickOutside,
  },
})
export default class DownloadDropdown extends Vue {
  open: boolean = false

  async fetch() {
    await this.$store.dispatch('wallets/fetchWalletDetails', {
      version: WalletVersion.Karbo,
      type: WalletType.Spring,
    })
  }

  get wallets() {
    const wallet = this.$accessor.wallets.karbo[WalletType.Spring].details!

    return [
      {
        icon: 'windows',
        label: this.$i18n.t('wallets.windows'),
        href: wallet.windows.href,
      },
      {
        icon: 'linux',
        label: this.$i18n.t('wallets.linux'),
        href: wallet.ubuntu.href,
      },
      {
        icon: 'apple',
        label: this.$i18n.t('wallets.macos'),
        href: wallet.macos.href,
      },
      {
        icon: 'android',
        href: this.$accessor.wallets.mobile.android,
        label: this.$i18n.t('wallets.android'),
      },
      {
        label: this.$i18n.t('wallets.web'),
        icon: 'web',
        href: this.$accessor.wallets.web,
      },
      // {
      //   label: this.$i18n.t('wallets.paper'),
      //   icon: 'paper',
      //   href: 'https://wallet.karbo.org/',
      // },
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.max-w-256px {
  max-width: 256px;
}

.dropdown {
  position: relative;

  > header {
    > .button {
      padding-left: 2.5em;
      padding-right: 0;
      > span:first-child {
        padding-right: 2.5em;
      }
      .arrow {
        @apply flex items-center justify-center bg-blue-dark;
        width: $button-height;
        height: $button-height;
        ::v-deep .icon {
          transition: transform .3s ease-in-out;
        }
      }
    }
  }

  > main {
    @apply hidden absolute rounded bg-white;
    top: calc(100% - 2rem);
    left: 0;
    right: 0;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.14);

    ::v-deep > a {
      .icon {
        @apply text-grey;
      }

      &:last-child {
        > .icon {
          transform: rotate(90deg);
        }
      }

      &:hover {
        @apply text-blue-mid;
        .icon {
          @apply text-blue-mid;
        }
      }
    }
  }

  &.open {
    > header {
      > .button {
        @apply bg-blue-dark;

        > .arrow {
          ::v-deep .icon {
            transform: rotate(180deg);
          }
        }
      }
    }
    > main {
      display: block;
    }
  }
}
</style>
