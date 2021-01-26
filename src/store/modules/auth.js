import axios from 'axios'

const auth= {
	namespaced: true,
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: {}
	},
	actions: {
		login({commit}, user) {
			axios
				.post('http://localhost:3000/api/auth/login', user)
				.then(res => {
					let token = res.data.token
					let user = res.data.user
					localStorage.setItem('token', token)
					axios.defaults.headers.common['Authorization'] = token
					commit('AUTH_SUCCESS', token, user)
					console.log(user);
				})
				.catch(error => {
					commit('AUTH_ERROR')
					localStorage.removeItem('token')
					console.log(error);
				})
		}
	},
	mutations: {
		auth_request(state) {
            state.status = 'loading'
        },
        AUTH_SUCCESS(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        AUTH_ERROR(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
	},
}

export default auth

