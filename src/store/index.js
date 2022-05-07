import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 0
  },
  getters: {
    formatCnt(state){
      return String(state.count).padStart(2,'0');
    }
  },
  mutations: {
    changeCnt(state, value){
      state.count+=value;
    }
  },
  actions: {
  },
  modules: {
    page
  }
})
