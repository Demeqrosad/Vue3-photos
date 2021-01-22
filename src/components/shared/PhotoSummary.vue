<template>
  <Card class="card p-shadow-4 p-xl-2 p-lg-3 p-md-6 p-sm-12">
    <template v-slot:header class="imageContainer">
      <div class="votes">
        <p class="votes-summary">{{ votes }}</p>
        <Button icon="pi pi-star" class="star-icon p-button-rounded p-button-text p-button-warning"/>
      </div>
      <image-item :src="src"
                  class="image"/>
      <div class="layer"></div>
    </template>
    <template v-slot:title>
      {{ title }}
    </template>
    <template v-slot:content>
      <p>by {{ author }}</p>
    </template>
    <template v-slot:footer>
      <Button
        :label="category"
        class="p-button-rounded p-button-outlined p-mr-2"/>
    </template>
  </Card>
</template>

<script>
import ImageItem from '@/components/layout/ImageItem'
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'PhotoSummary',
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    },
    author: {
      type: String
    },
    votes: {
      type: String
    },
    category: {
      type: String
    }
  },
  components: {
    ImageItem,
    Card,
    Button
  }
}
</script>

<style lang="scss" scoped>

.imageContainer {
  position: relative;
  display: flex;
}

.image {
  height: 400px;
  object-fit: cover;
}

.layer {
  background-color: rgba(155, 89, 182, 0.3);
  position: absolute;
  object-fit: cover;
}

.card {
  width: 300px;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 1rem 1rem;
}

.votes {
  position: absolute;
  display: flex;
  margin-top: .5rem;
  right: .5rem;
  color: white;
}

.votes-summary {
  align-self: center;
  margin-right: .5rem;
  font-weight: bold;
}

.star-icon {
  color: white;
}
</style>
