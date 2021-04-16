<template>
  <article id="download" class="download md:container">
    <aside class="flex justify-center items-center">
      <img
        src="~/assets/images/wallets.svg"
        :alt="$t('download.karboWallet')"
      >
    </aside>
    <section>
      <header>
        <span class="uppercase font-mono text-orange text-sm font-bold tracking-widest">
          {{ $t('download.label') }}
        </span>
        <h2 class="text-4xl font-extrabold mt-3 md:text-5xl">
          {{ $t('download.title') }}
        </h2>
      </header>
      <main>
        <ul class="flex mt-6 overflow-x-auto">
          <li
            v-for="({ icon, label }, tab) in tabs"
            :key="tab"
            class="flex flex-col items-center justify-center w-24 cursor-pointer text-center mr-12 last:mr-0"
            :class="{ active: active === tab }"
            @click="active = tab"
          >
            <figure class="flex justify-center items-center w-12 h-12 rounded-full mb-2">
              <SvgIcon :name="icon" class="w-6 h-6" />
            </figure>
            <span>{{ label }}</span>
          </li>
          <li class="md:hidden">
            <span class="block w-1" />
          </li>
        </ul>
        <no-ssr>
          <section
            v-for="({ tag, type, download, link, source, icon }, i) in wallets[active]"
            :key="i"
            class="wallet px-6 py-5 rounded-lg bg-blue-airy mt-8"
          >
            <span
              class="tag py-2 px-3 bg-navy-dark uppercase text-white font-mono font-bold text-sm tracking-widest"
              :class="{
                'bg-navy-dark': tag === 'official',
                'bg-greenish': tag === 'alternative',
                'bg-green': tag === 'custodial',
              }"
            >
              {{ tag }}
            </span>
            <h4 class="mt-4 font-extrabold text-2xl">
              <SvgIcon v-if="icon" :name="icon" class="inline-block text-grey w-6 h-6 mr-1" />
              {{ $t(`download.wallets.${type}.title`) }}
            </h4>
            <p class="text-grey-dark mt-3">
              {{ $t(`download.wallets.${type}.description`) }}
            </p>
            <a
              v-if="source"
              :href="source"
              class="button rounded-full font-mono font-medium text-sm mt-4"
              target="_blank"
            >
              <SvgIcon name="github" class="mr-2 w-6 h-6 text-denim-dark" />
              <span class="text-blue-dark">Source Code</span>
            </a>
            <a
              v-if="download"
              :href="download"
              class="button rounded-full bg-blue-mid text-white font-semibold px-6 mt-4 hover:bg-blue-dark"
            >
              <SvgIcon name="download" class="mr-2 w-4 h-4" />
              <span>Download</span>
            </a>
            <a
              v-if="link"
              :href="link"
              target="_blank"
              class="button rounded-full bg-blue-mid text-white font-semibold px-6 mt-4 hover:bg-blue-dark"
            >
              <span>Open</span>
              <SvgIcon name="external" class="ml-2 w-4 h-4" />
            </a>
          </section>
        </no-ssr>
      </main>
    </section>
  </article>
</template>

<script lang="ts">
import platform from 'platform-detect'
import { Component, Vue } from 'nuxt-property-decorator'
import { WalletOS, WalletType } from '~/store/wallets'

enum NoDesktop {
  Mobile = 'mobile',
  Web = 'web',
  // Paper = 'paper',
}

interface WalletDetail {
  tag: 'official' | 'alternative' | 'custodial'
  type: WalletType | 'android'| 'web'
  source?: string
  download?: string
  link?: string
  icon?: string
}

const detectDefaultTab = (): NoDesktop | WalletOS => {
  if (platform.windows) {
    return WalletOS.Windows
  }

  if (platform.android || platform.ios || platform.phone || platform.tablet) {
    return WalletOS.Mobile
  }

  if (platform.macos) {
    return WalletOS.MacOS
  }

  if (platform.linux || platform.linuxBased) {
    return WalletOS.Ubuntu
  }

  return WalletOS.Windows
}

@Component
export default class Download extends Vue {
  active: NoDesktop | WalletOS = WalletOS.Windows

  created() {
    this.active = detectDefaultTab()
  }

  async fetch() {
    await this.$store.dispatch('wallets/fetchAll')
  }

  get karbo() {
    return this.$accessor.wallets.karbo
  }

  get tabs() {
    return {
      [WalletOS.Windows]: {
        icon: 'wallets/windows',
        label: this.$t('download.tabs.windows'),
      },
      [WalletOS.MacOS]: {
        icon: 'wallets/apple',
        label: this.$t('download.tabs.macos'),
      },
      [WalletOS.Ubuntu]: {
        icon: 'wallets/linux',
        label: this.$t('download.tabs.linux'),
      },
      [NoDesktop.Mobile]: {
        icon: 'wallets/mobile',
        label: this.$t('download.tabs.mobile'),
      },
      [NoDesktop.Web]: {
        icon: 'wallets/web',
        label: this.$t('download.tabs.web'),
      },
      // [NoDesktop.Paper]: {
      //   icon: 'wallets/paper',
      //   label: this.$t('download.tabs.paper'),
      // },
    }
  }

  get wallets(): Record<WalletOS | NoDesktop, WalletDetail[]> {
    return {
      [WalletOS.Windows]: [
        {
          tag: 'official',
          type: WalletType.Classic,
          download: this.karbo.classic.details!.windows.href,
          source: this.karbo.classic.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Spring,
          download: this.karbo.spring.details!.windows.href,
          source: this.karbo.spring.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Lite,
          download: this.karbo.lite.details!.windows.href,
          source: this.karbo.lite.source,
        },
        {
          tag: 'official',
          type: WalletType.CLI,
          download: this.karbo.cli.details!.windows.href,
          source: this.karbo.cli.source,
        },
      ],
      [WalletOS.MacOS]: [
        {
          tag: 'official',
          type: WalletType.Classic,
          download: this.karbo.classic.details!.macos.href,
          source: this.karbo.classic.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Spring,
          download: this.karbo.spring.details!.macos.href,
          source: this.karbo.spring.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Lite,
          download: this.karbo.lite.details!.macos.href,
          source: this.karbo.lite.source,
        },
        {
          tag: 'official',
          type: WalletType.CLI,
          download: this.karbo.cli.details!.macos.href,
          source: this.karbo.cli.source,
        },
      ],
      [WalletOS.Ubuntu]: [
        {
          tag: 'official',
          type: WalletType.Classic,
          download: this.karbo.classic.details!.macos.href,
          source: this.karbo.classic.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Spring,
          download: this.karbo.spring.details!.macos.href,
          source: this.karbo.spring.source,
        },
        {
          tag: 'alternative',
          type: WalletType.Lite,
          download: this.karbo.lite.details!.macos.href,
          source: this.karbo.lite.source,
        },
        {
          tag: 'official',
          type: WalletType.CLI,
          download: this.karbo.cli.details!.macos.href,
          source: this.karbo.cli.source,
        },
      ],
      [NoDesktop.Mobile]: [
        {
          tag: 'official',
          type: 'android',
          icon: 'wallets/android',
          link: this.$accessor.wallets.mobile.android,
        },
      ],
      [NoDesktop.Web]: [
        {
          tag: 'custodial',
          type: 'web',
          link: this.$accessor.wallets.web,
        },
      ],
      // [NoDesktop.Paper]: [],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/mixins";

.download {
  @include mobile-padding();

  > section {
    > main {
      > ul {
        @include scrollbar();

        > li {
          @apply text-grey-mid;

          > figure {
            @apply bg-blue-light;
            > .icon {
              @apply text-blue-icon;
            }
          }

          &:hover,
          &.active {
            @apply text-denim-dark;

            > figure {
              @apply bg-blue-mid;
              > .icon {
                @apply text-white;
              }
            }
          }
        }
      }

      .wallet {
        .tag {
          font-size: 10px;
          letter-spacing: 0.5px;
        }
      }
    }
  }

  @media (max-width: theme('screens.md')) {
    > section {
      > main {
        > ul {
          padding-bottom: 1rem;
          margin-left: -$mobile-padding;
          margin-right: -$mobile-padding;

          > li {
            &:first-child {
              margin-left: $mobile-padding;
            }
          }
        }
      }
    }
  }
}
</style>
