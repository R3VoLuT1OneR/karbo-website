<template>
  <header class="flex justify-between w-full lg:py-6 lg:px-24">
    <a href="/">
      <img class="lg:mr-24 lg:-mt-1" src="~/assets/images/logo.svg" width="128" height="142" alt="Karbo">
    </a>
    <nav class="flex flex-1 items-center">
      <a
        v-for="({ href, label }, i) in menu"
        :key="i"
        :href="href"
        class="font-medium lg:px-5"
      >
        {{ label }}
      </a>
    </nav>
    <LanguageList />
    <PriceList class="ml-4" />
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import PriceList from './Header/PriceList.vue'
import LanguageList from './Header/LanguageList.vue'

@Component({
  components: {
    PriceList,
    LanguageList,
  },
})
export default class ComponentName extends Vue {
  get menu() {
    return [
      {
        label: this.$t('About'),
        href: this.localePath({
          hash: '#about',
        }),
      },
      {
        label: this.$t('Download'),
        href: this.localePath({
          hash: '#download',
        }),
      },
      {
        label: this.$t('Usage'),
        href: this.localePath({
          hash: '#usage',
        }),
      },
      {
        label: this.$t('Community'),
        href: this.localePath({
          hash: '#community',
        }),
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
header {
  @apply flex;
}
</style>
