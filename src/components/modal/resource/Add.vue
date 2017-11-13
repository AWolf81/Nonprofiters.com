<template lang="pug">
  .modal(:class='{active: isAddResourceModalActive}')
    .modal-overlay(@click='closeModal')
    .modal-container
      .modal-header
        button.btn.btn-clear.float-right(@click='closeModal')
        .modal-title.h5 Add Resource
      .modal-body
        form.content.form-horizontal
          .form-group
            .col-3
              label.form-label(for='modal/resource/Add:title') Title
            .col-9
              input.form-input(id='modal/resource/Add:title' type='text' placeholder='Resource Title')
          .form-group
            .col-3
              label.form-label(for='modal/resource/Add:address') Address
            .col-9
              input.form-input(id='modal/resource/Add:address' type='text' placeholder='Resource Address')
          .form-group
            .col-12
              label.form-label(for='modal/resource/Add:notes') Notes
              textarea.form-input(id='modal/resource/Add:notes' placeholder='Resource Notes (location details, hours, restrictions, etc)' rows=5)
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
