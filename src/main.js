import { createApp } from 'vue'
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';
import './assets/css/global.less'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMask from 'v-mask'

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

const app = createApp(App);
app.use(router, VueAxios, axios, VueMask);
app.directive('mask', vMaskV3);
app.mount("#app");


// createApp(App).use(router, VueAxios, axios).mount('#app')
