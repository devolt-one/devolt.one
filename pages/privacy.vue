<template>
  <div>
    <page-heading
      :title="$t('privacy.meta.title')"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') }
      ]"
    />

    <section class="py-16">
      <div class="container mx-auto">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <article class="markdown">
          <nuxt-content :document="policy" />
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import '@/assets/css/_markdown.scss'

export default {
  async asyncData({ $content, app, error }) {
    const policy = await $content(`${app.i18n.locale}/privacy`).fetch()

    return {
      policy
    }
  },
  head() {
    return {
      title: this.$t('privacy.meta.title')
    }
  }
}
</script>
