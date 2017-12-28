import Vue from 'Vue';
import VueRouter from 'vue-router';
import Menulist from './components/Menulist.vue';

// 定义路由组件
import NewsComponent from './components/NewsComponent.vue';
import TopicsComponent from './components/TopicsComponent.vue';
import MessagesComponent from './components/MessagesComponent.vue';
import ChatComponent from './components/ChatComponent.vue';
import SystemComponent from './components/SystemComponent.vue';

Vue.use(VueRouter);

// 定义路由
const routes = [
	{ path: '/', redirect: '/news' },
	{ path: '/news', component: NewsComponent, meta: { requiresAuth: true } },
	{ path: '/topics', component: TopicsComponent, meta: { requiresAuth: true } },
	{ path: '/messages', component: MessagesComponent, meta: { requiresAuth: true } },
	{ path: '/chat', component: ChatComponent, meta: { requiresAuth: true } },
	{ path: '/system', component: SystemComponent, meta: { requiresAuth: true } }
];

// 创建router实例
const router = new VueRouter({
	routes
});

// 全局导航守卫
router.beforeEach((to,from,next) => {
	// console.log(to,from);
	if(to.meta.requiresAuth){
		console.log('requiresAuth is true!!!');
		// todo 检查登录情况，未登陆的话重定向至登录页

	}
	next();
});

// 创建、挂载根实例
var vm = new Vue({
	el:'#app',
	components:{
		'menu-list':Menulist
	},
	router
});