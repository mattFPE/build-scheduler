import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeflex/primeflex.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.mount('#app')
