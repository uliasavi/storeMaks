<template>
  <div class="products">
      <div class="container">
        <div class="wrpTitleProducts">
          <h1>Рекомендуемое</h1>
          <router-link :to="linkToRecomendation" href="#"><img class="linkToMore" src="./../assets/image/news/arrow.png" alt=""></router-link>
        </div>
        <div class="productsWrp">
          <products-item
          v-show="!product.sale"
          v-for="product in productsData"
          :key="product.index"
          :productData="product"
          />
        </div>
        <div class="productsWrp">
          <products-item
          v-show="product.sale"
          v-for="product in productsData"
          :key="product.index"
          :productData="product"
          />
        </div>
      </div>
  </div>
</template>
<script>
import ProductsItem from '../components/ProductsItem'
export default {
  name: 'products',
  components: {
    ProductsItem
  },
  data () {
    return {
      linkToRecomendation: '/recomendation',
      productsData: [
        {
          image: 'product1.jpg',
          title: 'Кирпич облицовочный пустотелый М-125 цвет',
          price: '2300',
          path: 'AnotherPage',
          sale: {
            type: 'black friday',
            procent: '30%',
            newPrice: '1245'
          }
        },
        {
          image: 'product3.jpg',
          title: 'Керамзит 40л для поступления 09803',
          price: '322',
          path: 'AnotherPage'
        },
        {
          image: 'product2.jpg',
          title: 'Кирпич облицовочный пустотелый М-175 цвет',
          price: '556',
          path: 'AnotherPage'
        },
        {
          image: 'product4.jpg',
          title: 'Шлакоблок перегородочный М-35',
          price: '14500',
          path: 'AnotherPage'
        },
        {
          image: 'product5.jpg',
          title: 'Кирпич облицовочный пустотелый М-125 цвет',
          price: '20300',
          path: 'AnotherPage'
        },
        {
          image: 'product6.png',
          title: 'Кирпич облицовочный пустотелый М-125 цвет',
          price: '12000',
          path: 'AnotherPage',
          sale: {
            type: 'black friday',
            procent: '40%',
            newPrice: '10500'
          }
        },
        {
          image: 'product7.jpg',
          title: 'Кирпич облицовочный пустотелый М-125 цвет',
          price: '1400',
          path: 'AnotherPage',
          sale: {
            type: 'black friday',
            procent: '70%',
            newPrice: '960'
          }
        },
        {
          image: 'product8.jpg',
          title: 'Кирпич облицовочный пустотелый М-125 цвет',
          price: '9800',
          path: 'AnotherPage',
          sale: {
            type: 'black friday',
            procent: '10%',
            newPrice: '6890'
          }
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.products {
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 2rem;
}

.linkToMore {
  margin-top: 1rem;
}

.wrpTitleProducts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  h1 {
    color: $black;
    margin-right: 0.5rem;
    font-size: 25px;
    @include for-tablet-portrait-up {
      font-size: 30px;
    }
  }
}

.productsWrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include for-tablet-portrait-up {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  @mixin for-desktop-up {
    justify-content: space-between;
  }
}
</style>
