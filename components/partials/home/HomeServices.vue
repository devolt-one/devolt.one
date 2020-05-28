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
        <div class="w-full md:w-1/3 flex flex-col mb-12 md:mb-0">
          <div
            v-for="service in services"
            :key="`home-service-${service.sys.id}`"
            class="service-switch text-2xl font-bold leading-tight pl-4 py-1 my-3 mr-4 cursor-pointer"
            :class="{
              'service-switch--active': activeServiceId === service.sys.id
            }"
            @click="activeServiceId = service.sys.id"
          >
            <span class="relative z-10">{{ service.fields.title }}</span>
          </div>
        </div>

        <div class="w-full md:w-2/3 md:pl-4">
          <article>
            <service-description
              v-html="$md.render(activeService.fields.excerpt)"
            />
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
export default {
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    activeServiceId: null
  }),
  computed: {
    activeService() {
      return this.services.filter(
        ({ sys }) => sys.id === this.activeServiceId
      )[0]
    }
  },
  created() {
    this.activeServiceId = this.services[0].sys.id
  }
}
</script>

<style lang="scss" scoped>
.service-switch {
  position: relative;

  transition-duration: 380ms;

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
