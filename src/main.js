import { createApp } from "vue";
import App from './App.vue'
import router from "./router";
import store from "./store";
import Clipboard from "v-clipboard3";

const a = createApp(App)
    a.use(router)
    a.use(store)
    a.use(Clipboard)
    a.mount('#app');