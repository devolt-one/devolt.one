<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto">
      <div class="w-full text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-montserrat font-black leading-tight"
        >
          {{ $t('homepage.services.attrs.title') }}
        </h2>
        <p class="text-3xl md:text-4xl font-bold leading-tight">
          {{ $t('homepage.services.attrs.subtitle') }}
        </p>
      </div>

      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/3 flex flex-col mb-12 md:mb-0">
          <div
            v-for="service in sortedServices"
            :key="`home-service-${service.slug}-title`"
            class="service-switch text-2xl font-bold leading-tight pl-4 py-1 my-3 mr-4 cursor-pointer"
            :class="{
              'service-switch--active': activeServiceSlug === service.slug
            }"
            @click="activeServiceSlug = service.slug"
          >
            <span class="relative z-10">{{ service.title }}</span>
          </div>
        </div>

        <div class="w-full md:w-2/3 md:pl-4">
          <article
            v-for="service in sortedServices"
            :key="`home-service-${service.slug}`"
            :class="{ hidden: activeServiceSlug !== service.slug }"
          >
            <!-- eslint-disable vue/no-v-html -->
            <service-description
              v-html="$md.render(service.home_description)"
            />
            <!-- eslint-enable -->
          </article>
        </div>
        <!-- <div class="w-full flex justify-around mt-16">
          <app-button>
            {{
              $t('homepage.services.readMore', {
                service: activeService.fields.title
              })
            }}
          </app-button>
        </div> -->
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
