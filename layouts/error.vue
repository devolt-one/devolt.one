<template>
  <div class="overflow-x-hidden __nuxt-error-page">
    <!-- <illustration
      class="absolute inset-x-0 top-0 mx-auto -mt-48 overflow-hidden"
    /> -->

    <div
      class="container relative z-0 flex flex-col items-center h-screen pt-24 pb-8 mx-auto"
    >
      <!-- Logo -->
      <nuxt-link :to="localePath('index')" class="mb-32">
        <span class="block w-0 h-0 m-0 overflow-hidden">
          {{ $t('homepage.meta.shortName') }}
        </span>
        <devolt-logo class="w-auto h-8" />
      </nuxt-link>

      <div class="flex flex-col items-center flex-grow mb-24">
        <page-404 v-if="statusCode === 404" :error="error" />
        <template v-else>
          <h1 class="mb-8 text-6xl font-black text-center font-montserrat">
            {{ message }}
          </h1>

          <app-button :to="localePath('index')">
            Домой
            <arrow-icon slot="icon" />
          </app-button>
        </template>
      </div>

      <div class="text-sm text-center">
        {{ $t('common.footer.designAndDevelopment') }}
        <a href="https://devolt.one/" class="text-lg font-montserrat">
          D.1
        </a>
        <br class="md:hidden" />
        &copy; 2020.
        {{ $t('common.footer.allRightsReserved') }}
      </div>
    </div>
  </div>
</template>

<script>
import DevoltLogo from '@/assets/images/logo-d-one.svg?inline'
// import Illustration from '@/assets/illustrations/404-illustration.svg?inline'

export default {
  components: {
    // Illustration,
    DevoltLogo
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'minimal',
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  head() {
    return {
      title: this.message
    }
  }
}
</script>
