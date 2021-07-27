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
import 'aos/dist/aos.css';
import AOS from 'aos';

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
  mounted() {
    AOS.init({
        // Global settings:
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out-back', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })
},
}).$mount('#app')
