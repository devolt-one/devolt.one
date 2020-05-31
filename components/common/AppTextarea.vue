<template>
  <textarea class="app-input" :placeholder="placeholder" :name="name">
  </textarea>
</template>

<script>
import '@/assets/css/_inputs.scss'

import input from '@/mixins/input'

export default {
  mixins: [input]
}
</script>

<style lang="scss" scoped>
textarea {
  min-height: 10rem;
}
</style>
