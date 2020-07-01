<template>
<div class="body">
  <div class="v-mainlayout">
      <app-header/>
        <slot></slot>
      <app-footer/>
  </div>
</div>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default {
  name: 'main-layout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  .body{
    min-width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #1da1f2 0%, #009ffc 100%);
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
  }
  .v-mainlayout {
    width: 90vw;
    margin: 0 auto;
    height: auto;
    background-color: #fff;
    .container {
      box-sizing: border-box;
      max-width: 1230px;
      padding: 0px 15px;
      margin: 0 auto;
    }
  }
  button{
    border: none;
  }
</style>
