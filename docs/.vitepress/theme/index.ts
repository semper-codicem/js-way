import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // You can add custom slots here if needed
    })
  },
  enhanceApp({ app, router, siteData }: any) {
    // You can register Vue components here or manipulate router and site data
  }
} satisfies Theme