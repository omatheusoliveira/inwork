import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.less'
import router from './router'

createApp(App).use(router).mount('#app')
