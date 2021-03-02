<template>
  <div>
    <button class="button bg-blue-light hover:bg-blue text-white px-10">
      Download wallet
    </button>
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
.max-w-250px {
  max-width: 250px;
}
</style>
