<template>
  <div class="home">
    <main-layout>
      <app-slider :interval="6000" />
      <products></products>
      <news></news>
      <about></about>
      </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import AppSlider from '../components/AppSlider'
import Products from '../components/Products'
import news from './../components/news.vue'
import about from './../components/about.vue'
export default {
  name: 'home',
  components: {
    MainLayout,
    AppSlider,
    Products,
    news,
    about
  }
}
</script>
<style lang="scss">
.home {
  margin: 0;
}
</style>
