<template>
  <div>
    <home-welcome id="welcome" class="pb-16" />
    <home-about id="about" class="py-16" :about="about" />
    <projects-list id="projects" :projects="projects" class="py-16" />
    <contact-us class="py-32" />
    <home-services class="py-16" :services="services" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, error }) {
    const servicesSlugs = ['web', 'design', 'complex-services']
    const services = await $content(`${app.i18n.locale}/services`)
      .where({ slug: { $in: servicesSlugs } })
      .only(['slug', 'title', 'home_description'])
      .fetch()

    const projectsSlugs = ['apteka149', 'explabs', 'zoon']
    const projects = await $content(`${app.i18n.locale}/projects`)
      .where({ slug: { $in: projectsSlugs } })
      .only(['slug', 'title', 'description'])
      .fetch()

    const about = await $content(`${app.i18n.locale}/about`).fetch()

    return {
      services: services.sort(
        ({ slug: a }, { slug: b }) =>
          servicesSlugs.indexOf(a) - servicesSlugs.indexOf(b)
      ),
      projects: projects.sort(
        ({ slug: a }, { slug: b }) =>
          projectsSlugs.indexOf(a) - projectsSlugs.indexOf(b)
      ),
      about
    }
  },
  head() {
    return {
      titleTemplate: '%s',
      title: this.$t('homepage.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('homepage.meta.description')
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('homepage.meta.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('homepage.meta.description')
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('homepage.meta.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('homepage.meta.description')
        }
      ]
    }
  }
}
</script>
