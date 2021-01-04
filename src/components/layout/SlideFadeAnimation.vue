<template>
  <transition
    name="custom-transition"
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'SlideFadeAnimation'
}
</script>

<style scoped>

</style>
