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
        button.btn.btn-primary(@click='twitterLogin' :class='{loading: isLoading}') Twitter Sign In
</template>



<!--#########################################################################-->
<!--############################# JavaScript ################################-->
<!--#########################################################################-->
<script>
  import firebase from '@/service/firebase'
  import {mapState} from 'vuex'

  export default {
    name: 'modal-login',

    data () {
      return {
        isLoading: false
      }
    },

    computed: mapState([
      'isLoginModalActive'
    ]),

    methods: {
      closeModal () {
        this.$store.commit('toggleLoginModal')
      },

      twitterLogin () {
        let provider = new firebase.auth.TwitterAuthProvider()
        this.isLoading = true

        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            console.log(result)
          })
          // @TODO Let's toast the error message
          .catch((err) => {
            console.error(err)
          })
          .then(() => {
            this.isLoading = false
            this.$emit('toggleLogin')
          })
      }
    }
  }
</script>



<!--#########################################################################-->
<!--############################### SASS ####################################-->
<!--#########################################################################-->
<style lang="sass">
</style>
