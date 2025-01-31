import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Chart, registerables } from "chart.js";



Chart.register(...registerables)



createApp(App).use(store).use(router).mount('#app')


