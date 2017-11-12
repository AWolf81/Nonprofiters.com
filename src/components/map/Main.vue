<template lang="pug">
  gmap-map(
    :zoom='15'
    :center='{lat:45.5231, lng:-122.6765}'
    :options='settings')
</template>





<script>
  import Vue from 'vue'
  import * as VueGoogleMaps from 'vue2-google-maps'
  import styles from './themes/ultra-light.json'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD3BUYczjmcnPnJlFCtOKkvH4Y7f_9168Q',
      libraries: 'places'
    }
  })

  export default {
    name: 'map-main',

    data () {
      return {
        settings: {
          styles
        }
      }
    }
  }
</script>





<style lang="sass">
  .vue-map-container
    width: 100%
    height: 100%
</style>
