<template>
  <div class="mb-16">
    <div class="container mx-auto">
      <div
        class="h-screen md:h-1/2sc lg:h-auto flex flex-col lg:flex-row-reverse"
      >
        <div class="h-full lg:h-auto w-full lg:w-1/2 xl:w-7/12 relative">
          <div class="floating-card floating-card--primary"></div>
          <div class="floating-card floating-card--secondary"></div>
        </div>

        <div
          class="w-full lg:w-1/2 xl:w-5/12 mb-64 md:mb-0 mt-4 md:mt-8 lg:mt-64"
        >
          <h1
            class="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl leading-none text-center md:text-left"
          >
            <span>Development</span> <br />
            <span>Agency</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.floating-card {
  position: absolute;

  height: 16rem;
  width: 16rem;

  border-radius: 0.5rem;

  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.25);

  z-index: -1;

  &--primary {
    @apply bg-primary-base;

    background-image: url('~assets/illustrations/mock-1.png');

    transform: matrix(0.95, -0.32, 0.33, 0.95, 0, 0);

    bottom: 4.75rem;
    left: 5.8vw;
  }

  &--secondary {
    @apply bg-secondary-base;

    background-image: url('~assets/illustrations/mock-2.png');

    transform: matrix(0.93, 0.36, -0.37, 0.93, 0, 0);

    bottom: 0;
    right: 2.8vw;
  }
}
</style>
