<template>
  <div>
    <Header />
    <Nuxt />
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

<style>
</style>
