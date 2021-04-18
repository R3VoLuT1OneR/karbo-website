<template>
  <article id="about" class="about md:container py-12 md:pt-20 md:px-12 lg:px-16 xl:px-32">
    <header>
      <span class="uppercase font-mono text-orange text-sm font-bold tracking-widest">
        {{ $t('about.label') }}
      </span>
      <h2 class="text-4xl font-extrabold mt-3 md:text-5xl">
        {{ $t('about.title') }}
      </h2>
      <p class="text-xl text-grey-mid max-w-3xl">
        {{ $t('about.description') }}
      </p>
    </header>
    <main class="grid grid-cols-1 gap-y-12 py-8 md:grid-cols-2 md:gap-x-12 md:mt-12 lg:grid-cols-3">
      <section
        v-for="({ label, content, icon }, i) in sections"
        :key="i"
      >
        <SvgIcon :name="icon" class="w-12 h-12 mb-5 md:mb-8 xl:w-16 xl:h-16" />
        <span class="text-xl font-semibold">{{ label }}</span>
        <p class="text-grey-mid">
          {{ content }}
        </p>
      </section>
    </main>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class About extends Vue {
  get sections() {
    return [
      {
        label: this.$t('about.privacy.label'),
        content: this.$t('about.privacy.content'),
        icon: 'about/privacy',
      },
      {
        label: this.$t('about.full_control.label'),
        content: this.$t('about.full_control.content'),
        icon: 'about/full_control',
      },
      {
        label: this.$t('about.no_intermediates.label'),
        content: this.$t('about.no_intermediates.content'),
        icon: 'about/no_intermediates',
      },
      {
        label: this.$t('about.openness.label'),
        content: this.$t('about.openness.content'),
        icon: 'about/openness',
      },
      {
        label: this.$t('about.security.label'),
        content: this.$t('about.security.content'),
        icon: 'about/security',
      },
      {
        label: this.$t('about.coins.label'),
        content: this.$t('about.coins.content'),
        icon: 'about/coins',
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/mixins";

.about {
  @include mobile-padding();
}
</style>
