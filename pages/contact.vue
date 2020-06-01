<template>
  <div>
    <page-heading :title="$t('contact.meta.title')"></page-heading>

    <section class="py-12 lg:py-16">
      <div class="container mx-auto flex flex-wrap">
        <div class="hidden md:block w-full lg:w-1/4">
          <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-8">
            {{ $t('contact.inTouch.getInTouch') }}
          </h3>
        </div>
        <div class="w-full lg:w-3/4 lg:pl-2">
          <h4 class="text-xl md:text-2xl leading-tight mb-4">
            {{ $t('contact.inTouch.whoWeWorkWith') }}
          </h4>
          <p class="text-xl md:text-2xl leading-tight mb-4">
            {{ $t('contact.inTouch.loveToHear') }}
          </p>
          <div class="flex flex-col md:flex-row justify-between">
            <app-button
              href="mailto:info@devolt.one"
              target="_blank"
              class="mt-10 md:mt-16"
            >
              info@devolt.one
            </app-button>

            <ul
              class="flex justify-center md:justify-end md:self-end mt-10 md:mt-16"
            >
              <li
                v-for="(media, key) in socials"
                :key="`footer-social-${key}`"
                class="mr-4 last:mr-0"
              >
                <a :href="media.url" target="_blank">
                  <component :is="media.icon" class="h-8 m-2 w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="container mx-auto flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/4">
          <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-8">
            {{ $t('contact.gather.startingAProject') }}
          </h3>
        </div>
        <div class="w-full lg:w-3/4 lg:pl-2">
          <h4
            class="inline-block px-2 py-1 mb-8 font-bold text-2xl text-white dark:text-black leading-none bg-primary-base"
          >
            {{ $t('contact.gather.tellUs') }}
          </h4>

          <ul class="mb-8">
            <li
              v-for="(thing, index) in $t('contact.gather.things')"
              :key="`thing-${index}`"
              class="gather"
            >
              {{ thing }}
            </li>
          </ul>

          <form
            name="contact"
            netlify
            method="POST"
            class="w-full flex flex-wrap"
          >
            <div class="w-full lg:w-1/2 lg:pr-4 mb-8">
              <app-input
                id="contact-name"
                placeholder="Name"
                name="name"
                autocomplete="name"
                class="w-full bg-dark-surface dark:bg-white w-full"
                required
              />
            </div>
            <div class="w-full lg:w-1/2 lg:pl-4 mb-8">
              <app-input
                id="contact-email"
                placeholder="E-mail"
                name="email"
                type="email"
                autocomplete="email"
                class="w-full bg-dark-surface dark:bg-white w-full"
                required
              />
            </div>
            <div class="w-full mb-8">
              <app-textarea
                id="contact-text"
                placeholder="Few things about your project"
                name="text"
                class="w-full bg-dark-surface dark:bg-white w-full"
                rows="6"
                reqiured
              />
            </div>
            <div class="w-full flex flex-wrap">
              <app-button submit class="w-full md:w-auto flex-grow-0 mb-8">
                Send
                <arrow-icon slot="icon" />
              </app-button>
              <div
                class="w-full md:w-auto flex-grow flex flex-row md:flex-col justify-around md:pl-8 mb-8"
              >
                <span class="text-sm">
                  By clicking "Send" button, you're agreeing to our
                  <nuxt-link
                    :to="localePath('privacy')"
                    class="text-primary-base cursor-pointer underline"
                  >
                    Terms of Service
                  </nuxt-link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: {
    ArrowIcon
  },
  data: () => ({
    socials: {
      vk: {
        url: 'https://vk.com/devolt_one',
        icon: () => import('~/assets/icons/fontawesome/vk-brands.svg?inline')
      },
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
  }),
  head() {
    return {
      title: `${this.$t('contact.meta.title')} - ${this.$t(
        'homepage.meta.shortName'
      )}`
    }
  }
}
</script>

<style scoped lang="scss">
li.gather {
  @apply my-1;
  position: relative;
  padding-left: 2.25rem;
  text-transform: uppercase;
  font-weight: 600;

  &::before {
    content: ' ';

    position: absolute;
    left: 0;
    top: 0.7rem;

    width: 1.5rem;
    height: 1px;

    background-color: currentColor;
    // transform: translate(0, -50%);
  }
}
</style>
