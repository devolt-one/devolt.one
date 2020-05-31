<template>
  <header>
    <div
      class="container relative mx-auto flex md:justify-end pt-32 md:pt-48 pb-12 md:pb-16"
    >
      <div class="w-10/12">
        <h1
          class="overhead text-4xl md:text-5xl font-montserrat font-black leading-tight"
          :data-overhead="title"
        >
          <span class="relative">{{ title }}</span>
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.overhead {
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

    @screen md {
      font-size: 18rem;
    }
  }
}
</style>
