<template>
  <article id="about" class="pt-16 lg:px-32">
    <header>
      <span class="uppercase text-mono text-yellow text-sm font-bold tracking-widest">
        About
      </span>
      <h2 class="text-5xl font-extrabold">
        Main Title About Karbo
      </h2>
      <p class="text-xl text-grey max-w-3xl">
        Karbo does not have centralized management or issuer and ensures privacy and anonymity of transactions without intermediaries and regulators.
      </p>
    </header>
    <main class="flex mt-16">
      <section class="pr-12">
        <SvgIcon name="about/privacy" class="w-12 h-12 mb-5" />
        <span class="text-xl font-bold">Anonymity</span>
        <p class="text-grey">
          The anonymity of payments without the ability to track them, resistance to the blockchain analysis is provided by technology CryptoNote.
        </p>
      </section>
      <section class="pr-16">
        <SvgIcon name="about/liberty" class="w-12 h-12 mb-5" />
        <span class="text-xl font-bold">Liberty</span>
        <p class="text-grey">
          The network, transactions, your account, and karbos are cryptographically protected. Only you control your karbos and are responsible for their safety.
        </p>
      </section>
      <section class="pr-16">
        <SvgIcon name="about/no_intermediaries" class="w-12 h-12 mb-5" />
        <span class="text-xl font-bold">No Intermediaries</span>
        <p class="text-grey">
          The emissions system operates according to a predefined mathematical algorithm without central control bodies. The protocol emulates central bank.
        </p>
      </section>
      <section class="pr-16">
        <SvgIcon name="about/openness" class="w-12 h-12 mb-5" />
        <span class="text-xl font-bold">No Intermediaries</span>
        <span class="text-xl font-bold">Openness</span>
        <p class="text-grey">
          Karbo is an open and decentralized network. Everyone is welcomed to contribute, participate in mining, development and governance.
        </p>
      </section>
    </main>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {
}
</script>

<style scoped>
</style>