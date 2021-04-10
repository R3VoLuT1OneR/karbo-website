<template>
  <section
    v-click-outside="closeDropdown"
    class="language-list flex items-center relative"
    :class="{ open }"
  >
    <header
      class="flex justify-between items-center cursor-pointer border-2 rounded border-grey-light w-full py-2 px-4 bg-white"
      @click="open = !open"
    >
      <span class="capitalize font-semibold">
        {{ $accessor.tailwind.viewSize === 'sm' ? $i18n.localeProperties.name : $i18n.locale }}
      </span>
      <SvgIcon name="arrow-down" class="arrow-down w-3 h-3 ml-1" />
    </header>
    <main class="absolute md:border-2 md:border-grey-light md:rounded">
      <ul>
        <li
          v-for="({ code, name }) in $i18n.locales"
          :key="code"
          class="flex items-center cursor-pointer px-4 py-2 font-medium"
          :class="{
            selected: code === $i18n.locale
          }"
          @click="selectLang(code)"
        >
          <!-- <SvgIcon :name="`language/${code}`" class="w-6 h-6 mr-2" /> -->
          <span class="hover:text-blue-dark">{{ name }}</span>
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
    this.$emit('selected', code)
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
    }
  }
  > main {
    @apply bg-white;
    top: calc(100% + 1rem);
    display: none;
    left: 0;

    > ul {
      > li {
        &.selected {
          @apply bg-blue-light;
        }
      }
    }

    // Style the mobile modal
    @media (max-width: theme('screens.md')) {
      @apply fixed inset-0 z-10;
      background: rgba(255, 255, 255, 0.7);

      > ul {
        @apply absolute bg-white opacity-100;
        top: 4rem;
        left: 1.2rem;
        right: 1.2rem;
        box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
      }
    }
  }

  &.open {
    > header {
      @apply bg-denim-dark text-white border-denim-dark;
      .arrow-down {
        @apply rotate-180 text-blue-mid;
      }
    }
    > main {
      display: block;
    }
  }
}
</style>
