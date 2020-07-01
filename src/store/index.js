import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsData: []
  },
  mutations: {
    SET_NEWSDATA_TO_VUEX: (state, newsData) => {
      state.newsData = newsData
    }
  },
  actions: {
    GET_NEWSDATA_FROM_API ({ commit }) {
      return axios(' http://localhost:3000/newsData', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_NEWSDATA_TO_VUEX', response.data)
        })
    }
  },
  getters: {
    newsData (state) {
      return state.newsData
    }
  }
})
