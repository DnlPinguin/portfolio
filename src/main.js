import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from '@/router/index'
import '@fortawesome/fontawesome-free/css/all.css'
import '@/assets/css/fonts.css';


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.mount('#app')