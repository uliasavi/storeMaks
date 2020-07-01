<template>
  <div class="NewsPage">
    <main-layout>
      <div class="container">
        <div class="news_title">
          Новости, блоги, статьи, обзоры
        </div>
      <div class="news_wrp">
        <news-item
          v-for="item in pagination"
          :key="item.index"
          :newsDataItem="item"
        ></news-item>
      </div>
      <div class="paginations">
        <span class="arrowL"
          @click="pageClickLeft()"
        ></span>
        <div class="page"
          v-for="page in pages"
          :key="page.index"
          :class="{'pageSelected': page === pageNumber}"
          @click="pageClick(page)"
          >
          {{page}}
        </div>
        <span class="arrowR"
        @click="pageClickRight()"
        ></span>
      </div>
      </div>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from '../components/MainLayout'
import { mapActions, mapGetters } from 'vuex'
import NewsItem from '../components/NewsItem'
export default {
  name: 'NewsPage',
  components: {
    MainLayout,
    NewsItem
  },
  data () {
    return {
      newsPerPage: 6,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters([
      'newsData'
    ]),
    pages () {
      return Math.ceil(this.newsData.length / 6)
    },
    pagination () {
      const fromPage = (this.pageNumber - 1) * this.newsPerPage
      const toPage = fromPage + this.newsPerPage
      return this.newsData.slice(fromPage, toPage)
    }
  },
  methods: {
    ...mapActions([
      'GET_NEWSDATA_FROM_API'
    ]),
    pageClick (page) {
      this.pageNumber = page
    },
    pageClickLeft (page) {
      if (this.pageNumber > 1) {
        this.pageNumber = this.pageNumber - 1
      }
    },
    pageClickRight (page) {
      if (this.pageNumber < this.pages) {
        this.pageNumber = this.pageNumber + 1
      }
    }
  },
  mounted () {
    this.GET_NEWSDATA_FROM_API()
  }
}
</script>
<style lang="scss">
.news_wrp{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.paginations{
  display: flex;
  margin: 0 auto;
  justify-content: flex-start;
  & .page{
    margin: 0 10px;
    flex-basis: 30px;
    padding: 5px 0;
    &:hover{
      background: #FFFFFF;
      box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      color: #03A9F4;
    }
  }
}
.pageSelected{
   background: #FFFFFF;
      box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      color: #03A9F4;
}
.arrowL, .arrowR {
  margin:10px;
  cursor: pointer;
}
.arrowL:before, .arrowR:after{
  display: block;
  content: '';
  width: 10px;
  height: 4px;
  background-color: #03A9F4;
  transform: rotate(-45deg);
}
.arrowL:after, .arrowR:before{
  display: block;
  content: '';
  width: 10px;
  height: 4px;
  background-color: #03A9F4;
  transform: rotate(45deg);
}
</style>
