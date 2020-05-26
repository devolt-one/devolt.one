<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto">
      <div class="w-full text-center mb-4">
        <h1
          class="text-4xl md:text-5xl font-montserrat font-black leading-tight"
        >
          {{ $t('homepage.projects.selected') }}
          <span class="text-stroke text-white dark:text-dark-surface">
            {{ $t('homepage.projects.works') }}
          </span>
        </h1>
        <p class="text-3xl md:text-4xl font-bold leading-tight">
          {{ $t('homepage.projects.thingsWeProud') }}
        </p>
      </div>

      <div class="flex flex-wrap">
        <div class="project-outer w-full lg:w-1/2 flex justify-around">
          <div class="project-outer__container">
            <apteka-project-card />
            <span class="project-outer__counter">01</span>
          </div>
        </div>
        <div class="project-outer w-full lg:w-1/2 flex justify-around">
          <div class="project-outer__container">
            <explabs-project-card />
            <span class="project-outer__counter">02</span>
          </div>
        </div>
        <div class="project-outer w-full lg:w-1/2 flex justify-around">
          <div class="project-outer__container">
            <zoon-project-card />
            <span class="project-outer__counter">03</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.text-stroke {
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;

  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 1px black;
    text-shadow: none;
  }
}

.dark-mode {
  .text-stroke {
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
  }

  .project-card {
    margin-top: 44px;
    margin-left: 27px;
    margin-right: 27px;

    @screen md {
      margin-right: 0;
    }

    cursor: pointer;
    box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.07),
      0px 32px 48px rgba(0, 0, 0, 0.18);

    will-change: transform, box-shadow;
    transition: all 200ms ease-in-out;

    &:hover {
      transform: scale(1.05);

      box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.07),
        0px 48px 72px rgba(0, 0, 0, 0.18);
    }
  }

  .project-card:hover + .project-outer__counter {
    transform: scale(1.05);
  }
}
</style>
