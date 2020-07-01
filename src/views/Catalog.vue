<template>
  <div class="catalog">
    <main-layout>
      <div class="container">
        <div class="wrpCatalogHome">
          <router-link :to="catalogLinks.path">
            <img :src="require('../assets/image/home.png')" alt />
            {{ catalogLinks.title }}
          </router-link>
        </div>
        <div class="wrpCatalogItem">
          <h1>Каталог товаров</h1>
          <div class="catalogWrapper">
            <catalogitem v-for="product in products" :key="product.id" :products_data="product"></catalogitem>
          </div>
        </div>
      </div>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import catalogitem from './../components/catalogitem'
export default {
  name: 'catalog',
  components: {
    MainLayout,
    catalogitem
  },
  data () {
    return {
      catalogLinks: {
        title: 'Главная',
        path: '/Home'
      },
      products: [
        {
          id: 1,
          image: 'tool1.png',
          name: 'СТРОЙМАТЕРИАЛЫ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 2,
          image: 'tool2.png',
          name: 'СТОЛЯРНЫЕ ИЗДЕЛИЯ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 3,
          image: 'tool3.png',
          name: 'КРАСОЧНЫЕ МАТЕРИАЛЫ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 4,
          image: 'tool4.png',
          name: 'ЭЛЕКТРИКА, ОСВЕЩЕНИЕ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 5,
          image: 'tool5.png',
          name: 'ИНСТРУМЕНТ, ОБОРУДОВАНИЕ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 6,
          image: 'tool6.png',
          name: 'ВОДОСНАБЖЕНИЕ, ОТОПЛЕНИЕ, КАНАЛИЗАЦИЯ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 7,
          image: 'tool7.png',
          name: 'САНТЕХНИКА',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 8,
          image: 'tool8.png',
          name: 'КРЕПЕЖ И ТАКЕЛАЖ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 9,
          image: 'tool9.png',
          name: 'ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 10,
          image: 'tool11.png',
          name: 'ДАЧА И САД',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 11,
          image: 'tool10.png',
          name: 'ТОВАРЫ ДЛЯ ДОМА',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        },
        {
          id: 12,
          image: 'tool12.png',
          name: 'АВТОТОВАРЫ',
          categoriesList: [
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            },
            {
              title: 'Сухие смеси, штукатурки',
              path: '/shtukaturki'
            },
            {
              title: 'Cтены и перегородки',
              path: '/peregorodki'
            },
            {
              title: 'Металлопрокат',
              path: '/metalloprokat'
            },
            {
              title: 'ЖБИ, люки',
              path: '/luki'
            },
            {
              title: 'Кровля, водосток, отделка фасадов',
              path: '/vodostok'
            },
            {
              title: 'Утеплители',
              path: '/utepliteli'
            },
            {
              title: 'Гипсокартонные системы',
              path: '/gipsokartonnie_sistemy'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";

.wrpCatalogHome {
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
    color: #174a97;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 0.1rem;
    text-decoration: underline;
  }
}

.wrpCatalogItem {
  margin-top: 2rem;
  text-align: left;
  margin-bottom: 2rem;
}
.catalogWrapper {
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
</style>
