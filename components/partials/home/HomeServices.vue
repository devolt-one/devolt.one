<template>
  <section v-editable="blok" class="py-16" :class="[blok.classes]">
    <div class="container mx-auto">
      <div class="w-full text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-montserrat font-black leading-tight"
        >
          {{ blok.title }}
        </h1>
        <p class="text-3xl md:text-4xl font-bold leading-tight">
          {{ blok.subtitle }}
        </p>
      </div>

      <div class="w-full flex flex-wrap">
        <div class="w-full md:w-1/3 flex flex-col mb-12 md:mb-0">
          <div
            v-for="service in services"
            :key="`home-service-${service.id}`"
            class="service-switch text-2xl font-bold leading-tight pl-4 py-1 my-3 mr-4 cursor-pointer"
            :class="{
              'service-switch--active': activeServiceId === service.id
            }"
            @click="activeServiceId = service.id"
          >
            <span class="relative z-10">{{ service.content.title }}</span>
          </div>
        </div>

        <div class="w-full md:w-2/3 md:pl-4">
          <article
            v-for="service in services"
            :key="`home-service-${service.id}-description`"
            :class="{ hidden: activeServiceId !== service.id }"
          >
            <service-description v-html="$md.render(service.content.excerpt)" />
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
    blok: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    activeServiceId: null
  }),
  computed: {
    activeService() {
      return this.services.filter(({ id }) => id === this.activeServiceId)[0]
    },
    services() {
      return this.blok.services
    }
  },
  watch: {
    blok(val) {
      console.log(val)
    }
  },
  created() {
    this.activeServiceId =
      this.activeServiceId || (this.services[0] ? this.services[0].id : 0)
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
