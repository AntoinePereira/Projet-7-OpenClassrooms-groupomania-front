import axios from 'axios'

const posts= {
	namespaced: true,
	state: {
		posts: []
	},
	actions: {
		loadPosts({commit}){
			axios
				.get('http://localhost:3000/api/posts')
				.then(res => {
					console.log(res.data)
					commit('SET_POSTS', res.data)
				})
				.catch(error => {
					console.log(error);
				})
		}
	},
	mutations: {
		SET_POSTS (state, data) {
			state.posts = data
		}
	}
}

export default posts