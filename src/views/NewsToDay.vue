<template>
    <div class="NewsToDay">
        <main-layout>
            <div class="container">
                <div class="NewsToDay_item"
                v-for="(item, index) in newsData"
                :key="item.index"
                ><div class="dddd" v-if="index == id -1">
                     <div class="NewsToDay_title">{{item.title}}</div>
                    <div
                    class="news_img_NewsToDay"
                     :style="{ backgroundImage: 'url(' + require('@/assets/image/news/' + item.img ) + ')' }"
                    ></div>
                    <div class="NewsToDay_place">
                        <div class="NewsToDay_text">
                            <div class="text_NewsToDay">{{item.maintext}}</div>
                            <div
                            class="NewsToDay_img"
                            :style="{ backgroundImage: 'url(' + require('@/assets/image/news/' + item.img ) + ')' }"
                            ></div>
                            <div class="text_NewsToDay">{{item.maintext}}</div>
                        </div>
                        <div class="NewsToDay_other">
                            <router-link
                            v-for="item in newsData.slice(0, 4)"
                            :key="item.index"
                            :to="'/NewsToDay/' + item.path"
                            >
                            <div class="news_item">
                                    <div
                                    class="news_img"
                                    :style="{ backgroundImage: 'url(' + require('@/assets/image/news/' +item.img ) + ')' }"
                                    >
                                    </div>
                                <div class="news_name">{{item.title}}</div>
                                <div class="news_text">{{item.text}}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </main-layout>
    </div>
</template>

<script>
import MainLayout from '../components/MainLayout'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'NewsToDay',
  components: {
    MainLayout
  },
  data () {
    return {
      id: this.$router.currentRoute.params.id
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params.id
    }
  },
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

<style lang="scss" scoped>
.NewsToDay_item{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.NewsToDay_title{
    font-size: 42px;
    line-height: 48px;
    text-align: left;
    margin-bottom: 26px;
}
.news_img_NewsToDay{
    width: 100%;
    height: 40vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.NewsToDay_img{
    width: 100%;
    height: 30vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.NewsToDay_place{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 904px){
       flex-direction: column;
           }
}
.NewsToDay_text{
    line-height: 26px;
    text-align: left;
}
.text_NewsToDay{
    margin: 40px 0px;
}
.NewsToDay_other{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 904px){
       flex-direction: row;
       width: 100%;
  }
}
.news_item{
  box-sizing: border-box;
  width: 270px;
  padding: 10px 10px;
}
.news_img{
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.news_name{
  padding: 10px 0px 5px 0px;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-align: left;
}
.news_text{
  text-align: justify;
}
</style>
