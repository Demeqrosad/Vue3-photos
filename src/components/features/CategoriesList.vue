<template>
  <Button
    :key="index"
    v-for="(category, index) in categories"
    :label="category.name"
    class="p-button-rounded p-button-outlined p-mr-2"/>
</template>

<script>
import Button from 'primevue/button'
import { mapGetters } from 'vuex'

export default {
  name: 'CategoriesList',
  computed: mapGetters('Categories', ['sortedCategoriesByName']),
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>

</style>
