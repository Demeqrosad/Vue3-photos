<template>
  <div class="home-page">
    <page-title>Photos</page-title>
    <photos-catalog />
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from '@/components/layout/PageTitle'
import PhotosCatalog from '@/components/features/PhotosCatalog'

export default {
  name: 'HomePage',
  components: {
    PageTitle,
    PhotosCatalog
  }
}
</script>
