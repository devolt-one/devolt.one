<template>
  <div>
    <page-heading
      :title="project.title"
      :subtitle="project.description"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') }
      ]"
    />
    <project-description :project="project" class="py-16" />
    <section v-if="project.slides" class="py-16">
      <client-only>
        <carousel :center-mode="true" :per-page="1" :loop="true">
          <slide
            v-for="(slide, index) in project.slides"
            :key="`project-${project.slug}-slide-${index}`"
          >
            <img class="mx-auto" :src="slide.src" />
          </slide>
        </carousel>
      </client-only>
    </section>
    <contact-us class="py-32" />
    <projects-list id="projects" :projects="upfront" class="py-16" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, app, error }) {
    const project = await $content(
      `${app.i18n.locale}/projects/${route.params.slug}`
    ).fetch()

    const upfront = await $content(`${app.i18n.locale}/projects`)
      .where({ slug: { $in: project.upfront } })
      // .only('slug', 'title', 'description')
      .fetch()

    return {
      project,
      upfront: upfront.sort(
        ({ slug: a }, { slug: b }) =>
          project.upfront.indexOf(a) - project.upfront.indexOf(b)
      )
    }
  },
  head() {
    return {
      title: this.project.title
    }
  }
}
</script>
