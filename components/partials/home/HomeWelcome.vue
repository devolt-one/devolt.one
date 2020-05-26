<template>
  <section class="bg-white dark:bg-dark-surface text-black dark:text-white">
    <div class="container mx-auto">
      <div class="welcome flex flex-col lg:flex-row-reverse">
        <div class="h-full lg:h-auto w-full lg:w-1/2 xl:w-7/12 relative">
          <div class="floating-card floating-card--primary">
            <div class="floating-card__inner"></div>
          </div>
          <div class="floating-card floating-card--secondary">
            <div class="floating-card__inner"></div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 xl:w-5/12 md:mb-8 mt-24 md:mt-8 lg:mt-64">
          <h1
            class="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl leading-none text-center md:text-left"
          >
            <span>{{ $t('homepage.welcome.firstLine') }}</span> <br />
            <span>{{ $t('homepage.welcome.secondLine') }}</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.welcome {
  height: 75vh;

  @screen md {
    height: 50vh;
  }

  @screen lg {
    height: auto;
  }
}

.floating-card {
  --animation-offset: 1;

  position: absolute;

  height: 16rem;
  width: 16rem;

  animation: float 8s ease-in-out infinite;
  animation-delay: calc(0.5s * var(--animation-offset));
  z-index: 5;

  &:nth-child(2n) {
    --animation-offset: 2;
  }

  .floating-card__inner {
    height: 100%;
    width: 100%;

    border-radius: 0.5rem;

    background-position: center center;
    background-size: cover;

    animation: shadow 8s ease-in-out infinite;
    animation-delay: calc(0.5s * var(--animation-offset));

    // box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.25);
  }

  &--primary {
    .floating-card__inner {
      @apply bg-primary-base;

      background-image: url('~assets/illustrations/mock-1.png');
      background-image: image-set(
        '~assets/illustrations/mock-1.png' 1x,
        '~assets/illustrations/mock-1@2x.png' 2x,
        '~assets/illustrations/mock-1@3x.png' 3x
      );

      transform: matrix(0.96, 0.29, -0.29, 0.96, 0, 0);
    }

    bottom: 4.75rem;
    left: 5.8vw;
  }

  &--secondary {
    .floating-card__inner {
      @apply bg-secondary-base;

      background-image: url('~assets/illustrations/mock-2.png');
      background-image: image-set(
        '~assets/illustrations/mock-2.png' 1x,
        '~assets/illustrations/mock-2@2x.png' 2x,
        '~assets/illustrations/mock-2@3x.png' 3x
      );

      transform: matrix(0.98, -0.21, 0.2, 0.98, 0, 0);
    }

    bottom: 0;
    right: 2.8vw;
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-1rem);
  }
  100% {
    transform: translatey(0px);
  }
}

@keyframes shadow {
  0% {
    box-shadow: 0 4px 48px rgba(0, 0, 0, 0.25);
  }
  50% {
    box-shadow: 0 6px 64px 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 4px 48px rgba(0, 0, 0, 0.25);
  }
}
</style>
