<template>
  <div class="headerSection">
    <div class="blue_wrapper">
      <div class="containerHead">
        <div class="wrpMenu">
          <div class="wrpLocation">
            <img :src="require('../assets/image/local.png')" alt />
            <a href="#">Москва</a>
          </div>
          <div class="wrpMenuAndPhone">
            <div class="wrpHeaderLinks">
              <ul>
                <li v-for="item in linksItems" :key="item.id">
                  <router-link :to="item.path">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
            <div class="wrpHeaderPhone">
              <div class="wrpHeaderPhoneImg">
                <img :src="require('../assets/image/phone.png')" alt />
              </div>
              <div class="wrpHeaderPhoneTxt">
                <a href="tel:+777-777-77-77">+777-777-77-77</a>
                <a href="#">name@mail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="containerHead">
      <div class="burgerMenu">
        <header class="headerMobile">
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon">
              <img :src="require('../assets/image/burger.png')" alt />
            </span>
          </label>
          <div class="burgerContactWrp">
            <div class="wrpLocation">
              <img :src="require('../assets/image/local.png')" alt />
              <a href="#">Москва</a>
            </div>
            <div class="wrpHeaderPhone">
              <div class="wrpHeaderPhoneImg">
                <img :src="require('../assets/image/phone.png')" alt />
              </div>
              <div class="wrpHeaderPhoneTxt">
                <a href="#">+777-777-77-77</a>
                <a href="#">name@mail.com</a>
              </div>
            </div>
          </div>
          <ul class="menu">
            <li v-for="item in linksItems" :key="item.id">
              <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
          </ul>
        </header>
      </div>
    </div>
    <search-section></search-section>
    <catalog-bar></catalog-bar>
  </div>
</template>
<script>
import searchSection from './AppSearch'
import CatalogBar from './CatalogBar.vue'
export default {
  name: 'AppHeader',
  data () {
    return {
      linksItems: [
        {
          title: 'О компании',
          path: '/error',
          id: 1
        },
        {
          title: 'Доставка',
          path: 'delivery',
          id: 2
        },
        {
          title: 'Адреса магазинов',
          path: 'contacts',
          id: 3
        },
        {
          title: 'Мои заказы',
          path: '/error',
          id: 4
        }
      ]
    }
  },
  components: {
    searchSection,
    CatalogBar
  }
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";
.headerSection {
  background-color: #fff;
}
.containerHead{
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}
.wrpLocation {
  text-align: center;
  @include flex(center, center);
  a {
    color: white;
    text-align: center;
    font-size: 12px;
    @include for-small-up {
      font-size: 15px;
      margin-right: 1rem;
    }
  }
  img {
    width: 20px;
    margin-right: 0.5rem;
  }
}
  .blue_wrapper{
  background: linear-gradient(90deg, #1da1f2 0%, #009ffc 100%);
  }
.wrpMenu {
  padding: 20px 0px;
  display: none;
  background: linear-gradient(90deg, #1da1f2 0%, #009ffc 100%);
  @include for-desktop-up {
    display: block;
  }
}

.wrpMenuAndPhone {
  @include flex(center, center);
}

.wrpMenu {
  @include for-medium-up {
    @include flex(space-between, center);
  }
}

.wrpHeaderLinks {
  li {
    display: inline;
  }
  a {
    margin-right: 1rem;
    color: white;
    white-space: nowrap;
    font-size: 14px;
    @include for-desktop-up {
      font-size: 15px;
      margin: 2rem;
    }
  }
  margin: 0;
  @include for-large-desktops-up {
    margin: 0 0.7rem;
  }
}

.wrpHeaderPhoneTxt {
  display: flex;
  flex-direction: column;
  a {
    color: white;
    margin-left: 1rem;
    font-size: 12px;
    @include for-small-up {
      font-size: 15px;
    }
  }
}
.wrpHeaderPhone {
  img {
    width: 20px;
  }
  margin-top: 0.7rem;
  @include flex(center, center);
}

.burgerMenu {
  background: linear-gradient(90deg, #1da1f2 0%, #009ffc 100%);
  @include for-medium-up {
    display: none;
  }
}

.headerMobile {
  width: 100%;
  z-index: 3;
  .burgerContactWrp {
    @include for-extra-small-up {
      @include flex(space-between, center);
    }
    margin-left: 3rem;
    @mixin for-tablet-portrait-up {
      margin-left: 5rem;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  li a {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    color: white;
  }

  .logoMobile {
    display: block;
    float: left;
    font-size: 30px;
    color: $grey;
    padding: 2rem;
    text-decoration: none;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: left;
    padding-top: 1rem;
    position: relative;
    user-select: none;
    .navicon {
      display: block;
      position: relative;
      img {
        width: 30px;
      }
    }
  }
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 340px;
  }
}
</style>
