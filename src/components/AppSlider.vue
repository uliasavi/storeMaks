<template>
<div class="slider_place">
  <div class="wrapper">
    <div class="SliderMain"
    :style="{ 'margin-left': '-'+ (90 * currentSlideIndex) + 'vw'}"
    :class="{ last: isLast }"
    @touchstart="SaveTouch"
    @touchend="ChangeTouch"
    @mousedown="SavePoint"
    @mouseup="ChangePoint"
    >
      <div class="SliderMainItem"
         v-for="item in sliderItems"
         :key="item.index"
         onselectstart="return false"
         >
         <div class="SliderMainItem" :style="{ backgroundImage: 'url(' + require('@/assets/image/' + item.img ) + ')' }">
           <div class="slider_text">
             <div class="slide_item_wrapper">
               <div class="title">{{item.title}}</div>
               <div class="subtitle">{{item.subtitle}}</div>
               <div class="row_btn"><button class="buyIt">Buy It</button></div>
             </div>
           </div>
         </div>
      </div>
    </div>
    <div class="dot_lot">
      <div class="wrappBtn"
      v-for="item in sliderItems"
          :key="item.id">
        <button class="slider_dot"
               @click="DotClicked(item.id)">
        </button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SliderApp',
  props: {
    interval: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      sliderItems: [
        { id: 1, title: 'Lorem ipsum dolor sit.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'slide1.jpg', btn: 'link' },
        { id: 2, title: 'Lorem ipsum dolor sit.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'slide2.jpg', btn: 'link' },
        { id: 3, title: 'Lorem ipsum dolor sit.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'slide3.jpg', btn: 'link' },
        { id: 4, title: 'Lorem ipsum dolor sit.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'slide4.jpg', btn: 'link' },
        { id: 5, title: 'Lorem ipsum dolor sit.', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', img: 'slide5.jpg', btn: 'link' }
      ],
      currentSlideIndex: 0,
      isLast: false,
      go: true,
      startX: 0
    }
  },
  methods: {
    prevSlide () { // предыдущий слайд
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    nextSlide () { // следующий слайд
      if (this.currentSlideIndex >= this.sliderItems.length - 1) {
        this.currentSlideIndex = 0
        this.isLast = true
      } else {
        this.currentSlideIndex++
        this.isLast = false
      }
    },
    ListSlide () { // автоматическое листание слайдов
      if (this.interval > 0) {
        const vm = this
        setInterval(function () {
          if (vm.go !== false) { vm.nextSlide() }
        }, vm.interval)
      }
    },
    TimeSlideOn () { // останвливает перелистывание слайдов на время
      this.go = false
      const vm = this
      setTimeout(function () {
        vm.go = true
      }, vm.interval)
    },
    DotClicked (id) { // перелистывание при нажанитии на кнопку
      this.currentSlideIndex = id - 1
      this.TimeSlideOn()
    },
    SavePoint: function (event) {
      this.startX = event.clientX
    },
    ChangePoint: function (event) { // листание мышкой если разница в коорданатах больше 20рх
      const diff = event.clientX - this.startX
      if (event.clientX > this.startX && diff > 20) this.prevSlide()
      else if (event.clientX < this.startX && diff < -20) this.nextSlide()
      this.TimeSlideOn()
    },
    SaveTouch: function (event) {
      this.startX = event.changedTouches[0].screenX
    },
    ChangeTouch: function (event) { // листание пальцем
      const diffTouch = event.changedTouches[0].screenX - this.startX
      if (event.changedTouches[0].screenX > this.startX && diffTouch > 20) this.prevSlide()
      else if (event.changedTouches[0].screenX < this.startX && diffTouch < -20) this.nextSlide()
      this.TimeSlideOn()
    }
  },
  mounted () {
    this.ListSlide()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.last{
  transition: none  !important;
}
.slider_place{
  width: 100%;
  background-image: url(../assets/image/fon1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.wrapper{
  max-width: 90vw;
  overflow: hidden;
  margin:0 auto;
  position: relative;
}
.SliderMain{
  display: flex;
  transition: all ease 1s;
}
.SliderMainItem{
  position: relative;
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.slider_text{
  width: 90vw;
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  background-size: cover;
  @media(max-width: 970px){
    font-size: 3rem;
  }
  @media(max-width: 767px){
    font-size: 2.5rem;
  }
  @media(max-width: 450px){
    font-size: 1.6rem;
  }
}
.slide_item_wrapper{
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding: 2rem;
  padding-bottom: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  @media(max-width: 450px){
    text-align: center;
    height: 40vh;
  }
}
.subtitle{
  font-size: 3rem;
  font-weight: 300;
  text-transform: none;
  width: 60%;
  @media(max-width: 970px){
    font-size: 2.5rem;
    width: 80%;
  }
  @media(max-width: 767px){
    font-size: 2rem;
  }
  @media(max-width: 450px){
    width: 100%;
    font-size: 1.5rem;
  }
}
.buyIt{
  font-size: 3rem;
  color: #fff;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #7F00FF 0%, #E100FF 100%);
  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.24);
  border-radius: 4px;
  @media(max-width: 767px){
    font-size: 2rem;
  }
  @media(max-width: 450px){
    font-size: 1.5rem;
  }
}
.dot_lot{
  height: 25px;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  & .wrappBtn{
    width: 25px;
    height: 25px;
    display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  }
  & button{
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    transition: all ease 0.3s;
    &:hover{
      width: 25px;
      height: 25px;
    }
  }
}

</style>
