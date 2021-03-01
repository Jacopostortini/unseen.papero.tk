import { createApp } from "vue";
import App from './App.vue'
import router from "./router";
import store from "./store";
import Clipboard from "v-clipboard3";
import Toaster from "@meforma/vue-toaster";

createApp(App)
    .use(router)
    .use(store)
    .use(Clipboard)
    .use(Toaster)
    .mount('#app');