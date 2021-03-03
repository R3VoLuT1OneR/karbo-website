<template>
  <article class="flex justify-center mt-24 lg:px-32">
    <main>
      <span class="uppercase text-mono text-yellow text-sm font-bold tracking-widest">
        Social
      </span>
      <h2 class="text-5xl font-extrabold">
        Join the Karbo Community
      </h2>
      <p class="text-grey text-xl">
        Join discussions to be aware of all the latest news.
      </p>
      <div class="socials flex mt-6">
        <a
          v-for="({ icon, href }, i) in socials"
          :key="i"
          :href="href"
          :class="{ 'mr-3': socials.length - 1 !== i }"
        >
          <SvgIcon :name="`social/${icon}`" class="w-6 h-6" />
        </a>
      </div>
    </main>
    <aside class="ml-32 mt-12">
      <img src="~/assets/images/social.svg" alt="Community">
    </aside>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Social extends Vue {
  get socials() {
    return [
      {
        icon: 'redit',
        href: '',
      },
      {
        icon: 'twitter',
        href: '',
      },
      {
        icon: 'telegram',
        href: '',
      },
      {
        icon: 'discord',
        href: '',
      },
      {
        icon: 'facebook',
        href: '',
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.socials {
  > a {
    @apply block rounded-md border p-4 opacity-50;
    border-color: currentColor;

    &:hover {
      @apply bg-blue-light text-white opacity-100;
    }
  }
}
</style>
