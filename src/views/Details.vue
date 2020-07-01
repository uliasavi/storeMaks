<template>
  <div class="details">
    <main-layout>
      <div class="container">
        <div class="wrpLinks">
          <router-link
          :to="link.path"
          v-for="link in links"
          :key="link.index">
            <img :src="require('./../assets/image/' + link.image)" alt />
            {{ link.title }}
          </router-link>
        </div>
        <h1 class="mainTitle">Детали, стройматериалы</h1>
        <div class="detailsWrp">
          <div class="detailsItem"
          v-for="typeProduct in typeProducts"
          :key="typeProduct.index">
            <router-link :to="typeProduct.path">
              <img :src="require('./../assets/image/' + typeProduct.image)" alt />
              <h3>{{ typeProduct.title }}</h3>
              <p class="amountDetails">{{ typeProduct.arrayLength }} товаров</p>
            </router-link>
          </div>
        </div>
        <div class="descriptionDetails">
          <h2>{{ descriptionOfProduct.title }}</h2>
          <p>{{ descriptionOfProduct.description }}</p>
        </div>
      </div>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
export default {
  name: 'Details',
  components: {
    MainLayout
  },
  data () {
    return {
      links: [
        {
          title: 'Главная',
          path: './',
          image: 'home.png'
        },
        {
          title: 'Каталог товаров',
          path: '/Catalog',
          image: 'note.png'
        }
      ],
      typeProducts: [
        {
          title: 'Электроинструмент',
          image: 'type1.jpg',
          arrayLength: '145',
          path: '/electoinstrument'
        },
        {
          title: 'Cварочное оборудование',
          image: 'type2.jpg',
          arrayLength: '65',
          path: '/electoinstrument'
        },
        {
          title: 'Паяльный инструмент',
          image: 'type3.jpg',
          arrayLength: '213',
          path: '/electoinstrument'
        },
        {
          title: 'Печное оборудование',
          image: 'type4.jpg',
          arrayLength: '12',
          path: '/electoinstrument'
        },
        {
          title: 'Стройматериалы',
          image: 'type5.jpg',
          arrayLength: '28',
          path: '/electoinstrument'
        },
        {
          title: 'Электрика и освещение',
          image: 'type6.jpg',
          arrayLength: '28',
          path: '/electoinstrument'
        },
        {
          title: 'Крепеж и такеллаж',
          image: 'type7.jpg',
          arrayLength: '28',
          path: '/electoinstrument'
        },
        {
          title: 'Отделочные материалы',
          image: 'type8.jpg',
          arrayLength: '71',
          path: '/electoinstrument'
        }
      ],
      descriptionOfProduct: {
        title: 'Детали и стройматериалы',
        description: 'В процессе строительства, эксплуатации и ремонта зданий и сооружений строительные изделия и конструкции, из которых они возводятся, подвергаются различным физико-механическим, физическим и технологическим воздействиям. От инженера-строителя требуется со знанием дела правильно выбрать материал, изделия или конструкцию которая обладает достаточной стойкостью, надёжностью и долговечностью для конкретных условий. В зависимости от назначения, условий строительства и эксплуатации зданий и сооружений подбираются соответствующие строительные материалы, которые обладают определёнными качествами и защитными свойствами от воздействия на них различной внешней среды. Учитывая эти особенности, любой строительный материал должен обладать определёнными строительно-техническими свойствами. Например, материал для наружных стен зданий должен обладать наименьшей теплопроводностью при достаточной прочности, чтобы защищать помещение от потерь тепла; материал сооружения гидромелиоративного назначения — водонепроницаемостью и стойкостью к попеременному увлажнению и высыханию; материал для покрытия дорог (асфальт, бетон) должен иметь достаточную прочность и малую истираемость, чтобы выдержать нагрузки от транспорта.'
      }
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/styles/styles.scss";
.details {
  margin: 0;
}
.wrpLinks {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  img {
    max-width: 30px;
    margin-top: 0.4rem;
    margin-right: 0.4rem;
  }
  a {
    color:#03A9F4;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 0.1rem;
    text-decoration: underline;
  }
}

h1 {
  color: $black;
  font-size: 25px;
  @include for-tablet-portrait-up {
    font-size: 31px;
  }
}
.mainTitle {
  text-align: left;
  margin-bottom: 2rem;
}
.detailsWrp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include for-medium-up {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}
.detailsItem {
  margin-bottom: 0.6rem;
  width: 250px;
  @include for-large-desktops-up {
    margin: 0.3rem;
  }
  &:hover {
    background: #ffffff;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14),
      0px 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    transition: 0.25s ease-out;
  }
  h3 {
    max-width: 15rem;
    color: $black;
  }
  img {
    border-radius: 4px;
  }
}

.amountDetails {
  color: $liteGrey;
}

.descriptionDetails {
  margin-top: 3rem;
  text-align: left;
  p {
    color: $grey;
  }
  h2 {
    color: $black;
    font-size: 25px;
    @include for-tablet-portrait-up {
      font-size: 31px;
    }
  }
}

</style>
