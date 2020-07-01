<template>
<div class="container">
  <div class="catalog_bar">
    <div class="bar_product">
      <div class="product_bar_item"
      v-for="item in BarProduct"
      :key="item.index"
      >
        <router-link :to="item.link">
          <img :src="require('./../assets/image/catalogBar/' + item.img)" alt="">
          <div class="text">{{ item.title }}</div>
        </router-link>
      </div>
      <div class="product_bar_item more">
        <router-link to="/Catalog">
          <img src="./../assets/image/catalogBar/arrow.png" alt="">
          <div class="text">All</div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CatalogBar',
  data () {
    return {
      BarProduct: [
        { title: 'Categories', img: '1.png', link: 'Catalog' },
        { title: 'Office', img: '2.png', link: 'Category' },
        { title: 'Details', img: '3.png', link: 'Details' },
        { title: 'Foto', img: '4.png', link: 'Category' },
        { title: 'Storage', img: '5.png', link: 'Category' },
        { title: 'Play', img: '6.png', link: 'Category' },
        { title: 'Sofa', img: '7.png', link: 'Category' },
        { title: 'Design', img: '8.png', link: 'Category' },
        { title: 'Climate', img: '9.png', link: 'Category' },
        { title: 'Tools', img: '10.png', link: 'Category' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.catalog_bar{
  background: #FFFFFF;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  margin:10px 0px 50px 0;
}
.bar_product{
  height: 140px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
}
.product_bar_item{
  flex-basis:100px;
  padding: 10px;
  &:hover{
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    .text{
      color: #7F00FF;
    }
  }
  & img{
    width: 90%;
  }
  & .text{
    padding-top: 5px;
    color: #000;
  }
}
.more{
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 120px;
  z-index: 3;
  background-color: #fff;
  @media screen and (max-width: 1220px){
    display: flex;
  }
  & img{
    height: 70%;
  }
}
</style>
