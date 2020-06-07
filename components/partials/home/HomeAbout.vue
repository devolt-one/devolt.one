<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto flex flex-wrap">
      <div class="hidden md:block w-full md:w-1/4">
        <h2 class="text-3xl md:text-4xl font-bold leading-tight">
          {{ $t('homepage.about.aboutUs') }}
        </h2>
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div class="about w-full md:w-3/4 md:pl-2" v-html="about" />
      <!-- eslint-enable -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    about: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.about {
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
</style>
