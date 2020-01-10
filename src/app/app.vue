<template>
  <div>
    <p>Vue.js App</p>
    <github-input></github-input>>
  </div>
</template>

<script>
import GithubInput from '../githubInput/GithubInput.vue'

export default {
  name: 'App',
  components: {
    'github-input': GithubInput
  },
  data() {
    return {}
  }
}
</script>