import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}, 
	{
		path: '/createPost',
		name: 'CreatePost',
		component: () => import(/* webpackChunkName: "createPost" */ '../views/CreatePost.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/auth',
		name: 'Auth',
		component: () => import(/* webpackChunkName: "createPost" */ '../views/Auth.vue'),
	},
	{
		path: '/users',
		name: 'Users',
		component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
		meta: {
			requiresAuth: true
		} 
	},
	{
		path: '/oneUser',
		name: 'oneUser',
		component: () => import(/* webpackChunkName: "users" */ '../views/oneUser.vue') 
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (store.getters['auth/isLoggedIn']) {
			next()
			return
		}
		next( {path: '/auth'})
	} else {
		next()
	}
})

export default router

