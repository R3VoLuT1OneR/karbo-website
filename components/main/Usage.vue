<template>
  <article id="usage" class="usage py-12">
    <div class="md:container md:px-12 lg:px-16 xl:px-32">
      <header>
        <span class="uppercase font-mono text-orange text-sm font-bold tracking-widest">
          {{ $t('usage.label') }}
        </span>
        <h2 class="text-4xl font-extrabold mt-3 md:text-5xl">
          {{ $t('usage.title') }}
        </h2>
        <p class="text-xl text-grey-mid max-w-3xl">
          {{ $t('usage.description') }}
        </p>
      </header>
      <main class="usage-list w-full mt-10">
        <!--
        <ul ref="tabs" class="list-reset flex overflow-x-auto rounded-lg">
          <li
            v-for="({ label }, i) in listGroups"
            :key="i"
            :ref="`tab-${i}`"
            :class="{ 'active': i === activeGroup }"
            class="px-16 py-4 bg-white text-grey-mid font-semibold"
            @click="setActiveGroup(i)"
          >
            {{ label }}
          </li>
        </ul>
        -->
        <section ref="groups" class="mt-12 overflow-hidden relative p-2">
          <!--
          <div
            v-for="({ list }, i) in listGroups"
            :key="i"
            class="absolute usage-group grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3 list-reset"
          >
          -->
          <div
            class="usage-group grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3 list-reset"
          >
            <a
              v-for="({ title, subtitle, icon, href }, j) in listGroups[0].list"
              :key="j"
              :href="href"
              target="_blank"
              class="py-4 px-5 last:mb-4"
            >
              <SvgIcon :name="icon" class="w-16 h-16" />
              <main>
                <h4 class="text-2xl font-extrabold mt-2">{{ title }}</h4>
                <p class="text-grey-dark">{{ subtitle }}</p>
              </main>
            </a>
          </div>
        </section>
      </main>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'

@Component
export default class Usage extends Vue {
  @Ref() readonly groups!: HTMLElement
  @Ref('tabs') readonly tabsElement!: HTMLElement

  activeGroup: number = 0

  // mounted() {
  //   const resizeHandler = () => {
  //     this.updateGroupDisplay(this.activeGroup)
  //   }
  //
  //   window.addEventListener('resize', resizeHandler)
  //   this.$once('unmounted', () => {
  //     window.removeEventListener('resize', resizeHandler)
  //   })
  //
  //   this.setActiveGroup(0)
  // }

  get listGroups() {
    return [
      {
        label: 'Exchange',
        list: [
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Duis aute irure in reprenderit invas id voluptate velit esse cillum adipiscing.',
            href: 'https://btc-trade.com.ua/stock/krb_uah',
          },
          {
            icon: 'usage/richamster',
            title: 'Richamster',
            subtitle: 'Duis aute irure in reprenderit invas id voluptate velit esse cillum adipiscing.',
            href: 'https://richamster.com/',
          },
          {
            icon: 'usage/tradeogre',
            title: 'TradeOgre',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: 'https://tradeogre.com/exchange/BTC-KRB',
          },
          {
            icon: 'usage/occe',
            title: 'OCCE',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: 'https://www.occe.io/exchange/krb_btc',
          },
          {
            icon: 'usage/karbo24',
            title: 'Karbo24',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: 'https://karbo24.io/',
          },
          {
            icon: 'usage/crex24',
            title: 'Crex24',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: 'https://crex24.com/exchange/KRB-BTC',
          },
        ],
      },
    ]
  }

  get activeGroupList() {
    return this.listGroups[this.activeGroup].list
  }

  setActiveGroup(activeGroup: number) {
    this.activeGroup = activeGroup

    const activeTab = this.$refs[`tab-${activeGroup}`]
    if (activeTab && Array.isArray(activeTab) && activeTab[0]) {
      const tabElement: HTMLElement = activeTab[0] as HTMLElement

      this.$scrollTo(tabElement, 300, {
        container: this.tabsElement,
        offset: (this.tabsElement.offsetWidth - tabElement.offsetWidth) / -2,
        x: true,
        y: false,
      })

      this.updateGroupDisplay(activeGroup)
    }
  }

  updateGroupDisplay(activeGroup: number) {
    const children: HTMLElement[] = Array.from(this.groups.children) as HTMLElement[]

    // this.groups.style.height = `${children.reduce((acc, curr) => Math.max(acc, curr.offsetHeight), 0)}px`
    this.groups.style.height = `${children[this.activeGroup].offsetHeight}px`

    children.forEach((group, i) => {
      group.style.left = `${this.groups.offsetWidth * (i - activeGroup)}px`
    })
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/mixins";

.usage {
  @include mobile-padding();
  background: linear-gradient(180deg, #F6F8FC 0%, #F6F8FC 49.51%, #FFFFFF 100%);

  > div > main {
    > ul {
      > li {
        @apply cursor-pointer;

        &.active {
          @apply bg-blue-mid text-white;
        }
        &:not(:last-child) {
          border-right: 1px solid theme('colors.grey-light');
        }
      }
    }

    > section {
      > .usage-group {
        transition: left .4s ease-out, height .4s ease-out;

        > a {
          @apply bg-white rounded-lg;
          box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
        }

        .external {
          min-width: 1rem;
        }
      }
    }
  }

  @media (max-width: theme('screens.md')) {
    > div > main {
      > section {
        margin-left: -$mobile-padding;
        margin-right: -$mobile-padding;

        > .usage-group {
          @include mobile-padding();
        }
      }
    }
  }
}
</style>
