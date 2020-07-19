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
    <section class="py-16">
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
    <home-projects id="projects" class="py-16" />
  </div>
</template>

<script>
export default {
  data: () => ({
    project: {
      title: 'Аптека 149',
      description:
        '<strong>Дизайн</strong> и <strong>Разработка Интернет&#8209;магазина</strong> для сети аптек',
      technologies: {
        vuejs: 'Vue.js',
        'vue-storefront': 'Vue Storefront',
        'magento-2': 'Magento 2'
      },
      year: 2019,
      link: 'https://apteka149.ru/',
      slides: [
        { src: '/images/projects/apteka149/slide-1.png' },
        { src: '/images/projects/apteka149/slide-1.png' },
        { src: '/images/projects/apteka149/slide-1.png' },
        { src: '/images/projects/apteka149/slide-1.png' },
        { src: '/images/projects/apteka149/slide-1.png' }
      ]
    }
  }),
  head() {
    return {
      title: this.project.title
    }
  }
}
</script>
