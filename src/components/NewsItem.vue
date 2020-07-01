<template>
<router-link
:to="'/NewsToDay/' + newsDataItem.path"
>
  <div class="news_item">
        <div
          class="news_img"
          :style="{ backgroundImage: 'url(' + require('@/assets/image/news/' + newsDataItem.img ) + ')' }"
        >
        </div>
      <div class="news_name">{{newsDataItem.title}}</div>
      <div class="news_text">{{newsDataItem.text}}</div>
    </div>
</router-link>
</template>
<script>
export default {
  name: 'NewsItem',
  props: {
    newsDataItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
a{
  color: #000;
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
.news_item{
  box-sizing: border-box;
  width: 370px;
  padding: 30px 10px;
  @media screen and (max-width: 900px){
    width: 50%;
  }
  @media screen and (max-width: 768px){
    width: 100%;
  }
}
.news_img{
  height: 229px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.news_name{
  padding: 27px 0px 5px 0px;
  font-size: 1.8rem;
  line-height: 2rem;
  text-align: left;
  @media screen and (max-width: 500px){
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
}
.news_text{
  text-align: justify;
}
</style>
