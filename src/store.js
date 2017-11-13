import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/service/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMainSidebarActive: false,
    isLoginModalActive: false,
    isProfileModalActive: false,
    isAddResourceModalActive: false,

    user: {}
  },

  mutations: {
    toggleMainSidebar: state => (state.isMainSidebarActive = !state.isMainSidebarActive),
    toggleLoginModal: state => (state.isLoginModalActive = !state.isLoginModalActive),
    toggleProfileModal: state => (state.isProfileModalActive = !state.isProfileModalActive),
    toggleAddResourceModal: state => (state.isAddResourceModalActive = !state.isAddResourceModalActive),
    closeModals (state) {
      state.isMainSidebarActive = false
      state.isLoginModalActive = false
      state.isProfileModalActive = false
      state.isAddResourceModalActive = false
    },

    setUser: (state, user) => (state.user = user),
    // @TODO Toast success
    // @TODO Catche error
    deleteUser (state) {
      state.user.delete()
      state.user = {}
    },
    logout (state) {
      state.user = {}
      firebase.auth().signOut()
    }
  }
})
