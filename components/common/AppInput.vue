<template>
  <input
    :class="[`app-input--${type}`]"
    class="app-input"
    :placeholder="placeholder"
    :name="name"
    :type="type"
  />
</template>

<script>
import '@/assets/css/_inputs.scss'

import input from '@/mixins/input'

export default {
  mixins: [input],
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
