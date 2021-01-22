<template>
  <footer class="footer p-d-flex p-flex-row p-jc-between p-mt-3 p-mb-2 text-extra-small ">
    <p>2020 All rights reserved</p>
    <p
      v-text="'We have ' + categoriesAmount + ' categories!'" />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'theFooter',
  computed: {
    ...mapGetters('Categories', ['categoriesAmount'])
  }
}
</script>

<style scoped>

</style>
