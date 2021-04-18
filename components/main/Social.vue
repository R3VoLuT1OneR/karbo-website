<template>
  <article
    id="social"
    class="social flex flex-col justify-center md:container md:pt-12 md:flex-row pb-12 md:px-12 lg:px-16 xl:px-32"
  >
    <aside class="py-12 lg:w-1/2 md:flex md:justify-center md:mr-12">
      <img src="~/assets/images/social.svg" :alt="$t('social.label')">
    </aside>
    <main class="lg:w-1/2">
      <header>
        <span class="uppercase font-mono text-orange text-sm font-bold tracking-widest">
          {{ $t('social.label') }}
        </span>
        <h2 class="text-4xl font-extrabold mt-3 md:text-5xl">
          {{ $t('social.title') }}
        </h2>
        <p class="text-xl text-grey-mid max-w-3xl">
          {{ $t('social.description') }}
        </p>
      </header>
      <section class="socials flex mt-6">
        <a
          v-for="({ icon, href }, i) in socials"
          :key="i"
          :href="href"
          class="flex block items-center justify-center block rounded-md border border-grey text-grey hover-scale-1 w-12 h-12"
          :class="{ 'mr-2': socials.length - 1 !== i }"
        >
          <SvgIcon :name="`social/${icon}`" />
        </a>
      </section>
    </main>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Social extends Vue {
  get socials() {
    return [
      {
        icon: 'telegram',
        href: 'https://t.me/karbowanec/',
      },
      {
        icon: 'redit',
        href: 'https://www.reddit.com/r/krb/',
      },
      {
        icon: 'twitter',
        href: 'https://twitter.com/krbcoin',
      },
      {
        icon: 'facebook',
        href: 'https://www.facebook.com/karbo.io',
      },
      {
        icon: 'github',
        href: 'https://github.com/Karbovanets/',
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/mixins";

.social {
  @include mobile-padding();
}

.socials {
  > a {
    border-color: currentColor;

    ::v-deep > .icon {
      width: 50%;
      height: 50%;
    }

    &:hover {
      @apply bg-blue-mid text-white;
    }
  }
}
</style>
