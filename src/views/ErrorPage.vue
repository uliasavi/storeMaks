<template>
  <div class="error">
    <main-layout>
      <div class="container">
        <div class="errorWrp"></div>
      </div>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
export default {
  name: 'error',
  components: {
    MainLayout
  }
}
</script>
<style lang="scss" scoped>
.error {
  margin: 0;
}

.errorWrp {
  background: url('./../assets/image/404.png');
  height: 55vw;
  width: 70vw;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
