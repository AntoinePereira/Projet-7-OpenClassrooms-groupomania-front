import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import posts from './modules/posts'

Vue.use(Vuex, axios)

export default new Vuex.Store({
	modules: {
		posts
	}
})



////to handle state
//const state = {
//users: []
//}
//
////to handle state
//const getters = {
//allUsers: (state) => state.users
//}
//
////to handle actions
//const actions = {
//getUsers({ commit }) {
//axios.get('https://jsonplaceholder.typicode.com/users')
//.then(response => {
//commit('SET_USERS', response.data)
//})
//}
//}
//
////to handle mutations
//const mutations = {
//SET_USERS(state, users) {
//state.users = users
//}
//}
//
//export store module
//export default new Vuex.Store({
//state,
//getters,
//actions,
//mutations
//})