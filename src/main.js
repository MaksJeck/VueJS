import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/ModalWindow'
import context from './plugins/ContextMenu'
import vuetify from './plugins/vuetify'
// import chart from 'chart.js'


Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)
// Vue.use(chart)

new Vue({
  // chart,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
