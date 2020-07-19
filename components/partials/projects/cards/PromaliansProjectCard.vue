<template>
  <article class="project-card project-card--promalians">
    <div class="project-card__logo">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h4 class="w-0 h-0 m-0 overflow-hidden" v-html="project.title" />
      <promalians-logo />
    </div>
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
import PromaliansLogo from '@/assets/images/projects/promalians/logo.svg?inline'

export default {
  components: {
    PromaliansLogo
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
  &--promalians {
    color: #ffffff;
    background: #232120;
  }
}
</style>
