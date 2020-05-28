import { createClient } from 'contentful'

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

export const contentfulClient = createClient(config)

export default ({ app, store }, inject) => {
  inject('ctf', contentfulClient)
  // await store.dispatch("getPosts")
}
