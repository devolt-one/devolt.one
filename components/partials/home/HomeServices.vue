<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto">
      <div class="w-full text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-montserrat font-black leading-tight"
        >
          {{ $t('homepage.services.attrs.title') }}
        </h1>
        <p class="text-3xl md:text-4xl font-bold leading-tight">
          {{ $t('homepage.services.attrs.subtitle') }}
        </p>
      </div>

      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/3 flex flex-col">
          <div
            v-for="(service, serviceKey) in services"
            :key="`home-service-${serviceKey}`"
            class="service-switch text-2xl font-bold leading-tight pl-4 py-1 my-3 mr-4 cursor-pointer"
            :class="{ 'service-switch--active': activeService === serviceKey }"
            @click="activeService = serviceKey"
          >
            <span
              class="relative z-10"
              v-html="$t(`services.${serviceKey}.title`)"
            />
          </div>
        </div>
        <div class="w-full md:w-2/3"></div>
        <div class="w-full flex justify-around mt-16">
          <app-button>
            {{
              $t('homepage.services.readMore', {
                service: $t(`services.${serviceKey}.title`)
              })
            }}
          </app-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    activeService: null,
    services: {
      'web-development': { name: 'web-development' },
      design: { name: 'design' },
      seo: { name: 'seo' },
      crm: { name: 'crm' }
    }
  }),
  created() {
    this.activeService = Object.keys(this.services)[0]
  }
}
</script>

<style lang="scss" scoped>
.service-switch {
  position: relative;

  &::before {
    @apply bg-secondary-base;
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    z-index: 5;

    transition-duration: 380ms;
    will-change: transform;

    transform-origin: bottom left;
    transform: scaleY(0);
  }

  &:hover,
  &--active {
    &::before {
      transform: scaleY(1);
    }
  }
}
</style>
