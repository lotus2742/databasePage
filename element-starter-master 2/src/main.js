import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router"
import App from './App.vue'
import home from './views/home_info.vue'
import add from './views/add_info.vue'
import './assets/icon/iconfont.css'

Vue.use(ElementUI)
Vue.use(VueRouter);

const router = new VueRouter({
	routes:[
		{
			path:"/home",
			component:home,
		},
		{
			path:'/information',
			component:add,
		}
	]
})

new Vue({
	router:router,
  el: '#app',
  render: h => h(App)
})
