<template>
  <article class="flex flex-row-reverse justify-between mt-40">
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
      <div>
        <button class="button bg-blue-light hover:bg-blue text-white px-6">
          View All Wallets and Clients
        </button>
      </div>
    </main>
    <aside>
      <img src="~/assets/images/wallet.svg" alt="Karbo Wallet">
    </aside>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Download extends Vue {
}
</script>

<style scoped>
</style>
