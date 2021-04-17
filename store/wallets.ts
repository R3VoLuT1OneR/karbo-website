import Vue from 'vue'
import { Octokit } from '@octokit/rest'

import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '~/store/index'

const octokit = new Octokit()

export enum WalletOS {
  Windows = 'windows',
  Ubuntu = 'ubuntu',
  MacOS = 'macos',
}

export enum WalletVersion {
  Karbowanec= 'karbowanec',
  Karbo = 'karbo',
}

export enum WalletType {
  CLI = 'cli',
  Classic = 'classic',
  Spring = 'spring',
  Lite = 'lite',
}

export interface WalletDetail {
  os: WalletOS
  href: string
  version: string
}

export type WalletDetails = Record<WalletOS, WalletDetail>

export interface StoreState {
  mobile: {
    android: string
  },

  web: string

  karbo: {
    [k in WalletType]: {
      source: string
      details?: WalletDetails,
      loading?: Promise<WalletDetails>,
    }
  }

  karbowanec: {
    [k in WalletType]: {
      source: string
      details?: WalletDetails,
      loading?: Promise<WalletDetails>,
    }
  }
}

export const state = (): StoreState => ({
  web: 'https://wallet.karbo.org/',

  mobile: {
    android: 'https://play.google.com/store/apps/details?id=org.karbo.karbon',
  },

  karbo: {
    cli: {
      source: 'https://github.com/Karbovanets/karbo',
    },
    classic: {
      source: 'https://github.com/Karbovanets/karbowanecwallet',
    },
    spring: {
      source: 'https://github.com/Karbovanets/Karbo-GUI',
    },
    lite: {
      source: 'https://github.com/Karbovanets/Karbo-lite',
    },
  },

  karbowanec: {
    cli: {
      source: 'https://github.com/seredat/karbowanec',
    },
    classic: {
      source: 'https://github.com/seredat/karbowanecwallet',
    },
    spring: {
      source: 'https://github.com/seredat/karbo-gui',
    },
    lite: {
      source: 'https://github.com/Karbovanets/Karbo-lite',
    },
  },
})

export const mutations: MutationTree<StoreState> = {
  setWalletVersion(state, { version, data }) {
    Vue.set(state, version, data)
  },

  setWalletDetails(state, { version, type, details }: {
    version: WalletVersion,
    type: WalletType,
    details: WalletDetails,
  }) {
    Vue.set(state[version][type], 'details', details)
    Vue.set(state[version][type], 'loading', undefined)
  },

  setWalletLoading(state, { version, type, loading }: {
    version: WalletVersion,
    type: WalletType,
    loading: Promise<WalletDetails>,
  }) {
    Vue.set(state[version][type], 'loading', loading)
  },
}

export const actions: ActionTree<StoreState, RootState> = {
  async fetchWalletDetails({ commit, state }, { version, type }: { version: WalletVersion, type: WalletType }) {
    const curr = state[version][type]

    if (curr.details) {
      return curr.details
    }

    if (curr.loading) {
      return await curr.loading
    }

    const { owner, repo, os: oses } = githubDetails[version][type]
    const loading = octokit.repos.listReleases({ owner, repo })
      .then((rsp): WalletDetails => {
        const version = rsp.data[0].tag_name
        return rsp.data[0].assets.reduce((acc, asset) => {
          for (const [os, regexp] of Object.entries(oses)) {
            if (regexp && regexp.test(asset.name)) {
              return { ...acc, [os]: { href: asset.browser_download_url, version, os } }
            }
          }

          return acc
        }, {} as WalletDetails)
      })

    commit('setWalletLoading', { version, type, loading })
    commit('setWalletDetails', { version, type, details: await loading })
  },

  async fetchAll({ dispatch }) {
    return await Promise.all([
      // dispatch('fetchWalletDetails', { version: WalletVersion.Karbowanec, type: WalletType.CLI }),
      // dispatch('fetchWalletDetails', { version: WalletVersion.Karbowanec, type: WalletType.Classic }),
      // dispatch('fetchWalletDetails', { version: WalletVersion.Karbowanec, type: WalletType.Spring }),
      // dispatch('fetchWalletDetails', { version: WalletVersion.Karbowanec, type: WalletType.Lite }),

      dispatch('fetchWalletDetails', { version: WalletVersion.Karbo, type: WalletType.CLI }),
      dispatch('fetchWalletDetails', { version: WalletVersion.Karbo, type: WalletType.Classic }),
      dispatch('fetchWalletDetails', { version: WalletVersion.Karbo, type: WalletType.Spring }),
      dispatch('fetchWalletDetails', { version: WalletVersion.Karbo, type: WalletType.Lite }),
    ])
  },
}

const githubDetails = {
  karbowanec: {
    cli: {
      owner: 'seredat',
      repo: 'karbowanec',
      os: {
        [WalletOS.Windows]: /^Karbo-cli-win64/,
        [WalletOS.MacOS]: /^Karbo-cli-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-cli-ubuntu20.04/,
      },
    },
    classic: {
      owner: 'seredat',
      repo: 'karbowanecwallet',
      os: {
        [WalletOS.Windows]: /^Karbo-wallet-win64-.*-install\.zip/,
        [WalletOS.MacOS]: /^Karbo-wallet-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-wallet-ubuntu20.04/,
      },
    },
    spring: {
      owner: 'seredat',
      repo: 'Karbo-GUI',
      os: {
        [WalletOS.Windows]: /^karbowallet-win64/,
        [WalletOS.MacOS]: /^karbowallet-macOS/,
        [WalletOS.Ubuntu]: /^karbowallet-ubuntu-20.04/,
      },
    },
    lite: {
      owner: 'Karbovanets',
      repo: 'Karbo-lite',
      os: {
        [WalletOS.Windows]: /^KarboLite-wallet-win64/,
        [WalletOS.MacOS]: /^KarboLite-wallet-macOS/,
        [WalletOS.Ubuntu]: /^KarboLite-ubuntu20.04/,
      },
    },
  },
  karbo: {
    cli: {
      owner: 'Karbovanets',
      repo: 'karbo',
      os: {
        [WalletOS.Windows]: /^Karbo-cli-win64/,
        [WalletOS.MacOS]: /^Karbo-cli-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-cli-ubuntu20.04/,
      },
    },
    classic: {
      owner: 'Karbovanets',
      repo: 'karbowanecwallet',
      os: {
        [WalletOS.Windows]: /^Karbo-wallet-win64-.*-install\.zip/,
        [WalletOS.MacOS]: /^Karbo-wallet-macOS/,
        [WalletOS.Ubuntu]: /^Karbo-wallet-ubuntu20.04/,
      },
    },
    spring: {
      owner: 'Karbovanets',
      repo: 'Karbo-GUI',
      os: {
        [WalletOS.Windows]: /^karbowallet-win64/,
        [WalletOS.MacOS]: /^karbowallet-macOS/,
        [WalletOS.Ubuntu]: /^karbowallet-ubuntu-20.04/,
      },
    },
    lite: {
      owner: 'Karbovanets',
      repo: 'Karbo-lite',
      os: {
        [WalletOS.Windows]: /^KarboLite-wallet-win64/,
        [WalletOS.MacOS]: /^KarboLite-wallet-macOS/,
        [WalletOS.Ubuntu]: /^KarboLite-ubuntu20.04/,
      },
    },
  },
}
