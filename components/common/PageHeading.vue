<template>
  <header>
    <div
      class="container relative flex pt-32 pb-12 mx-auto md:justify-end md:pt-48 md:pb-16"
    >
      <div class="w-full md:w-10/12">
        <nav v-if="breadcrumbs" class="mb-2 text-sm font-light">
          <ol
            class="breadcrumbs"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li
              v-for="(item, index) in breadcrumbs"
              :key="`breadcrumb-${index}`"
              class="breadcrumbs__item"
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              <nuxt-link v-slot="{ href, navigate }" :to="item.to">
                <a
                  :href="href"
                  itemprop="item"
                  :itemid="href"
                  @click="navigate"
                >
                  <span itemprop="name">{{ item.title }}</span>
                </a>
              </nuxt-link>
              <meta itemprop="position" :content="index + 1" />
            </li>
          </ol>
        </nav>
        <h1
          class="mb-2 text-4xl font-black leading-tight overhead md:text-5xl font-montserrat"
          :data-overhead="title"
          itemprop="headline name"
        >
          <span class="relative leading-none">
            {{ title }}
          </span>
        </h1>
        <p
          v-if="subtitle"
          class="text-lg"
          itemprop="description"
          v-html="subtitle"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      default: () => null
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.overhead {
  max-width: 100%;

  overflow-x: hidden;

  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  &::before {
    position: absolute;
    display: inline-block;
    // top: -50%;
    // left: -25%;
    content: attr(data-overhead);

    color: rgba(66, 66, 66, 0.2);
    font-size: 10rem;
    white-space: nowrap;
    transform: translate(-25%, -50%);
    pointer-events: none;

    z-index: 0;

    @screen md {
      font-size: 18rem;
    }
  }
}

.breadcrumbs {
  &__item {
    display: inline;

    &:not(:first-child) {
      &::before {
        @apply text-gray-500;
        display: inline-block;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        content: '/';
      }
    }
  }
}
</style>
