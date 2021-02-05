<template>
	<div class="Post">
		<img alt="Vue logo" src="../assets/logo.png">
		<h1>One post</h1>
		<h2>{{ post.post_title }}</h2>
		<h2>{{ post.post }}</h2>
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
				nom: null,
				prenom: null,
				id: null,
				email: null,
				isAdmin: null,
	}
		}
	},
	async created() {
		let response =  await axios.get(`http://localhost:3000/api/posts/` + this.$route.params.id);
		this.post = response.data[0];
	}
}
</script>


<style scoped lang="scss">


</style>
