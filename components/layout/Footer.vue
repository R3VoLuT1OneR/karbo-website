<template>
  <footer class="px-8 py-12 bg-blue-airy">
    <nav class="flex flex-col mb-3">
      <span class="text-xl font-extrabold">Resources</span>
      <template v-for="({ hash, href, label }, i) in resources">
        <nuxt-link
          v-if="hash"
          :key="i"
          :to="localeRoute({ hash })"
          class="text-lg mt-3"
        >
          {{ label }}
        </nuxt-link>
        <a
          v-else-if="href"
          :key="i"
          :href="href"
          target="_blank"
          class="text-lg mt-3"
        >
          {{ label }}
        </a>
      </template>
    </nav>
    <nav class="flex flex-col mb-3 mt-12">
      <span class="text-xl font-extrabold">Legal</span>
      <template v-for="({ hash, href, label }, i) in legal">
        <nuxt-link
          v-if="hash"
          :key="i"
          :to="localeRoute({ hash })"
          class="text-lg mt-3"
        >
          {{ label }}
        </nuxt-link>
        <a
          v-else-if="href"
          :key="i"
          :href="href"
          target="_blank"
          class="text-lg mt-3"
        >
          {{ label }}
        </a>
      </template>
    </nav>
    <div class="flex mt-12">
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
    <div class="mt-12 text-lg">
      © {{ (new Date()).getFullYear() }} Karbo
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

  get resources() {
    return [
      {
        label: this.$t('Usage'),
        hash: '#usage',
      },
      {
        label: this.$t('Download'),
        hash: '#download',
      },
      {
        label: this.$t('Explorer'),
        href: 'https://explorer.karbo.io',
      },
    ]
  }

  get legal() {
    return [
      {
        label: this.$t('Terms and Conditions'),
        hash: '#terms',
      },
      {
        label: this.$t('Privacy Policy'),
        hash: '#policy',
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
