export default function({ app, isServer, route, store, isDev }) {
  const version = route.query._storyblok || isDev ? 'draft' : 'published'

  if (isServer) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  store.commit('setVersion', version)
}
