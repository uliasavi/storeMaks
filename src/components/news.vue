<template>
  <div class="news">
    <div class="container">
      <router-link to="/NewsPage">
        <div class="news_title">
          Новости, блоги, статьи, обзоры
          <img src="./../assets/image/news/arrow.png" alt="">
        </div>
      </router-link>
      <div class="news_area">
        <news-item
          v-for="item in newsData.slice(0, 6)"
          :key="item.index"
          :newsDataItem="item"
        ></news-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NewsItem from './NewsItem.vue'
export default {
  name: 'news',
  components: {
    NewsItem
  },
  props: {},
  computed: {
    ...mapGetters([
      'newsData'
    ])
  },
  methods: {
    ...mapActions([
      'GET_NEWSDATA_FROM_API'
    ])
  },
  mounted () {
    this.GET_NEWSDATA_FROM_API()
  }
}
</script>

<style lang="scss">
.news{
  padding: 50px 0px;
}
.news_title{
  color: #000;
  font-size: 3rem;
  line-height: 48px;
  text-align: left;
  & img{
    transform: translateY(12px);
  }
  @media screen and (max-width: 470px){
    font-size: 2rem;
  }
}
.news_area{
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
}
</style>
