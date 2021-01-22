<template>
  <div id="app">
    <div class="container p-p-4">

      <app-header/>

      <main>
        <router-view v-slot="{ Component }">
          <slide-fade-animation>
            <component :is="Component" :key="$route.fullPath" />
          </slide-fade-animation>
        </router-view>
      </main>

      <app-footer/>

    </div>
  </div>
</template>

<script>
import '@/styles/global.scss'
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'
import SlideFadeAnimation from '@/components/layout/SlideFadeAnimation'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created () {
    this.fetchCategories()
  },
  methods: {
    ...mapActions('Categories', ['fetchCategories'])
  },
  components: {
    AppHeader,
    AppFooter,
    SlideFadeAnimation
  }
}
</script>

<style lang="scss">

</style>
