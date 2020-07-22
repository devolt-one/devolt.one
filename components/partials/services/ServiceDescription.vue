<template>
  <div class="max-w-full prose service-description"><slot /></div>
</template>

<style lang="scss">
.service-description {
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
        top: 0.7rem;

        width: 1.5rem;
        height: 1px;

        border-radius: initial;

        background-color: currentColor;
        // transform: translate(0, -50%);
      }
    }
  }
}
</style>
