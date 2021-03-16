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
import { Octokit } from '@octokit/rest'
const octokit = new Octokit()

/* eslint-disable camelcase */
interface ReleaseAsset {
  name: string
  browser_download_url: string
}
/* eslint-enable camelcase */

@Component
export default class Download extends Vue {
  assets: ReleaseAsset[] = []

  async fetch() {
    const releases = await octokit.repos.listReleases({
      owner: 'Karbovanets',
      repo: 'karbo',
    })
      .then(rsp => rsp.data)

    this.assets = releases[0].assets
  }

  get wallets() {
    const assetsToOS = this.mapAssetsToOS()
    let walletsList = [
      {
        os: 'windows',
        icon: 'windows',
        href: '',
      },
      {
        os: 'ubuntu',
        icon: 'ubuntu',
        href: '',
      },
      {
        os: 'macOS',
        icon: 'apple',
        href: '',
      },
      {
        icon: 'android',
        href: 'https://play.google.com/store/apps/details?id=org.karbo.karbon',
      },
      {
        icon: 'sources',
        href: 'https://github.com/Karbovanets/karbo/releases',
      },
    ]

    walletsList = walletsList.map((w) => {
      if (w.os && assetsToOS[w.os]) {
        w.href = assetsToOS[w.os].browser_download_url
      }

      return w
    })

    return walletsList
  }

  private mapAssetsToOS(): Record<string, ReleaseAsset> {
    const mapNameRegexp: Record<string, RegExp> = {
      windows: /^Karbo-cli-win64/,
      macOS: /^Karbo-cli-macOS/,
      ubuntu: /^Karbo-cli-ubuntu20.04/,
    }

    return this.assets.reduce((acc, asset) => {
      for (const [os, regexp] of Object.entries(mapNameRegexp)) {
        if (regexp.test(asset.name)) {
          return { ...acc, [os]: asset }
        }
      }

      return acc
    }, {})
  }
}
</script>

<style scoped>
</style>
