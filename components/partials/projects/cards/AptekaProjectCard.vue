<template>
  <article class="project-card project-card--apteka">
    <div class="project-card__illustration">
      <picture>
        <source
          srcset="
            @/assets/images/projects/apteka149/hope.png?webp    1x,
            @/assets/images/projects/apteka149/hope@2x.png?webp 2x,
            @/assets/images/projects/apteka149/hope@3x.png?webp 3x
          "
          type="image/webp"
        />
        <source
          srcset="
            @/assets/images/projects/apteka149/hope.png    1x,
            @/assets/images/projects/apteka149/hope@2x.png 2x,
            @/assets/images/projects/apteka149/hope@3x.png 3x
          "
          type="image/png"
        />
        <img
          src="@/assets/images/projects/apteka149/hope.png"
          loading="lazy"
          class="illustration illustration--hope"
          alt="Hope"
        />
      </picture>
      <picture>
        <source
          srcset="
            @/assets/images/projects/apteka149/empathy.png?webp    1x,
            @/assets/images/projects/apteka149/empathy@2x.png?webp 2x,
            @/assets/images/projects/apteka149/empathy@3x.png?webp 3x
          "
          type="image/webp"
        />
        <source
          srcset="
            @/assets/images/projects/apteka149/empathy.png    1x,
            @/assets/images/projects/apteka149/empathy@2x.png 2x,
            @/assets/images/projects/apteka149/empathy@3x.png 3x
          "
          type="image/png"
        />
        <img
          src="@/assets/images/projects/apteka149/empathy.png"
          loading="lazy"
          class="illustration illustration--empathy"
          alt="Empathy"
        />
      </picture>
    </div>
    <div class="project-card__logo">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h4 class="w-0 h-0 m-0 overflow-hidden" v-html="project.title" />
      <apteka-logo />
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
import AptekaLogo from '@/assets/images/projects/apteka149/logo.svg?inline'

export default {
  components: {
    AptekaLogo
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
  &--apteka {
    color: white;
    background: #c80000;
    background-position: bottom center;
    background-size: cover;
    background-image: url('~assets/images/projects/apteka149/switzerland.png');
    background-image: image-set(
      '~assets/images/projects/apteka149/switzerland.png' 1x,
      '~assets/images/projects/apteka149/switzerland@2x.png' 2x,
      '~assets/images/projects/apteka149/switzerland@3x.png' 3x
    );

    --box-shadow-color: 135, 15, 0;

    .project-card__illustration {
      padding-bottom: 16.5rem;
    }
  }

  .illustration {
    position: absolute;

    will-change: transform, left, top, right;
    transition: all 200ms ease-in-out;

    &--hope {
      width: 245.59px;
      height: auto;
      left: -58px;
      top: 45px;
      transform: rotate(-35.29deg);
    }

    &--empathy {
      width: 241.5px;
      height: auto;
      right: -65px;
      top: 112px;
      transform: rotate(-14.72deg);
    }
  }

  &:hover {
    .illustration {
      &--hope {
        left: -75px;
        top: 30px;
        transform: rotate(-40.29deg) scale(1.05);
      }

      &--empathy {
        right: -75px;
        top: 96px;
        transform: rotate(-8.72deg) scale(1.05);
      }
    }
  }
}
</style>
