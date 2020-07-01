<template>
  <div class="searchSection">
    <div class="container">
      <div class="searchWrp">
        <div class="wrpSearchLogo">
          <router-link to="/">
            <img src="./../assets/image/logo.png" alt />
          </router-link>
        </div>
        <div class="searchItemWrp">
          <input type="text" placeholder="Поиск" class="searchHeader" />
          <router-link to="search" class="searchItem">
            <img :src="require('../assets/image/search.png')" alt="search" />
          </router-link>
        </div>
        <basket/>
      </div>
    </div>
  </div>
</template>

<script>
import basket from './basket'
export default {
  name: 'searchSection',
  components: {
    basket
  }
}
</script>

<style lang="scss">
@import "./../assets/styles/variables.scss";
.searchSection {
  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}
.searchHeader {
  border: none;
  border-bottom: 1.5px solid $grey;
  height: 30px;
  width: 90%;
}

.searchWrp {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  .wrpSearchLogo {
    img {
      max-width: 110px;
      @media (max-width: 597px) {
        width: 70px;
      }
    }
  }

  .searchItemWrp {
    display: flex;
    width: 77%;
    justify-content: center;
  }
  .searchItem {
    img {
      color: $grey;
      width: 25px;
      margin-left: -1.2rem;
      position: absolute;
    }
  }
}
</style>
