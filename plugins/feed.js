import Markdown from '@nuxt/markdown'

// eslint-disable-next-line prettier/prettier
async function createProjectsFeed(feed, { domain } = { domain: process.env.URL || 'http://localhost:3000'}) {
  const { $content } = require('@nuxt/content')
  const md = new Markdown({ toc: false, sanitize: false })

  feed.options = {
    title: 'D.1 Projects',
    link: 'https://devolt.one/feed-projects.xml',
    description: 'List add Devolt.One Projects!'
  }

  const baseUrl = `${domain}/services`
  const projects = await $content(`ru/projects`, { text: true })
    .sortBy('createdAt', 'desc')
    .fetch()
  const services = await $content(`ru/services`).fetch()

  await Promise.all(
    projects.map(async (project) => {
      const html = (await md.toMarkup(project.text)).html.toString()
      const url = `${baseUrl}/${project.slug}`

      feed.addItem({
        title: project.title,
        id: url,
        link: url,
        description: project.description,
        content: html
      })
    })
  )

  services.forEach((service) => {
    feed.addCategory(service.title)
  })

  feed.addContributor({
    name: 'Leonid Meleshin',
    email: 'lm@devolt.one',
    link: 'https://leon0399.ru/'
  })
}

export default [
  {
    type: 'rss2',
    path: '/feed-projects.xml',
    create: createProjectsFeed
  }
]
