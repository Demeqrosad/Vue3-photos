<template>
  <img
    :src="imageSrc"
    class="image">
</template>

<script>
import { imagesUrl } from '@/config'

export default {
  name: 'PhotosList',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc () {
      return `${imagesUrl}/${this.src}`
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
}
</style>
