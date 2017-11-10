<!--#########################################################################
####################### Handles the login modal
#########################################################################-->
<template lang="pug">
  .modal(:class='{active: isLoginModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Sign In / Register
      .modal-body
        .content
          p Thanks for taking the first steps towards becoming a <strong>Nonprofiter</strong>! We have a <a href="https://trello.com/b/Jopi5Zxg/development">ton of features</a> lined up for both our users and volunteers.
          blockquote.warning Please note that we're still in the early stages of development; there's not much you'll be able to do right now.
      .modal-footer
        button.btn.btn-primary Twitter Sign In
</template>



<!--#########################################################################-->
<!--############################# JavaScript ################################-->
<!--#########################################################################-->
<script>
  export default {
    name: 'modal-login',

    props: ['isLoginModalActive'],

    methods: {
      closeModal () {
        this.$emit('toggleLogin')
      }
    }
  }
</script>



<!--#########################################################################-->
<!--############################### SASS ####################################-->
<!--#########################################################################-->
<style lang="sass">
</style>
