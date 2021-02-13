import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTyperPlugin from 'vue-typer'
import VueNumerals from 'vue-numeral-filter';
import VueFeather from 'vue-feather';
import Trend from 'vuetrend'

import Index from '@/pages/Index'
import About from '@/pages/About'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTyperPlugin)
Vue.use(VueNumerals, {locale: 'en'});
Vue.use(Trend)

Vue.component(VueFeather.name, VueFeather);

Vue.config.productionTip = false

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            meta: {
                title: "We provide real time US stock market information.",
                description: ""
            },
            component: Index
        },
        {
            path: '/about',
            meta: {
                title: "About StockWatch.me",
                description: ""
            },
            component: About
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = `StockWatch.me | ${to.meta.title}`
    next()
})

Vue.mixin((() => {
    let theme = "light";
    if (localStorage.getItem("theme") !== null)
    {
        theme = localStorage.getItem("theme")
        document.documentElement.setAttribute("data-theme", theme);
    }

    let store = Vue.observable({
        darkMode: theme === "dark"
    })

    return {
        computed: {
            darkMode: {
                get(){
                    return store.darkMode
                },
                set(val){
                    store.darkMode = val
                }
            }
        },
    }
})())

new Vue({
    render: h => h(App),
    data() {
        return {
            appTheme: 'tg'
        }
    },
    router,
}).$mount('#app')
