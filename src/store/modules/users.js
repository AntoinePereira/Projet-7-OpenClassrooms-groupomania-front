import axios from 'axios'

const users= {
	namespaced: true,
	state: {
		users: []
	},
	actions: {
		loadUsers({commit}){
			axios
				.get('http://localhost:3000/api/users')
				.then(res => {
					commit('SET_USERS', res.data)
				})
				.catch(error => {
					console.log(error);
				})
		}
	},
	mutations: {
		SET_USERS (state, data) {
			state.users = data
		}
	}
}

export default users