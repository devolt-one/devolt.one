<template>
  <footer class="footer">
    <div class="container mx-auto flex justify-end">
      <div class="footer__inner">
        <!-- Logo -->
        <div class="footer__logo">
          <nuxt-link :to="localePath('index')">
            <h1 class="m-0 h-0 w-0 overflow-hidden">Devolt</h1>
            <devolt-logo class="h-12 md:h-16 w-auto" />
          </nuxt-link>
        </div>

        <div class="footer__info">
          <div class="footer__info-item">
            <div class="footer__info-item-title">Contact</div>
            <a href="mailto:info@devolt.one" class="footer__info-email">
              info@devolt.one
            </a>
          </div>
          <div class="footer__info-item">
            <div class="footer__info-item-title">Social media</div>
            <ul class="footer__info-item-socials">
              <li v-for="(media, key) in socials" :key="`footer-social-${key}`">
                <a :href="media.url" target="_blank">
                  <component :is="media.icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__copyright">
          Designed &amp; Developed by
          <a
            href="https://devolt.one/?utm_source=devolt.one&utm_medium=footer&utm_campaign=word_of_mouth&utm_content=developer"
            class="font-montserrat font-black text-xl"
          >
            D.1
          </a>
          &copy; 2020. All rights reserved
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
  },
  data: () => ({
    socials: {
      github: {
        url: 'https://github.com/devolt-one',
        icon: () =>
          import('~/assets/icons/fontawesome/github-brands.svg?inline')
      },
      twitter: {
        url: 'https://twitter.com/devolt_one',
        icon: () =>
          import('~/assets/icons/fontawesome/twitter-brands.svg?inline')
      }
    }
  })
}
</script>

<style lang="scss" scoped>
$bgColor: #141414;

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
    width: 50%;
  }

  &::before,
  &__inner {
    background-color: $bgColor;
  }

  &__inner {
    @apply flex flex-col justify-between w-3/4 p-16 pb-12 text-white z-10;
  }

  &__logo,
  &__info {
    @apply mb-16 flex;
  }

  &__info {
    @apply flex justify-between;
  }

  &__info-item {
    @apply flex flex-col justify-between text-right;

    &:first-child {
      @apply text-left;
    }
  }

  &__info-item-title {
    @apply text-2xl pb-4;
  }

  &__info-email {
    @apply text-4xl font-bold;
  }

  &__info-item-socials {
    @apply flex justify-end self-end;

    li {
      @apply p-2;

      &:not(:last-child) {
        @apply mr-6;
      }
    }

    svg {
      @apply h-12 w-auto;
    }
  }
}
</style>
