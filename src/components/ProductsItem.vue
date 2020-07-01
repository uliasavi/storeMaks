<template>
  <div class="productsItem">
    <router-link :to="productData.path">
      <img class="picOfProduct" :src="require('./../assets/image/' + productData.image)" alt="">
      <h5 class="productTitle">{{ productData.title }}</h5>
      <div class="pricesWrapper">
        <p class="productPrice" v-if="productData.sale" v-bind:style="[ saleStyles ]">{{ productData.price + " р." }}</p>
        <p class="productPrice" v-if="!productData.sale">{{ productData.price + " р." }}</p>
        <p class="newPriceProduct" v-if="productData.sale">{{ productData.sale.newPrice + " р."}}</p>
      </div>
      <img class="salePicture" :src="require('./../assets/image/sale.png')" v-show="productData.sale" alt="">
      <p class="procentSale" v-if="productData.sale">{{ productData.sale.procent}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'productsItem',
  props: {
    productData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      saleStyles: {
        textDecoration: 'line-through',
        color: '#A7A7A7'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.productsItem {
  margin: 0.5rem;
  padding: 0.5rem;
  position: relative;
  width: 13rem;
  p {
    margin: 0;
  }
}

.styleObject {
  text-decoration: line-through;
}
.picOfProduct {
  width: 200px;
  height: 150px;
}

.productsItem {
  &:hover {
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: 0.3s;
  }
}

.productTitle {
  max-width: 200px;
  color: $black;
  margin: 0.7rem;
}

.productPrice {
  color: $violet;
}

.newPriceProduct {
  color: $violet;
}

.salePicture {
  width: 70px;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.procentSale {
  position: absolute;
  top: 0;
  right: 0;
  color:  $violet;
  font-size: 20px;
  font-weight: 600;
}

.pricesWrapper {
  display: flex;
  justify-content: space-around;
}
</style>
