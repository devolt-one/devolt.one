<template>
  <div>
    <home-welcome id="welcome" class="pb-16" />
    <home-about id="about" class="py-16" />
    <home-projects id="projects" class="py-16" />
    <contact-us class="py-32" />
    <component
      :is="_blok.component"
      v-for="_blok in blok.content.body"
      :key="_blok._uid"
      :blok="_blok"
    />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return Promise.all([
      context.app.$storyapi.get('cdn/stories/home', {
        version,
        resolve_relations: 'home-services.services'
      })
    ])
      .then(([homepage]) => {
        return {
          blok: homepage.data.story
        }
      })
      .catch(context.error)
  },
  data: () => ({}),
  computed: {
    availableLocales() {
      return this.$i18n
    }
  },
  mounted() {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.blok.id) {
          this.blok = event.story
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
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
