<template>
  <article id="download" class="download md:flex items-start md:container py-12 md:pb-32 md:px-12 lg:px-16 xl:px-32">
    <aside class="hidden lg:flex justify-center w-5/12 pr-12 lg:pt-16 xl:w-6/12">
      <img
        width="230"
        height="265"
        src="~/assets/images/wallets.svg"
        :alt="$t('download.karboWallet')"
        class="w-full xl:w-2/3"
      >
    </aside>
    <section class="lg:w-7/12 xl:w-6/12">
      <header>
        <span class="uppercase font-mono text-orange text-sm font-bold tracking-widest">
          {{ $t('download.label') }}
        </span>
        <h2 class="text-4xl font-extrabold mt-3 md:text-5xl">
          {{ $t('download.title') }}
        </h2>
      </header>
      <main>
        <ul ref="tabs" class="flex pt-6 pb-8 overflow-x-auto">
          <li
            v-for="({ icon, label }, tab) in tabs"
            :key="tab"
            :ref="`tab-${tab}`"
            :class="{
              active: active === tab,
              'mr-12': tab !== Object.keys(tabs).pop(),
              'mr-4': tab === Object.keys(tabs).pop() && $accessor.tailwind.viewSize === 'sm',
            }"
            class="flex flex-col items-center justify-center w-24 cursor-pointer text-center last:mr-0"
            @click="setActiveTab(tab)"
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
        <section ref="wallets" class="wallets overflow-x-hidden relative md:overflow-y-auto">
          <div
            v-for="({ wallets: group }, i) in Object.values(tabs)"
            :key="i"
            class="wallets-group absolute w-full md:pr-4"
          >
            <article
              v-for="({ tag, type, download, link, source, icon }, wi) in group"
              :key="wi"
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
              <h3 class="mt-4 font-extrabold text-2xl">
                <SvgIcon v-if="icon" :name="icon" class="inline-block text-grey w-6 h-6 mr-1" />
                {{ $t(`download.wallets.${type}.title`) }}
              </h3>
              <p class="text-grey-dark mt-3">
                {{ $t(`download.wallets.${type}.description`) }}
              </p>
              <div class="flex flex-wrap-reverse justify-between">
                <a
                  v-if="download"
                  :href="download"
                  class="button rounded-full bg-blue-dark text-white font-semibold px-6 mt-4 hover:bg-blue-darkest md:text-xs"
                >
                  <SvgIcon name="download" class="mr-2 w-4 h-4" />
                  <span>Download</span>
                </a>
                <a
                  v-if="link"
                  :href="link"
                  rel="noopener"
                  target="_blank"
                  class="button rounded-full bg-blue-dark text-white font-semibold px-6 mt-4 hover:bg-blue-darkest md:text-xs"
                >
                  <span>Open</span>
                  <SvgIcon name="external" class="ml-2 w-4 h-4 md:w-3 md:h-3" />
                </a>
                <a
                  v-if="source"
                  :href="source"
                  rel="noopener"
                  class="button rounded-full font-mono font-medium text-xs mt-4"
                  target="_blank"
                >
                  <SvgIcon name="github" class="mr-2 w-6 h-6 text-denim-dark" />
                  <span class="text-blue-dark">Source Code</span>
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </section>
  </article>
</template>

<script lang="ts">
import * as platform from 'platform-detect'
import { Component, Vue, Ref } from 'nuxt-property-decorator'
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

type Tab = NoDesktop | WalletOS
interface TabValue {
  icon: string,
  label: string,
  wallets: WalletDetail[]
}

const detectDefaultTab = (): NoDesktop | WalletOS => {
  if (platform.windows) {
    return WalletOS.Windows
  }

  if (platform.android || platform.ios || platform.phone || platform.tablet) {
    return NoDesktop.Mobile
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
  @Ref('wallets') readonly walletsElement!: HTMLElement
  @Ref('tabs') readonly tabsElement!: HTMLElement

  active: NoDesktop | WalletOS = WalletOS.Windows

  get karbo() {
    return this.$accessor.wallets.karbo
  }

  get tabs(): Record<Tab, TabValue> {
    return {
      [WalletOS.Windows]: {
        icon: 'wallets/windows',
        label: this.$t('download.tabs.windows') as string,
        wallets: [
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
      },
      [WalletOS.MacOS]: {
        icon: 'wallets/apple',
        label: this.$t('download.tabs.macos') as string,
        wallets: [
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
      },
      [WalletOS.Ubuntu]: {
        icon: 'wallets/linux',
        label: this.$t('download.tabs.linux') as string,
        wallets: [
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
      },
      [NoDesktop.Mobile]: {
        icon: 'wallets/mobile',
        label: this.$t('download.tabs.mobile') as string,
        wallets: [
          {
            tag: 'official',
            type: 'android',
            icon: 'wallets/android',
            link: this.$accessor.wallets.mobile.android,
          },
        ],
      },
      [NoDesktop.Web]: {
        icon: 'wallets/web',
        label: this.$t('download.tabs.web') as string,
        wallets: [
          {
            tag: 'custodial',
            type: 'web',
            link: this.$accessor.wallets.web,
          },
        ],
      },
      // [NoDesktop.Paper]: {
      //   icon: 'wallets/paper',
      //   label: this.$t('download.tabs.paper'),
      // },
    }
  }

  mounted() {
    this.setActiveTab(detectDefaultTab())

    const resizeHandler = () => {
      this.updateGroupDisplay(this.active)
    }

    window.addEventListener('resize', resizeHandler)

    this.$once('unmounted', () => window.removeEventListener('resize', resizeHandler))
  }

  setActiveTab(tab: WalletOS | NoDesktop) {
    this.active = tab

    const activeTab = this.$refs[`tab-${tab}`]
    if (activeTab && Array.isArray(activeTab) && activeTab[0]) {
      const tabElement: HTMLElement = activeTab[0] as HTMLElement

      this.$scrollTo(tabElement, 300, {
        container: this.tabsElement,
        offset: (this.tabsElement.offsetWidth - tabElement.offsetWidth) / -2,
        x: true,
        y: false,
      })

      this.updateGroupDisplay(tab)
    }
  }

  updateGroupDisplay(tab: Tab) {
    const active = Object.values(this.tabs).indexOf(this.tabs[tab])
    const children: HTMLElement[] = Array.from(this.walletsElement.children) as HTMLElement[]

    // Timeout set because render height is wrong in the beginnings
    setTimeout(() => {
      this.walletsElement.style.height = `${children[active].offsetHeight}px`
    }, 100)

    children.forEach((group, i) => {
      group.style.left = `${this.walletsElement.offsetWidth * (i - active)}px`
    })
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
            transition: all .15s ease-in;

            > .icon {
              @apply text-blue-icon;
            }
          }

          &.active {
            @apply text-denim-dark;

            > figure {
              @apply bg-blue-mid;
              > .icon {
                @apply text-white;
              }
            }
          }

          &:hover {
            > figure {
              transform: scale(1.2);
            }
          }
        }
      }

      > .wallets {
        @include scrollbar();
        transition: height .4s ease-out;

        .wallets-group {
          transition: left .4s ease-out;
        }

        .wallet {
          .tag {
            font-size: 10px;
            letter-spacing: 0.5px;
          }
        }
      }
    }
  }

  @screen md {
    > section {
      > main {
        > .wallets {
          max-height: 24rem;
        }
      }
    }
  }

  @media (max-width: theme('screens.md')) {
    > section {
      > main {
        margin-left: -$mobile-padding;
        margin-right: -$mobile-padding;

        > ul {
          padding-bottom: 1rem;

          > li {
            &:first-child {
              margin-left: $mobile-padding;
            }
          }
        }

        > .wallets {
          > .wallets-group {
            padding-left: $mobile-padding;
            padding-right: $mobile-padding;
          }
        }
      }
    }
  }
}
</style>
