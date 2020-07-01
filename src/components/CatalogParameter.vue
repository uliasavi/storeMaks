<template>
<div class="catalogOptions">
  <div class="container">
    <div class="catalog">
       <div class="titleParameter" @click=" isShow = !isShow ">
          <p>Подбор по параметрам </p><img src="../assets/image/catalogBar/chevron-down.png" alt="" :class="{ rotate: isShow }">
       </div>
       <form class="parameter" :class="{ show: isShow }" id="formP">
          <div class="price_title">Цена</div>
          <div class="price">
              <div class="price_start"><input type="number" placeholder="от"></div>
              <div class="price_end"><input type="number" placeholder="до"></div>
          </div>
          <div class="wrapPrice" v-for="item in post" :key="item.index">
            <div class="price_title">{{ item.price_title }}</div>
            <div class="price">
                <div class="price_item"  v-for="val in item.value" :key="val.index">
                  <input type="checkbox" :value="val.name" v-model="options">
                  {{ val.name }}
                </div>
            </div>
          </div>
          <button type="submit" @click=" isShow = !isShow "> Показать </button>
       </form>
      </div>
    <div class="text_eee"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CatalogParameter',
  data () {
    return {
      isShow: false,
      post: [
        { price_title: 'Производитель', value: [{ name: 'Ялта' }, { name: 'Крым' }] },
        { price_title: 'Год Выпуска', value: [{ name: '2016' }, { name: '2020' }, { name: '2019' }, { name: '2010' }] },
        { price_title: 'Доставка', value: [{ name: 'Россия' }, { name: 'Казахстан' }, { name: 'Китай' }, { name: 'Польша' }] },
        { price_title: 'Гарантия', value: [{ name: '2 года' }, { name: 'без гарантии' }] },
        { price_title: 'Наличие на складе', value: [{ name: 'в наличии' }, { name: 'отсутствует' }] },
        { price_title: 'Цвет', value: [{ name: 'белый' }, { name: 'красный' }, { name: 'синий' }, { name: 'золото' }, { name: 'серый' }, { name: 'черный' }] }
      ],
      options: []
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  max-width: 1140px;
}
.catalog{
  box-sizing: border-box;
  width: 30%;
  text-align: left;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 992px){
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}
.show{
  margin-left: 0 !important;
  visibility: visible !important;
}
.rotate{
  transform: rotate(90deg) !important;
}
.parameter{
  box-sizing: border-box;
  width: 100%;
  margin: 2rem 0;
  padding: 15px;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  transition: all ease 0.5s;
  @media screen and (max-width: 992px){
    margin-left: -200%;
    visibility: hidden;
  }
}
.titleParameter{
  padding: 0.6rem;
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  align-items:center;
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
 & img{
  width: 20px;
  height: 20px;
  transition: all ease 0.5s;
  transform: rotate(-90deg);
 }
  @media screen and (max-width: 992px){
    &:hover{
      color: #7F00FF;
    }
  }
}
.price_title{
  padding: 0.6rem 0;
  font-weight: 700;
}
.price_item{
  flex-basis: 50%;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}
.price{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.price_start input, .price_end input{
  padding: 0.3rem;
  margin: 0.3rem;
  background: #FFFFFF;
  border: 1px solid #8C8C8C;
  box-sizing: border-box;
  border-radius: 4px;
}
button{
  color: #fff;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #7F00FF 0%, #E100FF 100%);
  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);
  border-radius: 4px;
}
</style>
