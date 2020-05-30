<template>
  <section
    v-editable="blok"
    class="py-32 bg-dark-surface dark:bg-white text-white dark:text-black"
  >
    <div
      class="container mx-auto flex flex-col justify-around items-center text-center"
    >
      <div class="w-full text-center mb-16">
        <h1 v-if="blok.headline">
          {{ blok.headline }}
        </h1>

        <h2 v-if="blok.headline_2">
          {{ blok.headline_2 }}
        </h2>

        <h3 v-if="blok.subheadline">
          <strong>
            {{ blok.subheadline }}
          </strong>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
