<template>
  <article id="download" class="flex flex-row-reverse justify-center pt-24 lg:px-32">
    <main class="flex flex-col justify-center">
      <span class="uppercase text-mono text-yellow text-sm font-bold tracking-widest">
        Download
      </span>
      <h2 class="text-5xl font-extrabold">
        Choose Your Wallet
      </h2>
      <p class="text-grey text-xl">
        Choose and download wallet for your operating system
      </p>
      <div class="flex pt-6 pb-8">
        <a
          v-for="({ icon, href }, i) in wallets"
          :key="i"
          :href="href"
          :class="{ 'mr-6': wallets.length - 1 !== i }"
          class="text-black mr-6 opacity-50 hover:opacity-100"
          target="_blank"
        >
          <SvgIcon :name="`wallets/${icon}`" class="w-6 h-6" />
        </a>
      </div>
    </main>
    <aside class="mr-64">
      <img src="~/assets/images/wallet.svg" alt="Karbo Wallet">
    </aside>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Download extends Vue {
  async fetch() {
    await this.$store.dispatch('wallets/fetch')
  }

  get wallets() {
    return this.$accessor.wallets.wallets
  }
}
</script>

<style scoped>
</style>
