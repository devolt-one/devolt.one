<template>
  <article class="project-card project-card--explabs">
    <div class="project-card__illustration">
      <picture>
        <source
          srcset="
            @/assets/images/projects/explabs/car.webp    1x,
            @/assets/images/projects/explabs/car@2x.webp 2x,
            @/assets/images/projects/explabs/car@3x.webp 3x
          "
          type="image/webp"
        />
        <source
          srcset="
            @/assets/images/projects/explabs/car.png    1x,
            @/assets/images/projects/explabs/car@2x.png 2x,
            @/assets/images/projects/explabs/car@3x.png 3x
          "
          type="image/png"
        />
        <img
          src="@/assets/images/projects/explabs/car.png"
          loading="lazy"
          class="illustration illustration--car"
          alt="Car"
        />
      </picture>
    </div>
    <div class="project-card__logo">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h4 class="w-0 h-0 m-0 overflow-hidden" v-html="project.title" />
      <explabs-logo />
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="project-card__description" v-html="project.description" />
    <nuxt-link
      :to="
        localePath({ name: 'projects-slug', params: { slug: project.slug } })
      "
      class="absolute inset-0 w-full h-full"
    >
      <!-- eslint-disable vue/no-v-html -->
      <span
        class="absolute w-0 h-0 m-0 overflow-hidden"
        v-html="project.title"
      />
      <!-- eslint-enable vue/no-v-html -->
    </nuxt-link>
  </article>
</template>

<script>
import '@/assets/css/project-cards.scss'
import ExplabsLogo from '@/assets/images/projects/explabs/logo.svg?inline'

export default {
  components: {
    ExplabsLogo
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  &--explabs {
    color: white;
    background: linear-gradient(
        180deg,
        rgba(130, 130, 130, 0.2) 0%,
        rgba(51, 51, 51, 0.2) 100%
      ),
      linear-gradient(135deg, #4f4f4f 0.01%, #212121 100%), #212121;

    .project-card__illustration {
      padding-bottom: 12.3125rem;
    }
  }

  .illustration {
    will-change: transform;

    &--car {
      width: 366px;
      height: auto;
      left: calc(50% - 366px / 2 - 8px);
      top: 11px;

      transform: rotate(10.65deg);
    }
  }

  &:hover {
    .illustration {
      &--car {
        transform: rotate(10.65deg) scale(1.05);
      }
    }
  }
}
</style>
