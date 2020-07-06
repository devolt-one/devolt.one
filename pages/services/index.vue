<template>
  <div>
    <page-heading :title="$t('services.meta.title')"></page-heading>

    <section class="text-black bg-white dark:bg-dark-surface dark:text-white">
      <div class="container mx-auto my-16">
        <div
          v-for="(service, index) in services"
          :key="`home-service-${service.slug}`"
          class="grid gap-4 my-16 md:grid-cols-2"
        >
          <div class="w-full">
            <h2 class="text-4xl font-bold mb-12d" v-text="service.title" />

            <div class="w-full">
              <article>
                <!-- eslint-disable vue/no-v-html -->
                <service-description
                  v-if="service.excerpt"
                  v-html="$md.render(service.excerpt)"
                />
                <!-- eslint-enable -->
              </article>
            </div>
          </div>

          <div
            class="object-center w-full"
            :class="{
              'order-first': index % 2 !== 0
            }"
          >
            <picture>
              <img :src="service.image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    const slugs = ['web-development', 'design']

    const services = (
      await $content(`${app.i18n.locale}/services`).fetch()
    ).sort(({ slug: a }, { slug: b }) => slugs.indexOf(a) - slugs.indexOf(b))

    return {
      services
    }
  },
  head() {
    return {
      title: `${this.$t('services.meta.title')} - ${this.$t(
        'homepage.meta.shortName'
      )}`
    }
  }
}
</script>
