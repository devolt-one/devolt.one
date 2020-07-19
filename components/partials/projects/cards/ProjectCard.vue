<template>
  <apteka-project-card v-if="project.slug === 'apteka149'" :project="project" />
  <zoon-project-card v-else-if="project.slug === 'zoon'" :project="project" />
  <explabs-project-card
    v-else-if="project.slug === 'explabs'"
    :project="project"
  />
  <article v-else></article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
