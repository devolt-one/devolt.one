<template>
  <section class="py-16 project-description">
    <div class="container grid gap-4 mx-auto lg:grid-cols-3">
      <div class="lg:col-span-2">
        <div class="nuxt-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan
            lorem auctor turpis pretium integer duis tempus. Laoreet lacus,
            massa neque faucibus euismod dolor in egestas commodo. Egestas
            senectus luctus nisi, pellentesque euismod. Aliquam venenatis, in
            nunc eu tristique.
          </p>
          <h3>Задача</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            adipiscing velit nascetur quisque nulla in. Vestibulum ut nisl
            bibendum neque, vivamus turpis nulla vel. Quis etiam sed enim arcu
            in a. Sit augue vestibulum morbi fames mauris.
          </p>
          <h3>Решение</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus quis
            fermentum duis aliquam cursus mauris pellentesque vel eros. Mi
            tristique convallis faucibus nisl sit scelerisque pellentesque
            dictumst. Id amet vitae non mauris tincidunt arcu. Sed ut eget
            mauris ut.
          </p>
        </div>
      </div>
      <div class="lg:order-first">
        <div class="flex flex-col mb-4">
          <div v-if="project.technologies" class="mb-8">
            <h5 class="mb-2 text-xl font-bold md:text-2xl">Технологии</h5>
            <p class="text-lg">
              <template v-for="(tech, slug, index) in project.technologies">
                <template v-if="index != 0">, </template
                ><span :key="`project-tech-${slug}`">{{ tech }}</span>
              </template>
            </p>
          </div>
          <div v-if="project.year" class="mb-8">
            <h5 class="mb-2 text-xl font-bold md:text-2xl">Год выполнения</h5>
            <p class="text-lg">{{ project.year }}</p>
          </div>
        </div>

        <app-button
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="nofollow"
          class="w-full md:w-auto"
        >
          Открыть
          <arrow-icon slot="icon" />
        </app-button>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: { ArrowIcon },
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.project-description {
  .nuxt-content {
    h3 {
      @apply text-xl font-bold leading-tight mb-2 mt-4;

      @screen md {
        @apply text-2xl;
      }
    }

    p {
      @apply text-lg leading-tight py-1 mb-2;
    }
  }
}
</style>
