<template>
  <div>
    <home-welcome id="welcome" class="pb-16" />
    <home-about id="about" class="py-16" :about="about" />
    <home-projects id="projects" class="py-16" />
    <contact-us class="py-32" />
    <home-services class="py-16" :target-services="targetServices" />
  </div>
</template>

<script>
export default {
  asyncData({ app, error }) {
    return Promise.all([import(`@/content/about/${app.i18n.locale}.md`)]).then(
      ([{ default: about }]) => ({
        about
      })
    )
  },
  data: () => ({
    targetServices: ['web-development', 'design']
  }),
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
