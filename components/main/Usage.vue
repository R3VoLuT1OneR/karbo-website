<template>
  <article class="flex flex-col justify-center items-center mt-24 lg:px-32">
    <header class="text-center max-w-xl">
      <span class="uppercase text-mono text-yellow text-sm font-bold tracking-widest">
        Usage
      </span>
      <h2 class="text-5xl font-extrabold">
        Where to Get, Spend or Exchange Karbo
      </h2>
      <p class="text-grey text-xl">
        Exchanges, shops, faucets and other services
      </p>
    </header>
    <main class="usage-list w-full mt-10">
      <ul class="list-reset flex justify-center">
        <li
          v-for="({ label }, i) in listGroups"
          :key="i"
          class="px-16 py-4"
          :class="{ 'active': i === activeGroup }"
          @click="activeGroup = i"
        >
          <a
            class="text-sm font-bold"
            :class="{
              'text-grey': i !== activeGroup
            }"
          >{{ label }}</a>
        </li>
      </ul>
      <section ref="groups" class="mt-12 overflow-hidden relative">
        <div
          v-for="({ list }, i) in listGroups"
          :key="i"
          class="absolute usage-group grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3 list-reset"
        >
          <article
            v-for="({ title, subtitle, icon, href }, j) in list"
            :key="j"
          >
            <a
              :href="href"
              target="_blank"
              class="flex relative p-3"
            >
              <aside class="mr-3">
                <SvgIcon :name="icon" class="w-12 h-12" />
              </aside>
              <main>
                <h5 class="text-lg font-bold">{{ title }}</h5>
                <p class="text-sm text-grey">{{ subtitle }}</p>
              </main>
              <SvgIcon class="external w-4 h-4 text-grey ml-auto" name="external" />
            </a>
          </article>
        </div>
      </section>
    </main>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator'

@Component
export default class Usage extends Vue {
  @Ref() readonly groups!: HTMLElement

  activeGroup: number = 0

  mounted() {
    const resizeHandler = () => {
      this.updateGroupDisplay(this.activeGroup)
    }

    window.addEventListener('resize', resizeHandler)

    this.$once('unmounted', () => {
      window.removeEventListener('resize', resizeHandler)
    })

    this.$watch('activeGroup', (val: number) => this.updateGroupDisplay(val))
    this.updateGroupDisplay(this.activeGroup)
  }

  updateGroupDisplay(activeGroup: number) {
    const children: HTMLElement[] = Array.from(this.groups.children) as HTMLElement[]

    // this.groups.style.height = `${children.reduce((acc, curr) => Math.max(acc, curr.offsetHeight), 0)}px`
    this.groups.style.height = `${children[this.activeGroup].offsetHeight}px`

    children.forEach((group, i) => {
      group.style.left = `${this.groups.offsetWidth * (i - activeGroup)}px`
    })
  }

  get listGroups() {
    return [
      {
        label: 'Exchange',
        list: [
          {
            icon: 'usage/btc-trade',
            title: 'Citext',
            subtitle: 'Peer-to-peer digital asset trading platform. Peer-to-peer digital asset trading platform.',
            href: '',
          },
          {
            icon: 'usage/btc-trade',
            title: 'Cryptobuy',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
        ],
      },
      {
        label: 'Merchant',
        list: [
          {
            icon: 'usage/btc-trade',
            title: 'Cryptobuy',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
        ],
      },
      {
        label: 'Charity',
        list: [
          {
            icon: 'usage/btc-trade',
            title: 'BTC Trade UA',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
        ],
      },
      {
        label: 'Other',
        list: [
          {
            icon: 'usage/btc-trade',
            title: 'Cryptobuy',
            subtitle: 'Peer-to-peer digital asset trading platform.',
            href: '',
          },
        ],
      },
    ]
  }

  get activeGroupList() {
    return this.listGroups[this.activeGroup].list
  }
}
</script>

<style lang="scss" scoped>
.usage-list {
  > ul {
    > li {
      @apply cursor-pointer;
      border-top: 4px solid transparent;
      transition: border-top-color .25s ease-out, color .25s ease-out;

      &.active {
        border-top-color: theme('colors.blue');
      }
      &:not(:last-child) {
        border-right: 1px solid rgba(26, 47, 97, 0.1);
      }
    }
  }
}
.usage-group {
  transition: left .4s ease-out, height .4s ease-out;
  .external {
    min-width: 1rem;
  }
}
</style>
