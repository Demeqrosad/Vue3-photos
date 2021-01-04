<template>
  <h1 class="main-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'MainTitle'
}
</script>

<style lang="scss" scoped>
  .main-title {
    font-size: 20px;
  }
</style>
