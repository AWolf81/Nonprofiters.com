<template lang="pug">
  .modal(:class='{active: isAddResourceModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Add Resource
      .modal-body
        .content.form-group
      .modal-footer
        button.btn.btn-primary(:class='{loading: isLoading}') Add Resource
</template>





<script>
  import {mapState} from 'vuex'

  export default {
    name: 'modal-add-resource',

    data () {
      return {
        isLoading: false
      }
    },

    computed: mapState([
      'isAddResourceModalActive'
    ]),

    methods: {
      closeModal () {
        this.$store.commit('toggleAddResourceModal')
      }
    }
  }
</script>
