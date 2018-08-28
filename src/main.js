import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
new Vue({
  // data we will use comes from the store which we imported
  store: store,
  el: '#app',
  render: h => h(App)
})
