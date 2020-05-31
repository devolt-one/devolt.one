<template>
  <section class="bg-dark-surface dark:bg-dark-darken text-white">
    <div
      class="container mx-auto flex flex-col justify-around items-center text-center"
    >
      <div class="w-full text-center mb-16">
        <h1
          class="text-4xl md:text-5xl font-montserrat font-black leading-tight"
          v-html="$t('common.contactUsCta.haveAnIdea')"
        />
        <p class="text-3xl md:text-4xl font-bold leading-tight">
          {{ $t('common.contactUsCta.trustUs') }}
        </p>
      </div>

      <p
        class="text-xl md:text-2xl font-bold leading-tight mb-16"
        v-html="$t('common.contactUsCta.question')"
      />

      <p
        class="text-xl md:text-2xl font-bold leading-tight mb-16"
        v-html="$t('common.contactUsCta.answer')"
      />

      <app-button :to="localePath('contact')">
        {{ $t('common.contactUsCta.button') }}
        <arrow-icon slot="icon" />
      </app-button>
    </div>
  </section>
</template>

<script>
import ArrowIcon from '@/assets/icons/elastofont/arrow.svg?inline'

export default {
  components: { ArrowIcon }
}
</script>

<style lang="scss" scoped></style>
