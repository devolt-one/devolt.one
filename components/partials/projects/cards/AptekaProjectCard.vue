<template>
  <article class="project-card project-card--apteka">
    <div class="project-card__illustration">
      <picture>
        <source
          srcset="
            @/assets/images/projects/apteka149/hope.webp    1x,
            @/assets/images/projects/apteka149/hope@2x.webp 2x,
            @/assets/images/projects/apteka149/hope@3x.webp 3x
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
            @/assets/images/projects/apteka149/empathy.webp    1x,
            @/assets/images/projects/apteka149/empathy@2x.webp 2x,
            @/assets/images/projects/apteka149/empathy@3x.webp 3x
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
      <h1
        class="m-0 h-0 w-0 overflow-hidden"
        v-html="$t('projects.zoon.title')"
      />
      <apteka-logo />
    </div>
    <p
      class="project-card__description"
      v-html="$t('projects.apteka149.excerpt')"
    />
  </article>
</template>

<script>
import '@/assets/css/project-cards.scss'
import AptekaLogo from '@/assets/images/projects/apteka149/logo.svg?inline'

export default {
  components: {
    AptekaLogo
  }
}
</script>

<style lang="scss" scoped>
.project-card {
  &--apteka {
    background: #c80000;
    color: white;

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
