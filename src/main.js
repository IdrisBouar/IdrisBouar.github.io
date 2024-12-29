import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create a new Vue instance and mount it to the #app div

createApp(App).use(router).mount('#app')
