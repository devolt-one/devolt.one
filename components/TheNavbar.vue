<template>
  <header
    v-smart-scroll="{ scrolled: 'navbar--elevated', hidden: 'navbar--hidden' }"
    class="navbar fixed w-full flex items-center justify-between pl-4 md:pl-12 z-30 text-black dark:text-white"
  >
    <!-- Logo -->
    <nuxt-link :to="localePath('index')">
      <h1 class="m-0 h-0 w-0 overflow-hidden">Devolt</h1>
      <devolt-logo class="h-8 md:h-12 w-auto" />
    </nuxt-link>

    <div class="flex items-center">
      <div
        v-click-outside="closeLocaleSwitch"
        class="locale-switch self-stretch flex flex-col justify-around font-bold pr-4 md:pr-8"
        :class="{ 'locale-switch--active': localeSwitch }"
        @click="openLocaleSwitch"
      >
        <div class="locale-switch__inner z-20">
          <div class="locale-switch__current">
            <div class="locale-switch__locale">
              <nuxt-link
                :to="switchLocalePath(currentLocale.code)"
                @click.prevent=""
              >
                {{ currentLocale.name }}
              </nuxt-link>
            </div>
          </div>
          <div class="locale-switch__others">
            <div
              v-for="locale in availableLocales"
              :key="locale.code"
              class="locale-switch__locale"
              @click="closeLocaleSwitch"
            >
              <nuxt-link :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <button
        aria-label="Menu"
        class="p-3 lg:p-4 bg-primary-base text-white focus:outline-none"
      >
        <menu-icon class="h-12 w-12 md:h-16 md:w-16" />
      </button>
    </div>
  </header>
</template>

<script>
import clickOutside from 'vue-click-outside'
import smartScroll from '@/directives/smartScroll'

import DevoltLogo from '@/assets/images/logo.svg?inline'
import MenuIcon from '@/assets/icons/elastofont/menu.svg?inline'

export default {
  components: {
    DevoltLogo,
    MenuIcon
  },
  directives: {
    clickOutside,
    smartScroll
  },
  data: () => ({
    localeSwitch: false
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    }
  },
  methods: {
    openLocaleSwitch() {
      this.localeSwitch = !this.localeSwitch
    },
    closeLocaleSwitch() {
      this.localeSwitch = false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  will-change: box-shadow, transform;
  transition: box-shadow, transform 0.1s ease-in;

  @screen md {
    transition-duration: 0.3s;
  }

  &--elevated {
    @apply shadow bg-white;
  }

  &--hidden {
    transform: translate3d(0, -100%, 0);
    box-shadow: none;

    @screen md {
      transform: none;

      &.navbar--elevated {
        @apply shadow;
      }
    }
  }
}

.dark-mode {
  .navbar {
    &--elevated {
      @apply bg-dark-surface;
    }
  }
}

.locale-switch {
  position: relative;

  overflow-y: hidden;

  &--active {
    overflow-y: visible;

    .locale-switch__others {
      display: flex;

      .locale-switch__locale {
        animation: fadeIn 300ms ease-in both;
        padding-top: 0.5rem;

        @for $i from 2 through 10 {
          &:nth-child(#{$i}) {
            animation-delay: 50ms * $i;
          }
        }
      }
    }
  }

  &__inner {
    position: relative;
  }

  &__others {
    position: absolute;
    display: none;
  }

  &__locale {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 1.25rem;
    font-weight: bold;

    padding: 0 0.5rem;

    @screen md {
      font-size: 1.5rem;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
