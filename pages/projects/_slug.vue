<template>
  <div>
    <page-heading
      :title="project.title"
      :subtitle="project.description"
      :breadcrumbs="[
        { title: $t('homepage.meta.pageTitle'), to: localePath('index') },
        {
          title: $t('projects.index.meta.title'),
          to: localePath('projects')
        }
      ]"
    />
    <project-description :project="project" class="py-16" />
    <section v-if="project.slides" class="py-16">
      <client-only>
        <carousel :center-mode="true" :per-page="1" :loop="true">
          <slide
            v-for="(slide, index) in project.slides"
            :key="`project-slide-${index}`"
          >
            <div
              class="flex items-center content-center justify-center w-full h-full mx-auto"
            >
              <picture>
                <img class="object-contain max-w-full mx-auto" :src="slide" />
              </picture>
            </div>
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
      .only(['slug', 'title', 'description'])
      .fetch()

    return {
      project,
      upfront: upfront.sort(
        ({ slug: a }, { slug: b }) =>
          project.upfront.indexOf(a) - project.upfront.indexOf(b)
      )
    }
  },
  methods: {
    unescape(str) {
      const htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`',
        '&nbsp;': ' ',
        '&#8209;': '-'
      }

      return str.replace(
        new RegExp(
          '(' +
            Object.keys(htmlUnescapes)
              .map(function(i) {
                return i.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
              })
              .join('|') +
            ')',
          'g'
        ),
        function(s) {
          return htmlUnescapes[s]
        }
      )
    },
    stripHtml(str) {
      return this.unescape(str.replace(/(<([^>]+)>)/gi, ''))
    }
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.stripHtml(this.project.description)
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.project.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.stripHtml(this.project.description)
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.project.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.stripHtml(this.project.description)
        }
      ]
    }
  }
}
</script>
