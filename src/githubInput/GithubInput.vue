<template>
  <div>
    <p>github input</p>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="username" placeholder="Enter a Github username here" />
      <button type="submit">Go!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GithubInput',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        
      }
    }
  }
}
</script>