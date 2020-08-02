<template>
  <div>
    <page-heading
      :title="$t('services.meta.title')"
      :subtitle="$t('services.meta.subtitle')"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') }
      ]"
    />

    <section class="text-black bg-white dark:bg-dark-surface dark:text-white">
      <div class="container mx-auto my-16">
        <div
          v-for="(service, index) in services"
          :key="`home-service-${service.slug}`"
          class="relative grid gap-4 my-32 mt-16 md:my-16 lg:grid-cols-2"
          :class="`service--${service.slug}`"
        >
          <div
            class="w-full p-10"
            :class="{
              'lg:order-last': index % 2 === 0
            }"
          >
            <picture>
              <source
                :srcset="
                  require(`~/assets/illustrations/services/${service.slug}.png?resize&size=1024&webp`)
                "
                type="image/webp"
              />
              <source
                :srcset="
                  require(`~/assets/illustrations/services/${service.slug}.png?resize&size=1024`)
                "
                type="image/png"
              />
              <img
                class="object-center"
                :src="
                  require(`~/assets/illustrations/services/${service.slug}.png?resize&size=1024`)
                "
                :alt="service.title"
              />
            </picture>
          </div>
          <article class="w-full">
            <h2
              class="mb-6 text-4xl font-bold font-montserrat"
              v-text="service.title"
            />
            <!-- eslint-disable vue/no-v-html -->
            <service-description
              v-if="service.excerpt"
              v-html="$md.render(service.excerpt)"
            />
            <!-- eslint-enable -->
            <!-- <app-button class="w-full md:w-auto">
                {{ service.cta }}
                <arrow-icon slot="icon" />
              </app-button> -->
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ArrowIcon
  },
  async asyncData({ $content, app, error }) {
    const slugs = ['web', 'design', 'complex-services']

    let services = await $content(`${app.i18n.locale}/services`)
      .where({ slug: { $in: slugs } })
      .only(['title', 'excerpt', 'slug', 'cta'])
      .fetch()

    services = services
      .filter(({ slug }) => slugs.includes(slug))
      .sort(({ slug: a }, { slug: b }) => slugs.indexOf(a) - slugs.indexOf(b))

    return {
      services
    }
  },
  methods: {
    importImage(src) {
      return require(src)
    }
  },
  head() {
    return {
      title: this.$t('services.meta.title')
    }
  }
}
</script>
