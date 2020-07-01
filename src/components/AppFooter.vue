<template>
  <div class="v-footer">
    <div class="container">
      <div class="v-footer_info">
        <div class="logo">
          <router-link to="/"><img :src="require('../assets/image/logo.png')" alt="logo" /></router-link>
          <div class="mobile_search">
            <form action class="search">
              <input type="search" name="search" placeholder="Поиск" />
              <button>
                <img :src="require('../assets/image/cart.svg')" alt="cart" class="cart" />
              </button>
            </form>
          </div>
          <p class="v-footer_descr">Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. информацию изображения), их содержание и качество.</p>
        </div>
        <div class="v-footer_nav">
          <div class="company" v-for="(item,index) in menu" :key="index">
            <h3>
              <a href="#">{{item.theme}}</a>
            </h3>
            <div class="list">
              <div class="menu-item theme" @click="item.isOpen = !item.isOpen">
                <a href="#" class="title">
                  {{item.theme}}
                  <img src="../assets/image/down-arrow.svg" />
                </a>
              </div>
              <transition name="fade" appear>
                <div class="sub-menu" v-if="item.isOpen">
                  <div v-for="(element, i) in item.array" :key="i" class="menu-item">
                    <a :href="element.path" class="menu-item_link">{{ element.title }}</a>
                  </div>
                </div>
              </transition>
            </div>
            <ul>
              <li v-for="(element,i) in item.array" v-bind:key="i">
                <router-link :to="element.path">{{element.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="subscribe">
          <div class="form">
            <h3>Подписаться на рассылку</h3>
            <form action>
              <input type="text" placeholder="Введите ваш e-mail" />
              <input type="button" value="Подписаться" />
            </form>
          </div>
          <div class="v-footer_social_link">
            <h3>Мы в социальных сетях</h3>
            <div class="social_item">
              <router-link to="/">
                <img :src="require('../assets/image/facebook.svg')" alt="facebook" />
              </router-link>
              <router-link to="/">
                <img :src="require('../assets/image/vk.svg')" alt="vk" />
              </router-link>
              <router-link to="/">
                <img :src="require('../assets/image/telegram.svg')" alt="telegram" />
              </router-link>
              <router-link to="/">
                <img :src="require('../assets/image/twitter.svg')" alt="twitter" />
              </router-link>
            </div>
          </div>
          <p
            class="v-footer_descr_mobile"
          >Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. информацию изображения), их содержание и качество.</p>
        </div>
      </div>
   </div>
  <div class="blue_wrapper">
    <div class="container">
      <div class="contact-info">
          <p>© 2002—2019 Notus™</p>
          <p class="address">
            <a href="tel:+7777777777">+7 777 77-77-77</a>
            <br />Адреса в г. Благовещенске
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menu: [
        {
          theme: 'О компании',
          array: [
            { title: 'Корпоративные продажи', path: '/' },
            { title: 'Обратная связь', path: '/' },
            { title: 'Вакансии', path: '/' },
            { title: 'Новости', path: '/' },
            { title: 'Правила продаж', path: '/' },
            { title: 'Персональные данные', path: '/' },
            { title: 'Партнерам', path: '/' }
          ],
          isOpen: false
        },
        {
          theme: 'Покупателям',
          array: [
            { title: 'Подарочные карты', path: '/' },
            { title: 'Бонусная программа', path: '/' },
            { title: 'Проверка оплаты счёта', path: '/' },
            { title: 'Кредиты', path: '/' },
            { title: 'Доставка', path: '/' },
            { title: 'Сервисные центры', path: '/' },
            { title: 'Клуб экспертов', path: '/' }
          ],
          isOpen: false
        },
        {
          theme: 'Помощь',
          array: [
            { title: 'Как оформить заказ', path: '/' },
            { title: 'Способы оплаты', path: '/' },
            { title: 'Обмен и возврат товара', path: '/' },
            { title: 'Гарантийное обслуживание', path: '/' },
            { title: 'Информация для юр. лиц', path: '/' },
            { title: 'Статусы заказов', path: '/' },
            { title: 'База знаний', path: '/' }
          ],
          isOpen: false
        }
      ]
    }
  },
  props: {
    theme: {
      type: String,
      default: 'theme'
    },
    items: Array
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-footer {
  &_info{
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    background: #ffffff;
    margin-top: 2.5rem;
    padding: 1rem 1.5rem 0rem;
    height: auto;
    .logo {
      display: flex;
      flex-direction: column;
      img {
        width: 180px;
      }
      .mobile_search {
        display: none;
      }
      .v-footer_descr {
        font-size: 13px;
        color: #000000;
        text-align: left;
        width: 200px;
      }
    }
    .v-footer_nav {
      display: flex;
      flex-wrap: wrap;
      padding-left: 1.5rem;
      .company {
        width: 200px;
        margin-left: 0;
        h3 {
          text-align: left;
        }
        ul {
          text-align: left;
          list-style-type: none;
          padding-left: 0rem;
          a {
            font-size: 14px;
            color: #585858;
            text-decoration: none;
          }
          li:not(:first-child) {
            padding-top: 0.5rem;
          }
        }
        .menu-item {
          display: none;
        }
      }
    }
    .subscribe {
      text-align: left;
      .form {
        form {
          height: 40px;
          input[type="text"] {
            font-family: "Roboto";
            font-size: 13px;
            padding: 8px 50px 8px 3px;
            background: #ffffff;
            border: none;
            border-radius: 5px;
            box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14),
              0px 8px 10px rgba(0, 0, 0, 0.2);
          }
          input[type="button"] {
            margin-left: -65px;
            padding: 9px 9px;
            border: none;
            background: linear-gradient(90deg, #7f00ff 0%, #e100ff 100%);
            color: white;
            border-radius: 5px;
            font-weight: 500;
            font-size: 13px;
          }
        }
      }
      .v-footer_descr_mobile {
        display: none;
      }
    }
    .v-footer_social_link {
      margin-top: 3.5rem;
      .social_item {
        display: flex;
        justify-content: space-between;
      }
    }
    h3,
    a {
      font-size: 16px;
      color: #000000;
      text-decoration: none;
    }
  }
  .blue_wrapper{
  background: linear-gradient(90deg, #1da1f2 0%, #009ffc 100%);
  }
  .contact-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #ffffff;

    .address,
    a {
      font-size: 14px;
      text-align: right;
      color: white;
      text-decoration: none;
    }
  }
}
@media (max-width: 1140px) {
  .v-footer_info {
    padding: 1rem 0.5rem 0rem 0.5rem;
    margin: 1rem auto;
    .logo {
      width: 200px;
      img {
        width: 150px;
      }
      .v-footer_descr {
        width: 180px;
      }
    }
    .v-footer_nav {
      padding-left: 0.5rem;
      .company {
        width: 190px;
        margin-left: -1rem;
        & a{
          margin-left: 0;
          text-align: left;
        }
      }
    }
    .subscribe {
      margin-left: 0.5rem;
      .form {
        form {
          input[type="text"] {
            padding: 8px 30px 8px 3px;
          }
        }
      }
    }
  }
  .contact-info {
    justify-content: space-evenly;
  }
}

@media (max-width: 992px) {
  .v-footer_info {
      justify-content: center;
    .subscribe {
      display: flex;
      width: 95%;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 1rem;
      .v-footer_social_link {
        margin-top: 0;
      }
    }
  }
  .contact-info {
    justify-content: space-evenly;
  }
}

@media (max-width: 863px) {
  .v-footer_info {
    justify-content: center;
    .logo {
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      width: 100%;
      .mobile_search {
        display: block;
        .search {
          input {
            width: 60%;
            margin-right: 1rem;
            margin-left: 0.4rem;
            font-size: 16px;
            background-size: contain;
            background-image: url("../assets/image/search.svg");
            background-repeat: no-repeat;
            background-position: right center;
            border: none;
            border-bottom: 1.5px solid #171717;
            height: 30px;
          }
          button {
            padding: 0.4rem 0.9rem;
            background: linear-gradient(90deg, #7f00ff 0%, #e100ff 100%);
            box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);
            border-radius: 4px;
            .cart {
              width: auto;
            }
          }
        }
      }
      .v-footer_descr {
        display: none;
      }
    }
    .v-footer_nav {
      justify-content: center;
      .company {
        margin-left: -0.5rem;
      }
    }
    .subscribe {
      flex-wrap: wrap;
      justify-content: space-evenly;
      .v-footer_descr_mobile {
        display: block;
        font-size: 15px;
        color: #000000;
        text-align: center;
        width: 80%;
        text-align: left;
      }
    }
  }
}
@media (max-width: 637px) {
  .v-footer_info {
    .logo {
      margin-left: 0;
      flex-direction: row;
      img {
        width: 87px;
      }
    }
    .v-footer_nav {
      justify-content: flex-start;
      text-align: left;
      padding-left: 0.4rem;
      flex-direction: column;
      width: 100%;
      @media (max-width: 360px) {
        padding-left: 0.1rem;
      }
      .list {
        .menu-item {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          /* @media (max-width: 320px) {
            width: 287px
          } */
          .title {
            font-size: 19px;
            color: #000;
            text-decoration: none;
            font-weight: 800;
            display: flex;
            align-items: center;
            border-bottom: 1px solid black;
            justify-content: space-between;
            img {
              width: 20px;
            }
          }
        }
        .fabe {
          .sub-menu {
            .menu-item {
              margin-top: 0.5rem;
            }
          }
        }
        .fade-enter-active,
        .fade-leave-active {
          transition: all .5s;
        }
        .fade-enter,
        .fade-leave-to {
          transform: translateY(25px);
        }
      }
      ul {
        display: none;
      }
      .company {
        margin-left: 0;
        margin-top: 1rem;
        width: 100%;
        @media (max-width: 320px) {
          margin-left: -5px;
        }
      }
      h3 {
        display: none;
      }
      .title {
        width: 100%;
      }
      .menu-item_link {
        font-size: 15px;
        color: #585858;
        text-decoration: none;
        margin-top: 1rem;
      }
    }
      .subscribe {
        margin-bottom: 0;
        margin-left: 0;
      }
  }
}
@media (max-width: 360px) {
  .v-footer_info {
    .logo {
      flex-direction: row;
      width: 480px;
      img {
        max-width: 65px;
      }
      .mobile_search {
        display: block;
        .search {
          input {
            width: 57%;
            height: 30px;
            margin-right: 0.2rem;
            margin-left: 0.4rem;
          }
          button {
            height: 40px;
            .cart {
              width: auto;
            }
          }
        }
      }
    }
    /* .theme {
      .title {
        width: 77%;
      }
    } */
    .subscribe {
      .form {
        form {
          input[type="text"] {
            padding: 8px 18px 8px 3px;
            text-align: center;
            margin-left: 1rem;
          }
          input[type="button"] {
            margin-left: 3.5rem;
            margin-top: 0.8rem;
          }
        }
      }
      .v-footer_social_link {
        margin-top: 2.5rem;
      }
      .v-footer_descr_mobile {
        font-size: 12px;
        width: 100%;
      }
    }
    .contact-info {
      justify-content: space-evenly;
    }
  }
}
</style>
