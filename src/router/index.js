import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/modules/auth.js'

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
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
        if (store.getters.isLoggedIn) {
          next()
          return
        }
        next('/about')
      } else {
        next()
      }
    })

export default router

