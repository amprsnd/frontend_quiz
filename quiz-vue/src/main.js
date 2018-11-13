import Vue from 'vue'
import App from './App.vue'
import VueScroll from 'vuescroll/dist/vuescroll'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

import 'vuescroll/dist/vuescroll.css'

Vue.use(VueMaterial)
Vue.use(VueScroll)

Vue.config.productionTip = false
// Vue.config.devtools = true
// Vue.config.performance = true

new Vue({
  render: h => h(App)
}).$mount('#app')
