<template>
  <div class="contacts">
    <main-layout>
    <div class="container">
      <h1>Наши контакты и адреса магазинов</h1>
      <div class="contactsWrp">
        <div class="contactsList">
          <div class="contactsItem" v-for="address in contacts.addressesList" :key="address.id">
            <h3>{{ address.title }}</h3>
            <span><img :src="require('../assets/image/' + contacts.imgLocation)" alt="">{{ address.location }}</span>
            <a href="tel:address.phone"><img :src="require('../assets/image/' + contacts.imgPhone)" alt="">{{ address.phone }}</a>
          </div>
        </div>
        <div class="contactsMapWrp">
          <Map />
        </div>
      </div>
    </div>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import Map from '../components/Map'

export default {
  name: 'contacts',
  components: {
    MainLayout,
    Map
  },
  data () {
    return {
      contacts: {
        imgLocation: 'location2.png',
        imgPhone: 'phone2.png',
        addressesList: [
          {
            title: 'Weston ТРК Грозный',
            location: 'Улица Петрова 71',
            phone: '8 900 78 78 78',
            id: 1
          },
          {
            title: 'Weston Сити Металл',
            location: 'Улица Абрамова 61',
            phone: '8 901 78 78 71',
            id: 2
          },
          {
            title: 'Weston Магадан',
            location: 'Проспект Главный 61',
            phone: '8 901 78 78 70',
            id: 3
          },
          {
            title: 'Weston Дыбенко',
            location: 'Улица Петрова 81',
            phone: '8 901 78 78 72',
            id: 4
          },
          {
            title: 'Weston ТРЦ Золотой Бридж',
            location: 'Улица Петрова 64',
            phone: '8 901 78 78 76',
            id: 5
          },
          {
            title: 'Weston ТК Сердечко',
            location: 'Улица Петрова 69',
            phone: '8 901 78 78 74',
            id: 6
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../assets/styles/styles.scss";
.contacts {
  margin: 0;
  h1 {
    margin-top: 3rem;
    text-align: left;
  }
}

.contactsWrp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include for-medium-up {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 0;
  }
}

.contactsItem {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.6rem 0;
  img {
    width: 20px;
    margin-right: 0.4rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-align: left;
  }
  a {
    margin-top: 0.3rem;
    color: $black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  span {
    display: flex;
    justify-content: left;
    align-items: center;
  }
}

.contactsMapWrp {
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 5rem;
  @include for-medium-up {
    width: 70vw;
    margin-bottom: 0;
    margin-top: 0;
  }
  height: 700px;
  width: 100%;
  @media screen and (max-width: 520px){
    height: 500px;
  }
}
</style>
