<template>
  <section class="text-black bg-white dark:bg-dark-surface dark:text-white">
    <div class="container mx-auto">
      <div class="w-full mb-12 text-center">
        <h2
          class="text-4xl font-black leading-tight md:text-5xl font-montserrat"
        >
          {{ $t('homepage.services.attrs.title') }}
        </h2>
        <p class="text-3xl font-bold leading-tight md:text-4xl">
          {{ $t('homepage.services.attrs.subtitle') }}
        </p>
      </div>

      <div class="flex flex-wrap w-full">
        <div class="flex flex-col w-full mb-12 md:w-1/3 md:mb-0">
          <div
            v-for="service in services"
            :key="`home-service-${service.slug}-title`"
            class="py-1 pl-4 my-3 mr-4 text-2xl font-bold leading-tight cursor-pointer service-switch"
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
            v-for="service in services"
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
        <!-- <div class="flex justify-around w-full mt-16">
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
export default {
  props: {
    services: {
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
        Array.isArray(this.services) &&
        this.services.length
        ? this.services.filter(({ slug }) => slug === this.activeServiceSlug)[0]
        : null
    }
  },
  created() {
    this.activeServiceSlug =
      Array.isArray(this.services) && this.services.length
        ? this.services[0].slug
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
