import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import posts from './modules/posts'
import users from './modules/users'
import auth from './modules/auth'

Vue.use(Vuex, axios)

export default new Vuex.Store({
	modules: {
		posts, users, auth
	}
})
