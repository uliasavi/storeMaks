<template>
  <div class="catalogitem">
    <div class="wrpImgTitleCatlogItem">
      <img :src="require('../assets/image/' + products_data.image)" alt />
      <h4>{{ products_data.name }}</h4>
    </div>
    <router-link
      v-for="(category, index) in products_data.categoriesList"
      :to="category.path"
      :key="index"
    >{{ category.title }}</router-link>
  </div>
</template>
<script>
export default {
  name: 'catalogitem',
  props: {
    products_data: {
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.catalogitem {
  &:hover {
    background: #ffffff;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14),
      0px 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: 0.25s ease-out;
  }
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  padding-right: 0.8rem;
  padding-top: 1rem;

  @include for-tablet-portrait-up {
    flex-basis: 35%;
    margin: 0 10px 10px 0;
  }
  @include for-desktop-up {
    flex-basis: 26%;
  }
}

.catalogitem {
  a {
    display: block;
    margin-top: 1rem;
    max-width: 270px;
    color: $black;
    &:hover {
      color: $violet;
      transition: 0.1s ease-out;
    }
  }
  img {
    margin-right: 1rem;
  }
  h4 {
    max-width: 100px;
  }
}

.wrpImgTitleCatlogItem {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
}
</style>
