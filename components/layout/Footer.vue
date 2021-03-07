<template>
  <footer class="flex justify-between lg:mt-32 lg:px-24 py-8">
    <div class="flex flex-col justify-between">
      <a href="/">
        <img class="lg:mr-24 lg:-mt-1" src="~/assets/images/logo.svg" width="128" height="142" alt="Karbo">
      </a>
      <p class="text-sm">
        © {{ currentYear }} Karbo
      </p>
    </div>
    <nav class="flex flex-col">
      <span class="font-extrabold">Resources</span>
      <a class="mt-2" href="#info">Info</a>
      <a class="mt-2" href="#usage">Usage</a>
      <a class="mt-2" href="#download">Download</a>
      <a class="mt-2" href="#explorer">Explorer</a>
    </nav>
    <nav class="flex flex-col">
      <span class="font-extrabold">Legal</span>
      <a class="mt-2" href="#terms">Terms and conditions</a>
      <a class="mt-2" href="#privacy">Privacy Policy</a>
    </nav>
    <div class="flex">
      <a
        v-for="({ icon, href }, i) in socials"
        :key="i"
        :href="href"
        :class="{ 'mr-5': socials.length - 1 !== i }"
        class="opacity-50 hover:opacity-100"
      >
        <SvgIcon :name="icon" class="w-4 h-4" />
      </a>
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
        icon: 'social/redit',
        href: '',
      },
      {
        icon: 'github',
        href: '',
      },
      {
        icon: 'social/twitter',
        href: '',
      },
      {
        icon: 'social/telegram',
        href: '',
      },
      {
        icon: 'social/discord',
        href: '',
      },
      {
        icon: 'social/facebook',
        href: '',
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
