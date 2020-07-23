<template>
  <article class="project-card project-card--zoon">
    <div class="project-card__illustration">
      <picture>
        <source
          srcset="
            @/assets/images/projects/zoon/girl.webp    1x,
            @/assets/images/projects/zoon/girl@2x.webp 2x,
            @/assets/images/projects/zoon/girl@3x.webp 3x
          "
          type="image/webp"
        />
        <source
          srcset="
            @/assets/images/projects/zoon/girl.png    1x,
            @/assets/images/projects/zoon/girl@2x.png 2x,
            @/assets/images/projects/zoon/girl@3x.png 3x
          "
          type="image/png"
        />
        <img
          src="@/assets/images/projects/zoon/girl.png"
          loading="lazy"
          class="illustration illustration--girl"
          alt="Girl"
        />
      </picture>
    </div>
    <div class="project-card__logo">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h4 class="text-5xl font-black font-montserrat" v-html="'ZOON'" />
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

export default {
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
  &--zoon {
    color: white;
    background: #f66b01;
    background-position: bottom center;
    background-size: cover;
    background-image: url('~assets/images/projects/zoon/dots.png');
    background-image: image-set(
      '~assets/images/projects/zoon/dots.png' 1x,
      '~assets/images/projects/zoon/dots@2x.png' 2x,
      '~assets/images/projects/zoon/dots@3x.png' 3x
    );

    --box-shadow-color: 255, 110, 1;

    .project-card__illustration {
      padding-bottom: 16.5rem;
    }
  }

  .illustration {
    will-change: transform;

    &--girl {
      width: 392px;
      height: auto;
      left: calc(50% - 394px / 2 - 11.5px);
      top: -52px;
    }
  }

  &:hover {
    .illustration {
      &--girl {
        transform: scale(1.05);
      }
    }
  }
}
</style>
