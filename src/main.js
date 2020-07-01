import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/styles.scss'
import store from './store'
import './assets/scss/style.scss'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
