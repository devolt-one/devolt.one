import { createClient } from 'contentful'
import consola from 'consola'

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  logHandler: (level, data) => {
    if (level === 'error' && data) {
      const title = [data.name, data.message].filter((a) => a).join(' - ')
      consola.error(`[error] ${title}`)
      consola.error(data)
      return
    }
    consola.log(`[${level}] ${data}`)
  }
}

export const contentfulClient = createClient(config)

export default ({ app, store }, inject) => {
  inject('ctf', contentfulClient)
  // await store.dispatch("getPosts")
}
