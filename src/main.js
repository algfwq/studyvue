import { createApp } from 'vue'

import App from './App.vue'
import fuck from './fuck.vue'
import ajax from './ajax.vue'
import style from './style.vue'
import test from  './test.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
createApp(fuck).use(ElementPlus).mount('#fuck')
createApp(ajax).use(ElementPlus).mount("#ajax")
createApp(style).use(ElementPlus).mount("#style")
createApp(test).use(ElementPlus).mount("#test")

app.use(ElementPlus)
app.mount('#app')
