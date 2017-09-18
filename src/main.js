import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import onecomponent from './component/onecomponent.vue'
import twocomponent from './component/twocomponent.vue'


//import { Button, Select } from 'element-ui'
//Vue.use(Button)
//Vue.use(Select)
//Vue.prototype.$loading = Loading.service
//Vue.prototype.$msgbox = MessageBox
//Vue.prototype.$alert = MessageBox.alert
//Vue.prototype.$confirm = MessageBox.confirm
//Vue.prototype.$prompt = MessageBox.prompt
//Vue.prototype.$notify = Notification
//Vue.prototype.$message = Message


const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent,
      children:[
	      {
	      	path:'/',
	      	component:onecomponent
	      },
	      {
	      	path:'two',
	      	component:twocomponent
	      }
      ]
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
