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
			commit('AUTH_REQUEST')
			axios
				.post('http://localhost:3000/api/auth/login', user)
				.then(res => {
					let token = res.data.token
					let user = res.data.user
					localStorage.setItem('token', token)
					axios.defaults.headers.common['Authorization'] = token
					commit('AUTH_SUCCESS', token, user)
				})
				.catch(error => {
					commit('AUTH_ERROR')
					localStorage.removeItem('token')
					console.log(error);
				})
		},
		logout({ commit }) {
			commit('LOGOUT')
			localStorage.removeItem('token')
			delete axios.defaults.headers.common['Authorization']
		}
	},
	mutations: {
		AUTH_REQUEST(state) {
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
        LOGOUT(state) {
            state.status = ''
            state.token = ''
        },
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
}

export default auth

