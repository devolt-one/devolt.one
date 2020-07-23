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
  }
}
</script>
