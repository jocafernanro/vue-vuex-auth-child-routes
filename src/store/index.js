import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, bool) {
      state.loading = bool
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
