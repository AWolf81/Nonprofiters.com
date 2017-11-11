<template lang="pug">
  #app.off-canvas
    header.navbar
      .navbar-section
        .off-canvas-toggle.btn.btn-link.btn-action(@click='toggleSidebar' test='App.vue:sidebar-toggle')
          .icon.icon-menu
    .off-canvas-sidebar(:class='{active: isSidebarActive}')
      .panel.borderless
        .panel-header.text-center
          .panel-title.pb-2
            a(href="/")
              img#logo(src='static/img/favicon.png')
              | Nonprofiters
          .panel-nav.pt-2
            button.btn.btn-primary(@click='toggleLogin') Sign In
        .panel-body
    .off-canvas-overlay(@click='toggleSidebar' test='App.vue:sidebar-overlay')
    main.off-canvas-content
      router-view

    //- Modals
    modal-login(:isLoginModalActive='isLoginModalActive' v-on:toggleLogin='toggleLogin')
</template>



<!--#########################################################################-->
<!--############################# JavaScript ################################-->
<!--#########################################################################-->
<script>
  import ModalLogin from '@/components/modal/Login'

  export default {
    name: 'app',

    components: {
      ModalLogin
    },

    computed: {
      isSidebarActive () {
        return this.$store.state.isMainSidebarActive
      },
      isLoginModalActive () {
        return this.$store.state.isLoginModalActive
      }
    },

    methods: {
      toggleSidebar () {
        this.$store.commit('toggleMainSidebar')
      },
      toggleLogin () {
        this.$store.commit('toggleLoginModal')
      }
    }
  }
</script>



<!--#########################################################################-->
<!--############################### SASS ####################################-->
<!--#########################################################################-->
<style lang="sass">
  @import "assets/sass/main"

  #logo
    vertical-align: middle
    margin-right: 10px
    width: 32px
    position: relative
    top: 0px
</style>
