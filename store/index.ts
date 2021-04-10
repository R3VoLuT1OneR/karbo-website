import { getAccessorType } from 'typed-vuex'
import * as tailwind from './tailwind'

export const state = () => ({
})

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

export type RootState = ReturnType<typeof state>

export const accessorType = getAccessorType({
  state,
  modules: {
    tailwind,
  },
})
