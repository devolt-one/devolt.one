<template>
  <section class="text-black bg-white dark:bg-dark-surface dark:text-white">
    <div class="container mx-auto">
      <div class="w-full mb-4 text-center">
        <h2
          class="text-4xl font-black leading-tight md:text-5xl font-montserrat"
        >
          {{ $t('homepage.projects.selected') }}
          <span class="text-white text-stroke dark:text-dark-surface">
            {{ $t('homepage.projects.works') }}
          </span>
        </h2>
        <p class="text-3xl font-bold leading-tight md:text-4xl">
          {{ $t('homepage.projects.thingsWeProud') }}
        </p>
      </div>

      <div class="flex flex-wrap">
        <div
          v-for="(project, index) in projects"
          :key="`project-${project.slug}`"
          class="flex justify-around w-full project-outer lg:w-1/2"
        >
          <div class="project-outer__container">
            <project-card :project="project" class="project-outer__card" />
            <span class="project-outer__counter">
              {{ (index + 1).toString().padStart(2, '0') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.text-stroke {
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px black;
    text-shadow: none;
  }

  .dark-mode & {
    -webkit-text-stroke-color: white;
  }
}

.project-outer {
  &__container {
    @apply w-full mt-16 mb-8;

    position: relative;

    @screen md {
      @apply w-auto;
    }
  }

  &:nth-child(2n) {
    .project-outer__container {
      @screen lg {
        margin-top: 12.125rem;
      }
    }
  }

  &__counter {
    @apply font-montserrat font-black leading-tight z-20;

    position: absolute;

    top: 0;

    text-align: right;

    font-size: 4.5rem;
    font-variant: small-caps;
    font-feature-settings: 'tnum' on, 'onum' on;

    color: #fff;
    mix-blend-mode: difference;
    background-blend-mode: difference;

    will-change: transform, box-shadow;
    transition: all 200ms ease-in-out;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .project-card {
    margin-top: 44px;
    margin-left: 27px;
    margin-right: 27px;

    @screen md {
      margin-right: 0;
    }

    cursor: pointer;
  }

  .project-outer__card:hover + .project-outer__counter {
    transform: scale(1.05);
  }
}
</style>
