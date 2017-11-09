<template lang="pug">
  #app.off-canvas
    header.navbar
      .navbar-section
        .off-canvas-toggle.btn.btn-link.btn-action(@click='toggleSidebar' test='App.vue:sidebar-toggle')
          .icon.icon-menu
    .off-canvas-sidebar(:class='{active: isSidebarActive}')
      .panel.borderless
        .panel-header
          .panel-title
            a(href="/")
              img#logo(src='static/img/favicon.png')
              | Nonprofiters
        .panel-body
    .off-canvas-overlay(@click='toggleSidebar' test='App.vue:sidebar-overlay')
    main.off-canvas-content
      router-view
</template>



<!--#########################################################################-->
<!--############################# JavaScript ################################-->
<!--#########################################################################-->
<script>
  export default {
    name: 'app',

    data () {
      return {
        isSidebarActive: false
      }
    },

    methods: {
      toggleSidebar () {
        this.isSidebarActive = !this.isSidebarActive
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
