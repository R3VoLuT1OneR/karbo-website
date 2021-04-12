import { Octokit } from '@octokit/rest'

import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '~/store/index'

/* eslint-disable camelcase */
interface ReleaseAsset {
  name: string
  browser_download_url: string
}
/* eslint-enable camelcase */

export interface WalletDetails {
  os: string
  icon: string
  href: string
}

export interface StoreState {
  loaded: boolean
  wallets: WalletDetails[]
}

export const state = (): StoreState => ({
  loaded: false,
  wallets: [],
})

export const mutations: MutationTree<StoreState> = {
  setWallets: (state, wallets) => {
    state.wallets = wallets
    state.loaded = true
  },
}

export const actions: ActionTree<StoreState, RootState> = {
  async fetch({ commit, state }) {
    if (state.loaded) {
      return
    }

    const octokit = new Octokit()
    const assetsToOS = await octokit.repos.listReleases({
      owner: 'Karbovanets',
      repo: 'karbo',
    })
      .then(rsp => mapAssetsToOS(rsp.data[0].assets as ReleaseAsset[]))

    let walletsList = [
      {
        os: 'windows',
        icon: 'windows',
        label: this.$i18n.t('wallets.windows'),
        href: '',
      },
      {
        os: 'ubuntu',
        icon: 'linux',
        label: this.$i18n.t('wallets.linux'),
        href: '',
      },
      {
        os: 'macOS',
        icon: 'apple',
        label: this.$i18n.t('wallets.macos'),
        href: '',
      },
      {
        icon: 'android',
        href: 'https://play.google.com/store/apps/details?id=org.karbo.karbon',
        label: this.$i18n.t('wallets.android'),
      },
      {
        label: this.$i18n.t('wallets.web'),
        icon: 'web',
        href: 'https://wallet.karbo.org/',
      },
      // {
      //   label: this.$i18n.t('wallets.paper'),
      //   icon: 'paper',
      //   href: 'https://wallet.karbo.org/',
      // },
    ]

    walletsList = walletsList.map((w) => {
      if (w.os && assetsToOS[w.os]) {
        w.href = assetsToOS[w.os].browser_download_url
      }

      return w
    })

    commit('setWallets', walletsList)
  },
}

const mapAssetsToOS = (assets: ReleaseAsset[]): Record<string, ReleaseAsset> => {
  const mapNameRegexp: Record<string, RegExp> = {
    windows: /^Karbo-cli-win64/,
    macOS: /^Karbo-cli-macOS/,
    ubuntu: /^Karbo-cli-ubuntu20.04/,
  }

  return assets.reduce((acc, asset) => {
    for (const [os, regexp] of Object.entries(mapNameRegexp)) {
      if (regexp.test(asset.name)) {
        return { ...acc, [os]: asset }
      }
    }

    return acc
  }, {})
}
