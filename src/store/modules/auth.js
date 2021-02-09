import axios from 'axios'

const auth= {
	namespaced: true,
	state: {
		status: '',
		token: localStorage.getItem('token') || '',
		user: JSON.parse(localStorage.getItem('user')) || {
			userId:'',
			nom:'',
			prenom: ''
		}
	},
	actions: {
		login({commit}, user) {
			commit('AUTH_REQUEST')
			axios
				.post('http://localhost:3000/api/auth/login', user)
				.then(res => {
					let token = res.data.token
					let user =  res.data.user
					localStorage.setItem('token', token)
					localStorage.setItem('user', JSON.stringify(user))
					axios.defaults.headers.common['Authorization'] = "Bearer " + token;
					commit('AUTH_SUCCESS',{token, user})
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
			localStorage.removeItem('user')
			localStorage.removeItem('status')
			delete axios.defaults.headers.common['Authorization']
		}
	},
	mutations: {
		AUTH_REQUEST(state) {
            state.status = 'loading'
        },
        AUTH_SUCCESS(state, payload) {
            state.status = 'success'
            state.token = payload.token
            state.user = payload.user
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

