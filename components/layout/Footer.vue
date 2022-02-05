<template>
  <footer class="bg-blue-airy py-12">
    <div class="xl:container px-12 lg:px-16 xl:px-32">
      <section class="grid gap-6 md:flex md:justify-between items-start">
        <a class="hidden md:block" href="/">
          <span class="sr-only">{{ $t('karbo') }}</span>
          <img class="" src="~/assets/images/logo.svg" width="128" height="142" :alt="$t('karbo')">
        </a>
        <nav class="flex flex-col">
          <span class="text-xl font-extrabold md:text-lg">
            {{ $t('footer.resources.label') }}
          </span>
          <template v-for="({ hash, href, label }, i) in resources">
            <nuxt-link
              v-if="hash"
              :key="i"
              :to="localeRoute({ hash })"
              class="text-lg mt-3 md:text-sm"
            >
              {{ label }}
            </nuxt-link>
            <a
              v-else-if="href"
              :key="i"
              :href="href"
              rel="noopener"
              target="_blank"
              class="text-lg mt-3 md:text-sm"
            >
              {{ label }}
            </a>
          </template>
        </nav>
      </section>
      <section class="md:flex md:flex-row-reverse justify-between">
        <div class="flex mt-12">
          <a
            v-for="({ icon, href, label }, i) in socials"
            :key="i"
            :href="href"
            :aria-label="label"
            :class="{ 'mr-5': socials.length - 1 !== i }"
            target="_blank"
            rel="noopener"
            class="text-grey hover:text-denim-dark hover-scale w-4 h-4 md:w-5 md:h-5"
          >
            <SvgIcon :name="icon" class="w-full h-full" />
          </a>
        </div>
        <div class="mt-12 text-lg md:text-sm">
          © 2016-{{ currentYear }} Karbo
        </div>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Footer extends Vue {
  get socials() {
    return [
      {
        label: 'Karbo Telegram',
        icon: 'social/telegram',
        href: 'https://t.me/karbowanec/',
      },
      {
        label: 'Karbo Redit',
        icon: 'social/redit',
        href: 'https://www.reddit.com/r/krb/',
      },
      {
        label: 'Karbo Twitter',
        icon: 'social/twitter',
        href: 'https://twitter.com/krbcoin',
      },
      {
        label: 'Karbo Facebook',
        icon: 'social/facebook',
        href: 'https://www.facebook.com/karbo.io',
      },
      {
        label: 'Karbo Github',
        icon: 'social/github',
        href: 'https://github.com/Karbovanets/',
      },
    ]
  }

  get resources() {
    return [
      {
        label: this.$t('footer.resources.list.usage'),
        hash: '#usage',
      },
      {
        label: this.$t('footer.resources.list.download'),
        hash: '#download',
      },
      {
        label: this.$t('footer.resources.list.explorer'),
        href: 'https://explorer.karbo.network',
      },
    ]
  }

  get currentYear() {
    return new Date().getFullYear()
  }
}
</script>

<style scoped>
footer {
  background-color: #F8FAFB;
}
</style>
