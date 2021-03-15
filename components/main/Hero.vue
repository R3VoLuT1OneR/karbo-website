<template>
  <section class="hero flex items-stretch pt-8 lg:px-32 lg:pb-16">
    <main class="flex flex-1 flex-col justify-between pt-12">
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
        <DownloadDropdown />
        <a href="https://github.com/Karbovanets/karbo" target="_blank" class="button border-blue-light px-6 ml-5">
          <SvgIcon name="github" class="w-5 mr-1" />
          <span>Contribute on Github</span>
          <SvgIcon name="arrow-left" class="text-blue-light w-3 ml-2" />
        </a>
      </footer>
    </main>
    <aside class="flex flex-1 justify-center align-middle">
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
.hero {
  background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%);
}
</style>
