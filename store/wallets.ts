import Vue from 'vue'
import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '~/store/index'

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
  setWalletDetails(state, { version, type, details }: {
    version: WalletVersion,
    type: WalletType,
    details: WalletDetails,
  }) {
    Vue.set(state[version][type], 'details', details)
  },
}

export const actions: ActionTree<StoreState, RootState> = {
  async load({ commit }) {
    return await Promise.all([
      (async () => {
        const details = await import('~/data/karbo-cli.json')
        commit('setWalletDetails', { details, version: WalletVersion.Karbo, type: WalletType.CLI })
      })(),
      (async () => {
        const details = await import('~/data/karbo-classic.json')
        commit('setWalletDetails', { details, version: WalletVersion.Karbo, type: WalletType.Classic })
      })(),
      (async () => {
        const details = await import('~/data/karbo-spring.json')
        commit('setWalletDetails', { details, version: WalletVersion.Karbo, type: WalletType.Spring })
      })(),
      (async () => {
        const details = await import('~/data/karbo-lite.json')
        commit('setWalletDetails', { details, version: WalletVersion.Karbo, type: WalletType.Lite })
      })(),
    ])
  },
}
