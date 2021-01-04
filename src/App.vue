<template>
  <div id="app">
    <div class="container p-p-4">

      <app-header />

      <main>
        <router-view />
      </main>

      <app-footer />

    </div>
  </div>
</template>

<script>
import '@/styles/global.scss'
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'

export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>

<style lang="scss">

</style>
