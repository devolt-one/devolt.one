<template>
  <div class="flex flex-col items-center justify-center flex-1">
    <img
      src="~/assets/images/404.png"
      alt="sad emoji"
      class="w-auto h-12 mb-12 lg:mb-16"
    />

    <h1
      class="mb-4 text-2xl font-black text-center lg:mb-8 md:text-4xl lg:text-6xl font-montserrat"
    >
      {{ $t('404.not-found') }}
    </h1>

    <p
      class="max-w-2xl mb-12 text-center lg:mb-16 text-md md:text-lg lg:max-w-4xl lg:text-2xl"
    >
      {{ $t('404.description') }}
    </p>

    <app-button :to="localePath('index')">
      {{ $t('404.home') }}
      <arrow-icon slot="icon" />
    </app-button>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: { ArrowIcon },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
