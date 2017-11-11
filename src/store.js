import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMainSidebarActive: false,
    isLoginModalActive: false,
    isProfileModalActive: false,

    user: {}
  },

  mutations: {
    toggleMainSidebar: state => (state.isMainSidebarActive = !state.isMainSidebarActive),
    toggleLoginModal: state => (state.isLoginModalActive = !state.isLoginModalActive),
    toggleProfileModal: state => (state.isProfileModalActive = !state.isProfileModalActive),

    setUser: (state, user) => (state.user = user),
    // @TODO Toast success
    // @TODO Catche error
    deleteUser: (state) => (state.user.delete())
  }
})
