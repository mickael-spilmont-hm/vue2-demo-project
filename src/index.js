import Vue from 'vue'
import AppComponent from './app/app.vue'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent
  },
  render: (h) => h('app')
})