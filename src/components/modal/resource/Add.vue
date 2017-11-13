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
              input.form-input(id='modal/resource/Add:title' type='text' placeholder='Resource Title' v-model='data.title')
          .form-group
            .col-3
              label.form-label(for='modal/resource/Add:address') Address
            .col-9
              input.form-input(id='modal/resource/Add:address' type='text' placeholder='Resource Address' v-model='data.address')
          .form-group
            .col-3
              label.form-label(for='modal/resource/Add:categories') Categories
            .col-9
              select.form-select(id='modal/resource/Add:categories' v-model='data.categories')
                option(value='restroom') Public Restroom
          .form-group
            .col-12
              label.form-label(for='modal/resource/Add:notes') Notes
              textarea.form-input(id='modal/resource/Add:notes' placeholder='Resource Notes (location details, hours, restrictions, etc)' rows=5 v-model='data.notes')
      .modal-footer
        button.btn.btn-primary(:class='{loading: isLoading}' @click='submit') Add Resource
</template>





<script>
  export default {
    name: 'modal-add-resource',

    data () {
      return {
        isLoading: false,
        data: {
          title: '',
          address: '',
          categories: 'restroom',
          notes: ''
        }
      }
    },

    computed: {
      isAddResourceModalActive () {
        let state = this.$store.state.isAddResourceModalActive

        if (state) {
          this.$nextTick(() => {
            this.$el.querySelector('#modal\\/resource\\/Add\\:title').focus()
          })
        }

        return state
      }
    },

    methods: {
      closeModal () {
        this.$store.commit('toggleAddResourceModal')
      },

      submit () {
        console.log(this.data)
      }
    }
  }
</script>
