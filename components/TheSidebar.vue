<template>
  <div class="sidebar-container">
    <transition name="fade" :duration="1000">
      <div
        v-if="isActive"
        class="sidebar-container__backdrop fade-enter-active"
        @click="toggle()"
        @keyup.esc="toggle()"
      />
    </transition>

    <transition name="slide-fade" :duration="1500">
      <div v-show="isActive" class="sidebar">
        <div class="sidebar__holder bg-dark-darken">
          <div
            class="flex flex-col justify-between w-full text-white sidebar__menu sidebar__menu--navigation lg:w-7/12 bg-dark-darken"
          >
            <ul class="navigation">
              <li>
                <nuxt-link :to="localePath('index')">
                  {{ $t('menu.sidebar.index') }}
                  <arrow-icon />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('contact')">
                  {{ $t('menu.sidebar.contact') }}
                  <arrow-icon />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('services')">
                  {{ $t('menu.sidebar.services') }}
                  <arrow-icon />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('projects')">
                  {{ $t('menu.sidebar.projects') }}
                  <arrow-icon />
                </nuxt-link>
              </li>
            </ul>

            <div
              class="flex flex-col justify-between div md:flex-row md:items-center"
            >
              <a
                href="mailto:info@devolt.one"
                target="_blank"
                class="mt-8 text-2xl font-bold"
              >
                info@devolt.one
              </a>

              <ul class="flex md:justify-end md:self-end">
                <li
                  v-for="(media, key) in $t('menu.socials')"
                  :key="`contact-social-${key}`"
                  class="mt-8 mr-4 text-4xl last:mr-0 hover:text-primary-base"
                >
                  <a :href="media" target="_blank">
                    <font-awesome-icon :icon="['fab', key]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="hidden w-full bg-white sidebar__menu lg:block lg:w-5/12"
          ></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: {
    ArrowIcon
  },
  computed: {
    ...mapGetters({ isActive: 'sidebar/isActive' })
  },
  methods: {
    ...mapMutations({ toggle: 'sidebar/toggle' })
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @apply z-50;

  position: fixed;

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  &__holder {
    @apply absolute flex;

    top: 0;
    left: 0;

    height: 100%;
    width: 100%;

    // transform: translateX(100%);

    .slide-fade-enter-active &,
    .slide-fade-leave-active & {
      transition: all 0.5s;

      @screen md {
        transition: all 1s;
      }
    }

    .slide-fade-enter &,
    .slide-fade-leave-to & {
      transform: translateX(100%);
    }
  }

  &__menu {
    position: relative;
    padding: 90px 50px 88px 8%;

    @screen md {
      padding-top: 18vh;
      padding-bottom: 120px;
    }

    ul {
      &.navigation {
        li {
          @apply font-montserrat font-black leading-none;

          font-size: 3rem;
          margin-bottom: 1rem;

          @screen md {
            font-size: 4.5rem;
            margin-bottom: 1.5rem;
          }

          a {
            @apply flex items-center content-center;

            will-change: color, margin-left, -webkit-text-stroke;
            transition: all 500ms;

            &:hover,
            &.nuxt-link-exact-active {
              transform: translateX(1rem);

              color: transparent;
              text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
                -1px 1px 0 #000, 1px 1px 0 #000;

              @screen md {
                transform: translateX(2rem);
              }

              @supports (-webkit-text-stroke: 1px white) {
                -webkit-text-stroke: 1px white;
                text-shadow: none;
              }

              svg {
                color: white;
                transform: translateX(1rem);
                opacity: 1;

                @screen md {
                  transform: translateX(2rem);
                }
              }
            }
          }

          svg {
            transition: all 500ms;
            will-change: transform, opacity;

            opacity: 0;

            width: auto;
            height: 3rem;
            padding-left: 2rem;
            transform: translateX(-0.5rem);

            @screen md {
              transform: translateX(-1rem);
            }
          }
        }
      }

      &.socials {
      }
    }

    .slide-fade-enter-active &,
    .slide-fade-leave-active & {
      &:first-child {
        transition: all 0.5s;
        transition-delay: 0.5s;

        @screen md {
          transition: all 0.5s;
          transition-delay: 1s;
        }
      }

      &:not(:first-child) {
        transition: all 1s;
        transition-delay: 0.5s;
      }
    }

    .slide-fade-enter &,
    .slide-fade-leave-to & {
      &:first-child {
        opacity: 0;

        transform: translateY(2rem);

        @screen md {
          transform: translateY(5rem);
        }
      }

      &:not(:first-child) {
        transform: translateX(150%);
      }
    }
  }
}

.sidebar-container {
  // position: fixed;

  width: 100%;
  height: 100%;

  &__backdrop {
    @apply z-50;

    display: block;
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.8);

    will-change: opacity;

    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 1s;
    }

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
