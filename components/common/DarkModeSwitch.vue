<template>
  <div v-show="false">
    <button
      v-smart-scroll
      aria-label="Dark Mode Switch"
      class="fixed z-50 p-4 text-white rounded-full bottom-4 left-4 bg-dark-surface dark:bg-white dark:text-black focus:outline-none shadow-fab"
      @click="setCurrentTheme"
    >
      <transition name="from-bottom-to-bottom" mode="out-in">
        <moon-icon v-if="$colorMode.preference === 'dark'" class="w-8 h-8" />
        <sun-icon
          v-else-if="$colorMode.preference === 'light'"
          class="w-8 h-8"
        />
        <monitor-icon
          v-else-if="$colorMode.preference === 'system'"
          class="w-8 h-8"
        />
      </transition>
    </button>

    <div ref="clip" class="clip" :class="{ 'clip--active': active }"></div>
  </div>
</template>

<script>
import smartScroll from '@/directives/smartScroll'

import MoonIcon from '@/assets/icons/feather/moon-1.svg?inline'
import SunIcon from '@/assets/icons/feather/sun-1.svg?inline'
import MonitorIcon from '@/assets/icons/feather/monitor-1.svg?inline'

export default {
  components: {
    MoonIcon,
    SunIcon,
    MonitorIcon
  },
  directives: {
    smartScroll
  },
  data: () => ({
    active: false
  }),
  methods: {
    switchTheme() {
      if (this.active) return

      this.active = true

      // $this.refs.clip

      setTimeout(() => {
        this.setCurrentTheme()
        this.active = false
      }, 1000)
    },
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

<style scoped lang="scss">
button {
  will-change: transform;
  transition: transform 0.1s ease-in;

  &.smartscroll {
    &--hidden {
      transform: scale(0);

      @screen lg {
        transform: none;
      }
    }
  }
}

.clip {
  position: fixed;

  bottom: 3rem;
  left: 3rem;

  width: 0rem;
  height: 0rem;

  border-radius: 100%;

  // mix-blend-mode: difference;
  // background-blend-mode: difference;

  &--animated {
    animation: open 1.5s ease-in;
  }
}

@keyframes open {
  0% {
    bottom: 3rem;
    left: 3rem;
    width: 0rem;
    height: 0rem;
    clip-path: circle(0rem at center);
  }
  100% {
    //You can't use translate(-50%, -50%) to keep it aligned because it affects the container inside, so you need to animate the position
    bottom: calc(-250vmax + 3rem);
    left: calc(-250vmax + 3rem);
    width: 500vmax;
    height: 500vmax;
    clip-path: circle(100% at center);
  }
}
</style>
