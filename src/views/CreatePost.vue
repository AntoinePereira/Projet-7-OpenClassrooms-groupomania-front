<template>
	<div class="createPost">
		<h1>Postez postez!</h1>
		<div class="postInputDiv">
			<input type="text" id="titre" placeholder="Titre..." v-model="post.title">
		</div>
		<div class="postInputDiv">
			<textarea id="post" placeholder="Post..." v-model="post.post"></textarea>
		</div>
		<button @click="createPost">PUBLIER</button>
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
				userId: this.$store.state.auth.user.userId,
			}
		}
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

<style lang="scss">

.postInputDiv{
	margin: 1em;
}
#titre{
	width: 60vw;
}
#post{
	width: 60vw;
	height: 50vh;
}

</style>
