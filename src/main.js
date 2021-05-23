import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './style/index.css'
import "tailwindcss/tailwind.css"
import animated from 'animate.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, { locale })
    .use(animated)
    .mount('#app')
