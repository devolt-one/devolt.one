<template>
  <button
    class="fixed bottom-0 left-0 m-4 p-4 rounded-full bg-dark-surface dark:bg-white text-white dark:text-black focus:outline-none shadow-lg z-50"
    @click="setCurrentTheme"
  >
    <transition name="from-bottom-to-bottom" mode="out-in">
      <moon-icon v-if="$colorMode.preference === 'dark'" class="w-8 h-8" />
      <sun-icon v-else-if="$colorMode.preference === 'light'" class="w-8 h-8" />
      <monitor-icon
        v-else-if="$colorMode.preference === 'system'"
        class="w-8 h-8"
      />
    </transition>
  </button>
</template>

<script>
import MoonIcon from '@/assets/icons/feather/moon-1.svg?inline'
import SunIcon from '@/assets/icons/feather/sun-1.svg?inline'
import MonitorIcon from '@/assets/icons/feather/monitor-1.svg?inline'

export default {
  components: {
    MoonIcon,
    SunIcon,
    MonitorIcon
  },
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'system'
          ? 'light'
          : this.$colorMode.preference === 'light'
          ? 'dark'
          : 'system'
    }
  }
}
</script>
