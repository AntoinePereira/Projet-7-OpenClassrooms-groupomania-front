<template>
	<div class="createPost">
		<h1>Postez postez!</h1>
		<div>
			<label for="titre">Titre</label>
			<input type="text" id="titre" v-model="post.title">
		</div>
		<div>
			<label for="post">Post</label>
			<input type="text" id="post" v-model="post.post">
		</div>
		<div>
			<label for="userId">userId</label>
			<input type="text" id="userId" v-model="post.userId">
		</div>
		<button @click="createPost">PUBLIER</button>
		---TEST---->{{ post.title }}
		{{ post.post }}
		{{ post.userId }}
	</div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'


export default {
	name: 'CreatePost',
	data() {
		return {
			post: {
				title: null,
				post: null,
				userId: null,
			}
		}
	},
	components: {
		
	},
	methods: {
		createPost(e) {
			axios.post("http://localhost:3000/api/posts", this.post)
			.then((result) => {
				console.log(result)
			})
			e.preventDefault();
		}
	} 
}
</script>
