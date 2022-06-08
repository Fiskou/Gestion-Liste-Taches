import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from 'pinia'
import './assets/css/main.css'

library.add(fas)

createApp(App)
    .use(createPinia())
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
