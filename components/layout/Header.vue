<template>
  <header class="w-full bg-white z-10" :class="{ 'has-shadow': hasShadow }">
    <div class="flex items-center w-full md:justify-between md:container md:py-6 xl:px-24 lg:px-12 md:px-6 bg-white">
      <a href="/" class="sm:flex-grow ml-5 z-20 md:ml-0">
        <span class="sr-only">{{ $t('karbo') }}</span>
        <img class="hidden md:block lg:mr-24 lg:-mt-1" src="~/assets/images/logo.svg" width="128" height="142" :alt="$t('karbo')">
        <img class="py-2 sm:block md:hidden" src="~/assets/images/logo_small.svg" width="35" height="35" :alt="$t('karbo')">
      </a>
      <nav class="hidden md:flex flex-grow md:items-center">
        <nuxt-link
          v-for="({ hash, label }, i) in menu"
          :key="i"
          :to="localeRoute({ hash })"
          class="text-xs lg:text-sm md:px-3 lg:px-4 xl:px-5"
        >
          {{ label }}
        </nuxt-link>
      </nav>
      <LanguageList class="hidden md:block" />
      <PriceList class="mr-4 md:ml-4 md:mr-0" />
      <SvgIcon name="menu" class="w-6 h-6 mr-3 text-blue-mid cursor-pointer md:hidden" @click="mobileMenu = true" />
      <no-ssr>
        <MobileModal
          :open="mobileMenu && $accessor.tailwind.viewSize === 'sm'"
          @close="mobileMenu = false"
        >
          <nav class="flex flex-col my-4">
            <nuxt-link
              v-for="({ hash, label }, i) in menu"
              :key="i"
              :to="localeRoute({ hash })"
              class="font-sm py-2 text-lg"
              @click.native="mobileMenu = false"
            >
              {{ label }}
            </nuxt-link>
          </nav>
          <LanguageList @selected="mobileMenu = false" />
        </MobileModal>
      </no-ssr>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PriceList from './Header/PriceList.vue'
import LanguageList from './Header/LanguageList.vue'
import MobileModal from '~/components/MobileModal.vue'

@Component({
  components: {
    PriceList,
    LanguageList,
    MobileModal,
  },
})
export default class ComponentName extends Vue {
  mobileMenu: boolean = false
  scrolled: boolean = false

  get menu() {
    return [
      {
        label: this.$t('menu.about'),
        hash: '#about',
      },
      {
        label: this.$t('menu.download'),
        hash: '#download',
      },
      {
        label: this.$t('menu.usage'),
        hash: '#usage',
      },
      {
        label: this.$t('menu.community'),
        hash: '#social',
      },
    ]
  }

  mounted() {
    const updateScrolled = () => {
      this.scrolled = window.scrollY > 0
    }

    document.addEventListener('scroll', updateScrolled)
    this.$once('beforeUnmount', () => {
      document.removeEventListener('scroll', updateScrolled)
    })
  }

  get hasShadow(): boolean {
    return this.scrolled || this.$accessor.tailwind.viewSize === 'sm'
  }
}
</script>

<style lang="scss" scoped>
header {
  @apply flex;

  &.has-shadow {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15027);
  }
}
</style>
