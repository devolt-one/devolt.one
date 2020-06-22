<template>
  <div>
    <page-heading :title="$t('service.meta.title')"></page-heading>

    <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
      <div class="container mx-auto">
        <div class="w-full flex flex-wrap">
          <div class="w-full md:w-1/3 flex flex-col mb-12 md:mb-0">
            <div
              :key="`home-service-web-development-title`"
              class="service-switch text-2xl font-bold leading-tight pl-4 py-1 my-3 mr-4 cursor-pointer"
            >
              <span class="relative z-10">{{ service.title }}</span>
            </div>
          </div>

          <div class="w-full md:w-2/3 md:pl-4">
            <article :key="`home-service-web-development`">
              <!-- eslint-disable vue/no-v-html -->
              <service-description
                v-html="$md.render(service.home_description)"
              />
              <!-- eslint-enable -->
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    activeServiceSlug: null,
    targetServices: ['web-development', 'design']
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
  }
}
</script>

<style lang="scss" scoped>
.service-switch {
  position: relative;

  transition-duration: 380ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &::before {
    @apply bg-secondary-base;
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    z-index: 5;

    will-change: transform;
    transition-duration: 380ms;

    transform-origin: bottom left;
    transform: scaleY(0);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .dark-mode & {
    will-change: color;
  }

  &:hover,
  &--active {
    .dark-mode & {
      @apply text-black;
    }

    &::before {
      transform: scaleY(1);
    }
  }
}
</style>
