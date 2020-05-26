<template>
  <article class="project-card project-card--zoon">
    <div class="project-card__illustration">
      <img
        src="@/assets/images/projects/zoon/girl.png"
        srcset="
          @/assets/images/projects/zoon/girl.png    1x,
          @/assets/images/projects/zoon/girl@2x.png 2x,
          @/assets/images/projects/zoon/girl@3x.png 3x
        "
        class="illustration illustration--girl"
        alt="Girl"
      />
    </div>
    <div class="project-card__logo">
      <h1 class="font-montserrat font-black text-5xl">ZOON</h1>
    </div>
    <p class="project-card__description">
      <strong>Website</strong> and Student’s
      <strong>Personal <br class="hidden md:inline" />Account</strong>
      for Preschool Institution
    </p>
  </article>
</template>

<script>
import '@/assets/css/project-cards.scss'

export default {}
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

    .project-card__illustration {
      padding-bottom: 16.5rem;
    }
  }

  .illustration {
    will-change: transform;

    &--girl {
      width: 392px;
      height: 334px;
      left: -69px;
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
