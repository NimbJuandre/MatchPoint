import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
    color: "#29a6ff",
    failedColor: "#874b4b",
    thickness: "5px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 300,
    },
    autoRevert: true,
    location: "top",
    inverse: false,
};
const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueProgressBar, options);
app.use(vuetify);

app.mount('#app');