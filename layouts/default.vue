<template>
  <div>
    <the-navbar />

    <main class="pt-24">
      <nuxt />
    </main>

    <dark-mode-switch />
  </div>
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        ...i18nSeo.meta,
        // Open Graph
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Devolt Agency'
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
        // Twitter Card
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Devolt Agency'
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
