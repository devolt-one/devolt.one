<template>
  <section class="py-16 project-description">
    <div class="container grid gap-4 mx-auto lg:grid-cols-3">
      <div class="lg:col-span-2">
        <nuxt-content :document="project" />
      </div>
      <div class="lg:order-first">
        <div class="flex flex-col mb-4">
          <div v-if="project.technologies" class="mb-8">
            <h5 class="mb-2 text-xl font-bold md:text-2xl">
              {{ $t('projects.page.technologies') }}
            </h5>
            <p class="text-lg">
              <template v-for="(tech, index) in project.technologies">
                <template v-if="index != 0">, </template
                ><span :key="`project-tech-${tech.slug}`" v-text="tech.title" />
              </template>
            </p>
          </div>
          <div v-if="project.year" class="mb-8">
            <h5 class="mb-2 text-xl font-bold md:text-2xl">
              {{ $t('projects.page.year') }}
            </h5>
            <p class="text-lg">{{ project.year }}</p>
          </div>
        </div>

        <app-button
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="nofollow"
          class="w-full md:w-auto"
        >
          {{ $t('projects.page.see') }}
          <arrow-icon slot="icon" />
        </app-button>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: { ArrowIcon },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-description {
  .nuxt-content {
    h2 {
      @apply text-2xl font-bold leading-tight mb-3 mt-5;

      @screen md {
        @apply text-3xl;
      }
    }

    h3 {
      @apply text-xl font-bold leading-tight mb-2 mt-4;

      @screen md {
        @apply text-2xl;
      }
    }

    p {
      @apply my-3;
    }

    ul,
    ol {
      li {
        @apply my-1;
        position: relative;
        padding-left: 2.25rem;

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
    }

    a {
      @apply text-primary-base underline transition duration-150;
    }

    > :first-child {
      margin-top: 0;
    }
  }
}
</style>
