<template>
  <section class="flex justify-between pt-8 lg:ml-6">
    <main class="flex flex-col justify-between pt-12">
      <header>
        <h2 class="lg:text-6xl lg:font-extrabold lg:leading-none">
          Anonymous<br>
          Exchange Medium
        </h2>
        <h3 class="text-grey font-mono lg:text-3xl">
          based on CryptoNote blockchain tech.
        </h3>
      </header>
      <footer class="flex flex-wrap justify-start">
        <download-dropdown />
        <button class="button border-blue-light">
          Contribute on Github
        </button>
      </footer>
    </main>
    <aside class="flex justify-center align-middle">
      <img class="block" src="~/assets/images/hero.svg" alt="Karbo">
    </aside>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import DownloadDropdown from '~/components/main/Hero/DownloadDropdown.vue'

@Component({
  components: {
    DownloadDropdown,
  },
})
export default class Hero extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
