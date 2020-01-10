<template>
  <div>
    <p v-if="currentUsername == null">
      Enter a username above to see their Github data
    </p>
    <p v-else>
      Bellow are the results for {{ currentUsername }}
      <github-user-data :data="githubData[currentUsername]"></github-user-data>
    </p>
  </div>
</template>

<script>
import bus from '../bus'
import Vue from 'vue'
import GithubUserData from '../githubUserData/GithubUserData.vue'

export default {
  name: 'GithubOutput',
  components: {
    'github-user-data': GithubUserData
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  },
  created() {
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name
      this.fetchGithubData(name)
    },
    fetchGithubData(name) {
      if (this.githubData.hasOwnProperty(name)) return

      const url = `https://api.github.com/users/${name}`
      fetch(url)
        .then(r => r.json())
        .then(data => {
          Vue.set(this.githubData, name, data)
        })
    }
  }
}
</script>