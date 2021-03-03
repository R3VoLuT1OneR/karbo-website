<template>
  <div>
    <a href="#download" class="dropdown">
      <button class="button bg-blue-light text-white px-10">
        <span>Download wallet</span>
      </button>
      <div class="arrow">
        <SvgIcon name="arrow-down" class="text-white opacity-50 w-3 h-3" />
      </div>
    </a>
    <p class="text-xs text-grey max-w-250px">
      By downloading and installing the wallet, you agree to the Terms
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class DownloadDropdown extends Vue {
}
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.max-w-250px {
  max-width: 250px;
}

.dropdown {
  @apply flex cursor-pointer;

  > .arrow {
    @apply flex items-center justify-center bg-blue;
    width: $button-height;
    height: $button-height;
  }

  &:hover {
    > .button {
      @apply bg-blue;
    }
  }
}
</style>
