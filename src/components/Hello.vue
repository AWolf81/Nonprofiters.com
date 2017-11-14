<template lang="pug">
  div
    h1.hello Coming Soon!
    p Nonprofiters will be a social platform for social causes, based on my previous project "<a href="https://stemlet-9527e.firebaseapp.com" target="_blank"><strong>Stemlet:</strong></a> The Yellow Pages for those in Need".
    p This is a passion project, as I've experienced homelessness myself. In fact, it's largely what inspired Stemlet, and how I know for certain that this project will leave an impact as well.
    p If you'd like to get involved, you totally can! Whether you're <a href="https://trello.com/b/Jopi5Zxg/development" target="_blank">a developer</a>, artist, or just love nonprofits there's something for anyone of any experience and background to do. Make sure to follow me on <a href="https://twitter.com/heyozramos">Twitter @HeyOzRamos</a> to keep up with the latest happenings behind-the-scenes, or <a href="https://twitter.com/nonprofiters">follow the @Nonprofiters</a> for a tamer, no-nonsense approach.
</template>

<script>
export default {
  name: 'hello',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemCount: 0
    }
  },
  methods: {
    increaseCount () {
      this.itemCount++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
