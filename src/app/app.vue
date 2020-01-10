<template>
  <div>
    <h1>Github info app</h1>
    <github-input></github-input>
    <github-output></github-output>
  </div>
</template>

<script>
import GithubInput from '../githubInput/GithubInput.vue'
import GithubOuput from '../githubOutput/GithubOutput.vue'

export default {
  name: 'App',
  components: {
    'github-input': GithubInput,
    'github-output': GithubOuput
  },
  data() {
    return {}
  }
}
</script>