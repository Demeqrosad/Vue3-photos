<template>
  <div class="photos p-d-flex p-flex-wrap" ref="catalog">
    <photos-list
      :photos="photos"/>
  </div>
  <div
    class="loader"
    v-show="photosRequest.pending">
    <progress-spinner/>
  </div>
</template>

<script>
import PhotosList from '@/components/shared/PhotosList'
import { mapState, mapActions } from 'vuex'
import ProgressSpinner from 'primevue/progressspinner'

export default {
  name: 'PhotosCatalog',
  props: {
    category: {
      type: String
    }
  },
  data: () => ({
    currentPage: 1
  }),
  computed: {
    ...mapState('Photos', ['photos', 'photosRequest'])
  },
  methods: {
    ...mapActions('Photos', ['fetchPhotos', 'fetchCategoryPhotos']),
    loadPhotos () {
      this.$data.currentPage++
      console.log('currentPage', this.$data.currentPage)
      if (!this.category) {
        this.fetchPhotos(this.$data.currentPage)
      } else {
        this.fetchCategoryPhotos({
          category: this.category,
          page: this.$data.currentPage
        })
      }
    },
    handleScroll () {
      const elem = this.$refs.catalog
      const bottomOfWindow = Math.ceil(elem.scrollTop) >= (elem.scrollHeight - elem.offsetHeight)

      if (bottomOfWindow) this.loadPhotos()
    },
    prepareScroll () {
      this.$refs.catalog.addEventListener('scroll', () => {
        this.handleScroll()
      })
    }
  },
  created () {
    if (!this.category) {
      this.fetchPhotos(1)
    } else {
      this.fetchCategoryPhotos({
        category: this.category,
        page: 1
      })
    }
  },
  mounted () {
    this.prepareScroll()
  },
  components: {
    PhotosList,
    ProgressSpinner
  }
}
</script>

<style lang="scss" scoped>
.photos {
  justify-content: left;
  max-height: 1200px;
  overflow-y: auto;
  overflow-x: hidden;
}

.loader {
  justify-content: center;
}
</style>
