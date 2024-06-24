import Vue from 'vue'
// vue 和 js 的后缀名可以省略
import App from './App.vue'

Vue.config.productionTip = false

// element ui
// 需运行 npm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 在 vue 脚手架中安装 ELementUI 插件
Vue.use(ElementUI);

import router from "./router";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
