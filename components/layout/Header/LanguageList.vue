<template>
  <section v-click-outside="closeDropdown" class="language-list flex items-center relative" :class="{ 'open': open }">
    <header class="flex items-center cursor-pointer" @click="open = !open">
      <SvgIcon name="language" class="w-4 h-4 text-grey mr-1" />
      <span class="uppercase font-semibold">{{ $i18n.locale }}</span>
      <SvgIcon name="arrow-down" class="arrow-down w-3 h-3 ml-1" />
    </header>
    <main class="absolute">
      <ul>
        <li
          v-for="({ code, name }) in $i18n.locales"
          :key="code"
          class="flex items-center cursor-pointer mt-1"
          @click="selectLang(code)"
        >
          <SvgIcon :name="`language/${code}`" class="w-6 h-6 mr-2" />
          <span class="hover:underline">{{ name }}</span>
        </li>
      </ul>
    </main>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ClickOutside from 'vue-click-outside'

@Component({
  directives: {
    ClickOutside,
  },
})
export default class LanguageList extends Vue {
  open: boolean = false

  selectLang(code: string) {
    this.open = false
    this.$i18n.setLocale(code)
  }

  closeDropdown() {
    this.open = false
  }
}
</script>

<style lang="scss" scoped>
.language-list {
  > header {
    .arrow-down {
      transition: transform .3s ease-in-out;
      @apply text-grey;
    }
  }
  > main {
    @apply bg-white;
    top: calc(100%);
    display: none;
    right: -2rem;
    left: -2rem;
  }

  &.open {
    > header {
      .arrow-down {
        @apply text-blue;
        transform: rotate(180deg);
      }
    }
    > main {
      display: block;
    }
  }
}
</style>
