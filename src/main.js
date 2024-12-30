import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Create a new Vue instance and mount it to the #app div

createApp(App).use(store).use(router).mount('#app')
