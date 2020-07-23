<template>
  <section
    class="text-black bg-white about dark:bg-dark-surface dark:text-white"
  >
    <div class="container flex flex-wrap mx-auto">
      <div class="hidden w-full md:block md:w-1/4">
        <h2 class="text-3xl font-bold leading-tight md:text-4xl">
          {{ $t('homepage.about.aboutUs') }}
        </h2>
      </div>
      <div class="w-full about md:w-3/4 md:pl-2">
        <nuxt-content :document="about" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.about {
  .nuxt-content {
    h3 {
      @apply text-3xl font-bold leading-tight mb-5;

      @screen md {
        @apply text-4xl;
      }
    }

    h4 {
      @apply text-xl leading-tight mb-4;

      @screen md {
        @apply text-2xl;
      }
    }

    p {
      @apply text-lg leading-tight py-1 mb-4;
    }
  }
}
</style>
