<template>
  <div class="pt-24 text-black bg-white dark:bg-dark-surface dark:text-white">
    <the-navbar />

    <main>
      <nuxt />
    </main>

    <the-footer />

    <client-only>
      <dark-mode-switch />
    </client-only>

    <the-sidebar />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  watch: {
    $route() {
      this.toggle(false)
    }
  },
  methods: {
    ...mapMutations({ toggle: 'sidebar/toggle' })
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      titleTemplate: `%s — ${this.$t('homepage.meta.shortName')}`,
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        ...i18nSeo.meta,
        {
          hid: 'description',
          name: 'description',
          content: this.$t('homepage.meta.description')
        },
        // Open Graph
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.$t('homepage.meta.shortName')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('homepage.meta.description')
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/site_card_${this.$i18n.locale}.png`
        },
        // Twitter Card
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.$t('homepage.meta.title')
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: `/site_card_${this.$i18n.locale}.png`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('homepage.meta.description')
        }
      ],
      link: [...i18nSeo.link]
    }
  }
}
</script>

<style>
html,
body {
  overflow-x: hidden;
}
</style>
