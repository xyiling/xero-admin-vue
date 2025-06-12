import './assets/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

// 传入一个包含 size 和 zIndex 属性的全局配置对象。 
// size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(createPinia())
app.use(router)

app.mount('#app')
