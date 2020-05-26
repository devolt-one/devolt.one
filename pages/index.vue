<template>
  <div>
    <HomeWelcome id="welcome" class="mb-16" />
    <HomeAbout id="about" class="my-32" />
    <HomeProjects id="projects" class="my-32" />
  </div>
</template>

<script>
export default {
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
