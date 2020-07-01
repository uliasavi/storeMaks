<template>
    <div class="basketWrapper">
        <button @click="clickOnBasket()" class="bagSearch">
            <img :src="require('../assets/image/basket.png')" alt="">
            <span>Корзина</span>
        </button>
    </div>
</template>

<script>
export default {
  name: 'basket',
  components: {},
  methods: {
    clickOnBasket () {
      console.log('Click on basket')
    }
  }
}

</script>

<style lang="scss">
@import './../assets/styles/variables.scss';
.bagSearch {
    background: linear-gradient(90deg, #7F00FF 0%, #E100FF 100%);
    box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);
    border-radius: 2px;
    cursor: pointer;
    color: $white;
    padding: 0.4rem 0.9rem;
    @include flex(center, center);
    span {
      font-size: 16px;
    }
    img {
      width: 30px;
    }
    span {
      display: none
    }
    @include for-tablet-portrait-up {
      img {
        width: 30px;
        margin-right: 0.8rem;
      }
      span {
        display: block;
      }
    }

}
</style>
