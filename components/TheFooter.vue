<template>
  <footer class="footer">
    <div class="container relative flex justify-end mx-auto">
      <div
        class="footer__inner"
        itemscope
        itemtype="https://schema.org/Corporation"
      >
        <meta itemprop="priceRange" content="$$$" />
        <!-- Logo -->
        <div class="footer__logo">
          <meta itemprop="logo image" content="/favicon.svg" />
          <div
            class="hidden"
            itemprop="founder"
            itemscope
            itemtype="http://schema.org/Person"
          >
            <meta itemprop="name" content="Leonid Meleshin" />
          </div>
          <nuxt-link :to="localePath('index')" itemprop="url">
            <span class="block w-0 h-0 m-0 overflow-hidden" itemprop="name">
              {{ $t('homepage.meta.shortName') }}
            </span>
            <devolt-logo class="w-auto h-12 md:h-16" />
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
              itemprop="email"
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
                class="mr-4 text-4xl last:mr-0"
              >
                <a :href="media" target="_blank" itemprop="sameAs" :title="key">
                  <font-awesome-icon :icon="['fab', key]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__menu">
          <ul class="lg:px-4">
            <li class="mb-3 font-bold">
              <nuxt-link :to="localePath('privacy')" class="hover:underline">
                {{ $t('menu.footer.privacy') }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__copyright">
          {{ $t('common.footer.designAndDevelopment') }}
          <a
            href="https://devolt.one/"
            class="text-lg font-black font-montserrat"
          >
            D.1
          </a>
          <br class="md:hidden" />
          &copy; 2020.
          {{ $t('common.footer.allRightsReserved') }}
        </div>
      </div>
    </div>

    <div
      class="hidden"
      itemprop="copyrightHolder"
      itemscope
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
