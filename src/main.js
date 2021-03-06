import Vue from 'vue'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'

Vue.use(VueCookie)
Vue.use(vueAxios,axios)
Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
Vue.prototype.$message = Message;

const mock = false
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

axios.interceptors.response.use(function(response){
  let res = response.data
  //let path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    // if (path != '#/index') {
    //   window.location.href = '/#/login'
    //   return Promise.reject(res)
    // }
  } else {
    this.$message.warning(res.msg)
    return Promise.reject(res)
  }
},(error)=>{
  let res = error.response
  this.$message.error(res.data.message)
  return Promise.reject(res)
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
