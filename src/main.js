import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import authController from '@/router/auth_controller'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule'
import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'
// calendar
// eslint-disable-next-line import/order

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'
import '@/libs/vue-mixins'
import '@/libs/vue-lodash'
import '@/libs/vee-validation'
import '@/libs/vue-select'
import '@/libs/sweet-alerts'

// Vue sheduler

Vue.use(SchedulePlugin)
// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

authController.init(router, store)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
