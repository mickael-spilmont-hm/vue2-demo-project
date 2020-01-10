<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Enter a Github username here" />
      <button type="submit">Go!</button>
    </form>
  </div>
</template>

<script>
import bus from '../bus'

export default {
  name: 'GithubInput',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit(event) {
      console.log("On Submit !!!")
      if (this.username && this.username !== '') {
        bus.$emit('new-username', this.username)
      }
    }
  }
}
</script>