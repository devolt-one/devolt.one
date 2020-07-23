<template>
  <div>
    <page-heading
      :title="$t('contact.meta.title')"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') }
      ]"
    />

    <section class="py-12 lg:py-16">
      <div class="container flex flex-wrap mx-auto">
        <div class="hidden w-full md:block lg:w-1/4">
          <h2 class="mb-8 text-3xl font-bold leading-tight md:text-4xl">
            {{ $t('contact.inTouch.getInTouch') }}
          </h2>
        </div>
        <div class="w-full lg:w-3/4 lg:pl-2">
          <h3 class="mb-4 text-xl leading-tight md:text-2xl">
            {{ $t('contact.inTouch.whoWeWorkWith') }}
          </h3>
          <p class="mb-4 text-xl leading-tight md:text-2xl">
            {{ $t('contact.inTouch.loveToHear') }}
          </p>
          <div class="flex flex-col justify-between md:flex-row">
            <app-button
              href="mailto:info@devolt.one"
              target="_blank"
              class="mt-10 md:mt-16"
            >
              info@devolt.one
            </app-button>

            <ul
              class="flex justify-center mt-10 md:justify-end md:self-end md:mt-16"
            >
              <li
                v-for="(media, key) in $t('menu.socials')"
                :key="`contact-social-${key}`"
                class="mr-4 text-4xl last:mr-0 hover:text-primary-base"
              >
                <a :href="media" target="_blank">
                  <font-awesome-icon :icon="['fab', key]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="container flex flex-col mx-auto lg:flex-row">
        <div class="w-full lg:w-1/4">
          <h3 class="mb-8 text-3xl font-bold leading-tight md:text-4xl">
            {{ $t('contact.gather.startingAProject') }}
          </h3>
        </div>
        <div class="w-full lg:w-3/4 lg:pl-2">
          <h4
            class="inline-block px-2 py-1 mb-8 text-2xl font-bold leading-none text-white dark:text-black bg-primary-base"
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
            name="contact-form"
            netlify
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            method="POST"
            class="flex flex-wrap w-full"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="w-full mb-8 lg:w-1/2 lg:pr-4">
              <app-input
                id="contact-name"
                :placeholder="$t('contact.form.name')"
                name="name"
                autocomplete="name"
                class="w-full bg-dark-surface dark:bg-white"
                required
              />
            </div>
            <div class="w-full mb-8 lg:w-1/2 lg:pl-4">
              <app-input
                id="contact-email"
                :placeholder="$t('contact.form.email')"
                name="email"
                type="email"
                autocomplete="email"
                class="w-full bg-dark-surface dark:bg-white"
                required
              />
            </div>
            <div class="w-full mb-8">
              <app-textarea
                id="contact-message"
                :placeholder="$t('contact.form.message')"
                name="message"
                class="w-full bg-dark-surface dark:bg-white"
                rows="6"
                reqiured
              />
            </div>
            <div class="flex flex-wrap w-full lg:flex-no-wrap">
              <app-button submit class="flex-grow-0 w-full mb-8 md:w-auto">
                {{ $t('contact.form.send') }}
                <arrow-icon slot="icon" />
              </app-button>
              <div
                class="flex flex-row justify-around flex-grow w-full mb-8 md:w-auto md:flex-col md:pl-8"
              >
                <span class="text-sm">
                  {{ $t('contact.form.agreement') }}
                  <nuxt-link
                    :to="localePath('privacy')"
                    class="underline cursor-pointer text-primary-base"
                  >
                    {{ $t('contact.form.privacy') }}
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
  head() {
    return {
      title: this.$t('contact.meta.title')
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
