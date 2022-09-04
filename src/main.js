
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Pagination from "@/components/pagination.vue";
// 全局组件挂载
Vue.component('Pagination', Pagination)
// loading效果
Vue.prototype.$preloader = new $.materialPreloader({
  position: "top",
  height: "5px",
  col_1: "#159756",
  col_2: "#da4733",
  col_3: "#3b78e7",
  col_4: "#fdba2c",
  fadeIn: 200,
  fadeOut: 200,
});
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default Vue