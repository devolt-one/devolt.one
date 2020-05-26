import defu from 'defu'

function isServer(vNode) {
  return (
    typeof vNode.componentInstance !== 'undefined' &&
    vNode.componentInstance.$isServer
  )
}

export default {
  bind(el, binding, vNode) {
    el.classList.add('smartscroll')

    const options = defu(binding.value, {
      scrolled: 'smartscroll--scrolled',
      hidden: 'smartscroll--hidden',
      gap: 60
    })

    let hidden = false
    let scrolled = false
    let lastScrollPosition = 0

    function handler() {
      const currentScrollPosition =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop

      // when the user scrolls, check the pageYOffset
      if (currentScrollPosition > 0) {
        // user is scrolled
        if (!scrolled) scrolled = true

        if (
          Math.abs(currentScrollPosition - lastScrollPosition) >= options.gap
        ) {
          hidden = currentScrollPosition > lastScrollPosition
          lastScrollPosition = currentScrollPosition
        }
      } else {
        // user is at top of page
        // eslint-disable-next-line no-lonely-if
        if (scrolled) scrolled = false
      }

      if (hidden) {
        el.classList.add(options.hidden)
      } else {
        el.classList.remove(options.hidden)
      }

      if (scrolled) {
        el.classList.add(options.scrolled)
      } else {
        el.classList.remove(options.scrolled)
      }
    }

    el.__vueSmartScroll__ = {
      handler
    }

    !isServer(vNode) && document.addEventListener('scroll', handler)
  },

  unbind(el, binding, vNode) {
    el.classList.remove('smartscroll')

    !isServer(vNode) &&
      el.__vueSmartScroll__ &&
      document.removeEventListener('scroll', el.__vueSmartScroll__.handler)

    delete el.__vueSmartScroll__
  }
}
