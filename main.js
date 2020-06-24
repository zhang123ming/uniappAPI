import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import http from "./utils/request.js"


// 引入封装好的request   挂载全局
Vue.prototype.$http=http;

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
