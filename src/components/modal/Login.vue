<!--#########################################################################
####################### Handles the login modal
#########################################################################-->
<template lang="pug">
  .modal(:class='{active: isLoginModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Login/Register
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
