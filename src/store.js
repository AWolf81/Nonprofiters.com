import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMainSidebarActive: false,
    isLoginModalActive: false,
    toggleProfileModal: false,

    user: {}
  },

  mutations: {
    toggleMainSidebar: state => (state.isMainSidebarActive = !state.isMainSidebarActive),
    toggleLoginModal: state => (state.isLoginModalActive = !state.isLoginModalActive),
    toggleProfileModal: state => (state.toggleProfileModal = !state.toggleProfileModal)

    setUser: (state, user) => (state.user = user)
  }
})
