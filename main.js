import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
// filer
import * as filters from "./filter/index.js"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
const app = new Vue({
	...App
})
app.$mount()
