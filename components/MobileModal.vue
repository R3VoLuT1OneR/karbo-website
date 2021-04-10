<template>
  <div
    class="flex-col modal fixed z-10 inset-0 bg-white"
    :class="{
      'flex': open,
      'hidden': !open,
    }"
  >
    <div class="flex flex-row-reverse">
      <SvgIcon name="close" class="w-12 h-12 p-2 text-grey cursor-pointer" @click="$emit('close')" />
    </div>
    <div class="px-6">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'

@Component
export default class MobileModal extends Vue {
  @Prop({ required: true }) readonly open!: boolean

  @Watch('open')
  disableBodyScroll(open: boolean) {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }
}
</script>

<style lang="scss" scoped>
.modal {

}
</style>
