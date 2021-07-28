import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import {store} from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/scss/main.scss'
import 'animate.css'
import i18n from './i18n'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueI18n)

// Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
