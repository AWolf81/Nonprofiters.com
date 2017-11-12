<template lang="pug">
  #app.off-canvas
    header.navbar
      .navbar-section
        .off-canvas-toggle.btn.btn-link.btn-action(@click='toggleSidebar' test='App.vue:sidebar-toggle')
          .icon.icon-menu
    .off-canvas-sidebar(:class='{active: isMainSidebarActive}' test='App.vue:sidebar-main')
      .panel.borderless
        .panel-header.text-center
          .panel-title.pb-2
            a(href="/")
              img#logo(src='static/img/favicon.png')
              | Nonprofiters
            div(v-if='user.uid')
              p
                figure.avatar.avatar-xl
                  img(:src='user.photoURL' :alt='user.displayName')
              //- @TODO parse emojis in displayName
              p {{user.displayName}}
        .panel-body
        .panel-footer.text-center(v-if='user.uid')
          button.btn.mr-1(@click='logout' test='App.vue:logout') Logout
          button.btn.btn-primary(@click='toggleProfile') Settings
        .panel-footer.text-center(v-if='!user.uid')
          button.btn.btn-primary(@click='toggleLogin' test='App.vue:sign-in') Sign In
    .off-canvas-overlay(@click='toggleSidebar')
    main.off-canvas-content
      //- router-view
      map-main

    //- Modals
    modal-login(v-if="!user.uid")
    modal-profile(v-if="user.uid")
</template>





<script>
  import ModalLogin from '@/components/modal/Login'
  import ModalProfile from '@/components/modal/Profile'
  import MapMain from '@/components/map/Main'
  import {mapState} from 'vuex'

  export default {
    name: 'app',

    components: {
      ModalLogin,
      ModalProfile,
      MapMain
    },

    computed: mapState([
      'isMainSidebarActive',
      'isLoginModalActive',
      'user'
    ]),

    methods: {
      toggleSidebar () {
        this.$store.commit('toggleMainSidebar')
      },
      toggleLogin () {
        this.$store.commit('toggleLoginModal')
      },
      toggleProfile () {
        this.$store.commit('toggleProfileModal')
      },
      logout () {
        this.$store.commit('logout')
      }
    }
  }
</script>





<style lang="sass">
  @import "assets/sass/main"

  #logo
    vertical-align: middle
    margin-right: 10px
    width: 32px
    position: relative
    top: 0px

  main
    padding: 0 !important
</style>
