<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto">
      <div
        v-for="service in sortedServices"
        :key="`home-service-${service.slug}-title`"
        class="flex flex-row flex-row-reverse"
      >
        <div class="md:w-1/2">
          <div class="w-full mb-12 md:mb-0">
            <div class="text-4xl font-bold">
              <span class="z-10">{{ service.title }}</span>
            </div>
          </div>

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

        <div class="md:w-1/2 object-center">
          <picture>
            <img :src="getSrc(service.slug)" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    targetServices: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    activeServiceSlug: null
  }),
  computed: {
    activeService() {
      return this.activeServiceSlug &&
        Array.isArray(this.sortedServices) &&
        this.sortedServices.length
        ? this.sortedServices.filter(
            ({ slug }) => slug === this.activeServiceSlug
          )[0]
        : null
    },
    sortedServices() {
      return this.services
        .filter(({ slug }) => this.targetServices.includes(slug))
        .sort(
          ({ slug: a }, { slug: b }) =>
            this.targetServices.indexOf(a) - this.targetServices.indexOf(b)
        )
    },
    ...mapState({
      services: (state) => state.services.records
    })
  },
  created() {
    this.activeServiceSlug =
      Array.isArray(this.sortedServices) && this.sortedServices.length
        ? this.sortedServices[0].slug
        : null
  },
  methods: {
    getSrc(image) {
      return require('~/assets/images/services/' + image + '.png')
      // return '@/assets/images/services/' + image + '.png'
    }
  }
}
</script>

<style lang="scss" scoped></style>
