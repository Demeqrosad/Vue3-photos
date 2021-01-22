<template>
  <div
    :key="index"
    v-for="(photo, index) in photos">
    <photo-summary :src="photo.src"
                   :title="photo.title"
                   :author="photo.author"
                   :votes="photo.votes"
                   :category="photo.category"/>
  </div>
</template>

<script>
import PhotoSummary from '@/components/shared/PhotoSummary'

export default {
  name: 'PhotosList',
  props: {
    photos: {
      type: Array
    }
  },
  components: {
    PhotoSummary
  }
}
</script>

<style lang="scss" scoped>

</style>
