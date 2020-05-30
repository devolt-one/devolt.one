<template>
  <div>
    <home-welcome id="welcome" class="pb-16" />
    <home-about id="about" class="py-16" />
    <home-projects id="projects" class="py-16" />
    <contact-us class="py-32" />
    <home-services class="py-16" :services="services" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return Promise.all([
      context.app.$storyapi.get('cdn/stories', {
        version,
        starts_with:
          context.app.i18n.locale === context.app.i18n.defaultLocale
            ? `services`
            : `${context.app.i18n.locale}/services`,
        cv: context.store.state.cacheVersion
      })
    ])
      .then(([storyblok]) => {
        return {
          services: storyblok.data.stories
        }
      })
      .catch(context.error)
  },
  computed: {
    availableLocales() {
      return this.$i18n
    }
  },
  head() {
    return {
      title: this.$t('homepage.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('homepage.meta.description')
        },
        // Open Graph
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
        // Twitter Card
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
      ]
    }
  }
}
</script>
