import Vue from 'vue'
// 配置路由相关的信息，导入对象
// npm install --save vue-router
import VueRouter from 'vue-router';

// 在 vue 脚手架中安装 VueRouter 插件
Vue.use(VueRouter);

// 相关组件
//路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
const wel = () => import("../view/wel.vue");
const test = () => import("../view/test.vue");
const end = () => import("../view/end.vue");

// 在vue-router在3.1.0版本之后，push和replace方法会返回一个promise对象，如果跳转到相同的路由，就报promise uncaught异常，此方法相当于是重写原型上的push方法，解决相同路径跳转报错
// 使用 push 或者 replace 的时候，需要使用 catch 来处理异常，统一处理错误信息
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
}

// import menu from './menu';
let routes = [{
	path: "/",
	redirect: "/wel"
},{
	path: "/wel",
	component: wel,
	name: "wel",
	meta: {
		title: "开始页面"
	}
},{
	path: "/test",
	component: test,
	name: "test",
	meta: {
		title: "测试页面"
	}
},{
	path: "/end",
	component: end,
	name: "end",
	meta: {
		title: "结算页面"
	}
}]

// let vue18n = new Vue({i18n})

// 递归查path
// function mark(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].path) {
// 			arr[i].component = () => import("../view" + arr[i].path + ".vue");
// 			arr[i].meta = {};
// 			arr[i].meta.title = vue18n.$t("route." + arr[i].name);
// 			routes.push(arr[i]);
// 		} else {
// 			mark(arr[i].children)
// 		}
// 	}
// }

// function copyArr(arr, key='') {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (key) {
// 			arr[i].key = key + `-${i+1}`
// 		} else {
// 			arr[i].key = `${i+1}`
// 		}
// 		if (arr[i].children) {
// 			copyArr(arr[i].children, arr[i].key);
// 		}
// 	}
// 	return arr;
// }

// copyArr(menu);

// mark(menu)
// console.log(routes)

// 创建 VueRouter 对象
const router = new VueRouter({
	// 配置路由和组件之间的应用关系
	routes: routes,
	// 路由地址的默认格式为 hash，这里设成 history，就会和以前的网页格式一样
  // 如果你不喜欢hash这种#样式.可以使用history模式.这种模式利用了HTML5 History新增的pushState()和replaceState()方法. 除了之前的back,forward,go方法,这两个新方法可以应用在浏览器历史记录的增加替换功能上.使用History模式,通过历史记录修改url,但它不会立即向后端发送请求. 注意点: 虽然History模式可以丢掉不美观的#,也可以正常的前进后退,但是刷新f5后,此时浏览器就会访问服务器,在没有后台支持的情况下,此时就会得到一个404!官方文档给出的描述是:"不过这种模式要玩好,还需要后台配置支持.因为我们的应用是单个客户端应用,如果后台没有正确的配置,当用户直接访问时,就会返回404.所以呢,你要在服务端增加一个覆盖所有情况的的候选资源;如果url匹配不到任何静态资源,则应该返回同一个index.html页面."
	mode: "history",
	
	// 会每个都绑定上，如需单个绑定，可以在具体的 router-link 上绑定 active-class
	// linkActiveClass: "red"
});


// 全局导航守卫（适用于页面多，重复性高的一些操作），也可以针对某个路由单独配置一个守卫
// beforeEach 前置守卫，跳转前比较，比 created 还要早
router.beforeEach((to, from, next) => {
	// to: Route: 即将要进入的目标 路由对象
	// from: Route: 当前导航正要离开的路由(from ... to)
	// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	document.title = to.matched[0].meta.title;
	// console.log(from, to);
	// 前置钩子最后要写上 next();
	next();
});

export default router;