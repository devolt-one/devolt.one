<template>
  <header class="flex items-center justify-between pl-4 md:pl-12">
    <!-- Logo -->
    <nuxt-link :to="{ name: 'index' }">
      <h1 class="m-0 h-0 w-0 overflow-hidden">Devolt</h1>
      <devolt-logo class="h-8 md:h-12 w-auto text-black" />
    </nuxt-link>

    <div class="flex items-center">
      <button class="p-3 lg:p-4 bg-primary-base text-white focus:outline-none">
        <menu-icon class="h-12 w-12 md:h-16 md:w-16" />
      </button>
    </div>
  </header>
</template>

<script>
import DevoltLogo from '@/assets/images/logo.svg?inline'

import MenuIcon from '@/assets/icons/elastofont/menu.svg?inline'

export default {
  components: {
    DevoltLogo,
    MenuIcon
  }
}
</script>
