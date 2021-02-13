import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTyperPlugin from 'vue-typer'
import VueNumerals from 'vue-numeral-filter';
import VueFeather from 'vue-feather';
import Trend from "vuetrend"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// locales.locale("en-us")
// numeral.locale('pt-br');

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTyperPlugin)
Vue.use(VueNumerals, {locale: 'en'});
Vue.use(Trend)

Vue.component(VueFeather.name, VueFeather);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
