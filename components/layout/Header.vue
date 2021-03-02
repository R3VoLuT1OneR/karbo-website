<template>
  <header class="flex w-full lg:py-6">
    <img class="lg:mr-24 lg:-mt-1" src="~/assets/images/logo.svg" width="128" height="142" alt="Karbo">
    <nav class="flex items-center">
      <a
        v-for="({ href, label }, i) in menu"
        :key="i"
        :href="href"
        class="font-medium lg:px-5"
      >
        {{ label }}
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ComponentName extends Vue {
  get menu() {
    return [
      {
        label: 'About',
        href: '#about',
      },
      {
        label: 'Download',
        href: '#download',
      },
      {
        label: 'Usage',
        href: '#usage',
      },
      {
        label: 'Community',
        href: '#community',
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
header {
  @apply flex
}
</style>
