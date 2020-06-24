<template>
  <div>
    <page-heading :title="$t('service.meta.title')"></page-heading>
    <page-service class="py-16" :target-services="targetServices" />
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
      title: `${this.$t('services.meta.title')} - ${this.$t(
        'homepage.meta.shortName'
      )}`
    }
  }
}
</script>
