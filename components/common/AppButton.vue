<template>
  <nuxt-link v-if="to" :to="to" class="app-button">
    <div class="app-button__over">
      <slot />

      <div v-if="$slots.icon" class="app-button__icon">
        <slot name="icon" />
      </div>
    </div>
  </nuxt-link>
  <button v-else-if="submit" type="submit" class="app-button">
    <div class="app-button__over">
      <slot />

      <div v-if="$slots.icon" class="app-button__icon">
        <slot name="icon" />
      </div>
    </div>
  </button>
  <a v-else :href="href" class="app-button">
    <div class="app-button__over">
      <slot />

      <div v-if="$slots.icon" class="app-button__icon">
        <slot name="icon" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    submit: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.app-button {
  position: relative;

  display: inline-block;

  font-size: 1.25rem;
  font-weight: bold;

  padding: 1rem 3rem;
  border-bottom: solid 2px currentColor;

  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  transition: border-color 300ms;

  &:focus {
    @apply border-primary-base;
    outline: none;
  }

  &:hover {
    &::before {
      transform: scaleY(1);
    }
  }

  @screen md {
    font-size: 1.5rem;
  }

  &::before {
    @apply bg-primary-base;
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    transition-duration: 380ms;
    will-change: transform;

    transform-origin: bottom left;
    transform: scaleY(0);

    z-index: 5;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &__over {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    z-index: 10;
  }

  &__icon {
    display: inline-block;

    margin-left: 0.75rem;

    fill: currentColor;
    stroke: currentColor;
  }
}
</style>
