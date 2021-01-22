<template>
  <header class="header p-mt-2 p-mb-2">
    <div class="p-d-flex p-flex-column p-mb-2">
      <div class="upper-line p-d-flex p-flex-row p-mb-2 p-jc-between p-flex-nowrap p-pb-3">
          <MainTitle class="p-d-flex p-jc-between p-ai-center">
            <router-link to="/example"><div style="color: #606266">PhotosApp |</div></router-link>
            <span class="sub-logo text-extra-small p-as-left">share your moments</span>
          </MainTitle>
          <Button label="Submit" class="p-button-rounded" icon="pi pi-plus" iconPos="left"/>
      </div>
      <div class="p-flex-row p-mt-2">
        <CategoriesList />
      </div>
    </div>
  </header>
</template>

<script>
import Button from 'primevue/button'
import MainTitle from '@/components/layout/MainTitle'
import CategoriesList from '@/components/features/CategoriesList'

export default {
  name: 'theHeader',
  components: {
    MainTitle,
    Button,
    CategoriesList
  }
}
</script>

<style lang="scss" scoped>
.upper-line {
  border-bottom: 1px solid lightgray;
}
.sub-logo{
  color: gray;
}

</style>
