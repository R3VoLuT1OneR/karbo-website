<template>
  <div class="main-layout">
    <Header class="fixed top-0 left-0 right-0 sm:h-12 md:h-20" />
    <Nuxt class="sm:mt-12 md:mt-20" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Footer from '~/components/layout/Footer.vue'
import Header from '~/components/layout/Header.vue'

@Component({
  components: {
    Footer,
    Header,
  },
})
export default class Layout extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
