import Vue from 'vue'
import App from './App'
import store from '@/store'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env:'fu1252'
})

const app = new Vue({
  store,
  App
})
app.$mount()
