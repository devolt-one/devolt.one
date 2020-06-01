<template>
  <div>
    <page-heading :title="$t('privacy.meta.title')"></page-heading>

    <section class="py-16">
      <div class="container mx-auto">
        <article class="markdown" v-html="policy" />
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/css/_markdown.scss'

export default {
  asyncData({ app }) {
    return import(`@/assets/privacy/${app.i18n.locale}.md`).then(
      ({ default: policy }) => {
        return {
          policy
        }
      }
    )
  },
  head() {
    return {
      title: `${this.$t('policy.meta.title')} - ${this.$t(
        'homepage.meta.shortName'
      )}`
    }
  }
}
</script>
