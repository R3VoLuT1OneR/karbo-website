<template>
  <article>
    <header>
      About
      <h2>
        Main Title About Karbo
      </h2>
      <p>
        Karbo does not have centralized management or issuer and ensures privacy and anonymity of transactions without intermediaries and regulators.
      </p>
    </header>
    <main>
      <section>
        <span>Anonymity</span>
        <p>The anonymity of payments without the ability to track them, resistance to the blockchain analysis is provided by technology CryptoNote.</p>
      </section>
      <section>
        <span>Liberty</span>
        <p>The network, transactions, your account, and karbos are cryptographically protected. Only you control your karbos and are responsible for their safety.</p>
      </section>
      <section>
        <span>No Intermediaries</span>
        <p>The emissions system operates according to a predefined mathematical algorithm without central control bodies. The protocol emulates central bank.</p>
      </section>
      <section>
        <span>Openness</span>
        <p>Karbo is an open and decentralized network. Everyone is welcomed to contribute, participate in mining, development and governance.</p>
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
