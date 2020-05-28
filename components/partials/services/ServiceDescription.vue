<template>
  <div class="service-description"><slot /></div>
</template>

<style lang="scss">
.service-description {
  h1 {
    @apply text-2xl leading-tight mb-6;
  }

  p,
  ul {
    @apply text-lg my-6;
  }

  /* purgecss ignore */
  ul,
  ol {
    @screen md {
      column-count: 2;
    }

    li {
      @apply my-1;
      position: relative;
      padding-left: 2.25rem;
      text-transform: uppercase;
      font-weight: 600;

      &::before {
        content: ' ';

        position: absolute;
        left: 0;
        bottom: 50%;

        width: 1.5rem;
        height: 1px;

        background-color: currentColor;
        // transform: translate(0, -50%);
      }
    }
  }
}
</style>
