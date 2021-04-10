import { Plugin } from '@nuxt/types'
import tailwindConfig from '~/tailwind.config'
import { ViewSizes } from '~/store/tailwind'

const tailwindPlugin: Plugin = ({ store }) => {
  const screenConfigs: Record<string, string> = tailwindConfig.theme.screens
  const screens: Record<ViewSizes, number> = Object.keys(screenConfigs)
    .reduce((acc, curr) => ({
      ...acc,
      [curr as ViewSizes]: Number(screenConfigs[curr].replace('px', '')),
    }), {}) as Record<ViewSizes, number>

  const updateViewSize = () => {
    let newSize = ViewSizes.SM

    for (const [screen, size] of Object.entries(screens)) {
      if (window.innerWidth >= size) {
        newSize = screen as ViewSizes
      }
    }

    store.commit('tailwind/setViewSize', newSize)
  }

  if (typeof window !== 'undefined') {
    updateViewSize()
    window.addEventListener('resize', updateViewSize)
  }
}

export default tailwindPlugin
