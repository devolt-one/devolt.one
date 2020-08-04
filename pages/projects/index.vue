<template>
  <div>
    <page-heading
      :title="$t('projects.index.meta.title')"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') }
      ]"
    />
    <projects-list id="projects" :projects="projects" class="py-16" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, app, error }) {
    const projects = await $content(`${app.i18n.locale}/projects`)
      .only(['slug', 'createdAt', 'title', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      projects
    }
  },
  head() {
    return {
      title: this.$t('projects.index.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('projects.index.meta.description')
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('projects.index.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('projects.index.meta.description')
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('projects.index.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('projects.index.meta.description')
        }
      ]
    }
  }
}
</script>
