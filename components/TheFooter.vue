<template>
  <footer class="footer">
    <div class="relative container mx-auto flex justify-end">
      <div class="footer__inner">
        <!-- Logo -->
        <div class="footer__logo">
          <nuxt-link :to="localePath('index')">
            <span class="block m-0 h-0 w-0 overflow-hidden">
              {{ $t('homepage.meta.shortName') }}
            </span>
            <devolt-logo class="h-12 md:h-16 w-auto" />
          </nuxt-link>
        </div>

        <div class="footer__info">
          <div class="footer__info-item">
            <div class="footer__info-item-title">
              {{ $t('common.footer.contact') }}
            </div>
            <a
              href="mailto:info@devolt.one"
              target="_blank"
              class="footer__info-item-content"
            >
              info@devolt.one
            </a>
          </div>
          <div class="footer__info-item">
            <div class="footer__info-item-title">
              {{ $t('common.footer.socialMedia') }}
            </div>
            <ul class="flex md:justify-end md:self-end">
              <li
                v-for="(media, key) in $t('menu.socials')"
                :key="`footer-social-${key}`"
                class="mr-4 last:mr-0 text-4xl"
              >
                <a :href="media" target="_blank">
                  <font-awesome-icon :icon="['fab', key]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__menu">
          <ul class="lg:px-4">
            <li class="font-bold mb-3">
              <nuxt-link :to="localePath('privacy')" class="hover:underline">
                {{ $t('menu.footer.privacy') }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__copyright">
          {{ $t('common.footer.designAndDevelopment') }}
          <a
            href="https://devolt.one/?utm_source=devolt.one&utm_medium=footer&utm_campaign=word_of_mouth&utm_content=developer"
            class="font-montserrat font-black text-lg"
          >
            D.1
          </a>
          &copy; 2020. <br class="md:hidden" />
          {{ $t('common.footer.allRightsReserved') }}
        </div>
      </div>
    </div>

    <div
      class="hidden"
      itemprop="copyrightHolder"
      itemscope=""
      itemtype="http://schema.org/Person"
    >
      <b itemprop="name">Leonid Meleshin</b>
    </div>
  </footer>
</template>

<script>
import DevoltLogo from '@/assets/images/logo-d-one.svg?inline'

export default {
  components: {
    DevoltLogo
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @apply relative z-10;

  &::before {
    @apply z-0;
    content: ' ';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    height: 100%;
    width: 100%;

    @screen lg {
      width: 50%;
    }
  }

  &::before,
  &__inner {
    @apply bg-dark-darken;
  }

  &__inner {
    @apply flex flex-col justify-between w-full pt-12 pb-8 text-white z-10;

    @screen lg {
      @apply w-3/4 p-16 pr-0 pb-12;
    }
  }

  &__logo {
    @apply hidden mb-16;

    @screen md {
      @apply flex;
    }
  }

  &__info {
    @apply flex flex-col justify-between;

    @screen md {
      @apply flex-row;
    }
  }

  &__info-item {
    @apply flex flex-col justify-between mb-12;

    @screen lg {
      &:not(:first-child) {
        @apply text-right;
      }
    }

    a {
      text-decoration: underline;
    }
  }

  &__info-item-title {
    @apply text-2xl mb-2;
  }

  &__info-item-content {
    @apply text-3xl font-bold;

    @screen lg {
      @apply text-4xl;
    }
  }

  &__menu {
    @apply pb-8;

    @screen lg {
      @apply absolute left-0 bottom-0 pb-12 text-black;

      max-width: 20%;

      .dark-mode & {
        @apply text-white;
      }
    }
  }

  &__copyright {
    @apply text-sm;
  }

  a {
    transition: color 380ms;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    &:hover {
      @apply text-primary-base;
    }
  }
}
</style>
