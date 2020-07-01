<template>
  <div class="Category">
    <main-layout>
      <catalog-parameter></catalog-parameter>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import CatalogParameter from './../components/CatalogParameter.vue'

export default {
  name: 'Category',
  components: {
    MainLayout,
    CatalogParameter
  }
}
</script>
<style lang="scss" scoped>

</style>
