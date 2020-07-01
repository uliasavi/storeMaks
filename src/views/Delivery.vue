<template>
  <div class="delivery">
    <main-layout>
      <payment></payment>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import Payment from './../components/Payment.vue'

export default {
  name: 'delivery',
  components: {
    MainLayout,
    Payment
  }
}
</script>
<style lang="scss" scoped>

</style>
