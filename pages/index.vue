<template>
  <main>
    <Hero />
    <About />
    <Download />
    <Usage />
    <Social />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Hero from '~/components/main/Hero.vue'
import About from '~/components/main/About.vue'
import Download from '~/components/main/Download.vue'
import Usage from '~/components/main/Usage.vue'
import Social from '~/components/main/Social.vue'

@Component({
  components: {
    Hero,
    About,
    Download,
    Usage,
    Social,
  },
  async fetch({ store }) {
    await store.dispatch('wallets/load')
  },
})
export default class index extends Vue {}
</script>

<style scoped>
</style>
