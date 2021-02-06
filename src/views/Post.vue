<template>
	<div class="Post">
		<img alt="Vue logo" src="../assets/logo.png">
		<h1>One post</h1>
		<h2>{{ post.post_title }}</h2>
		<h2>{{ post.post }}</h2>
		<h2>Auteur : {{user.prenom}} {{ user.nom }}</h2>
		<h2>{{ comments }}</h2>
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


export default {
	name: 'Post',
	
	data() {
		return {
			post: {
			},
			user:{
				nom: null,
				prenom: null
			},
			comments: []
		}
	},
	async created() {
		let response =  await axios.get(`http://localhost:3000/api/posts/` + this.$route.params.id);
		this.post = response.data[0];
		this.getUser()
		
	},
	methods: {
		getUser: function () {
			axios.get(`http://localhost:3000/api/users/` + this.post.user_id)
			.then(res => {
				this.user = res.data[0];
			})
			.catch(err => {console.log(err)});
		},
		//getComments: function (){
		//	axios.get(`http://localhost:3000/api/comments/` + this.post.id)
		//	console.log(this.post.id)
		//	.then(res => {
		//		this.comments = res.data[0];
		//	})
		//	.catch(err => {console.log(err)});
		//}	  
	}
}
</script>


<style scoped lang="scss">


</style>
//let user = await axios.get(`http://localhost:3000/api/users/` + ${post.user_id});