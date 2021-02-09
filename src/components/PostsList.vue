<template>
	<div class = 'postsList'>
		<h1>Wall</h1>
		<div class="postWrapper">
			<div class="onePost" v-for="post in posts" :key="post.id">
				<router-link :to="`/post/${post.id}`" :disabled="!isLoggedIn" :event="isLoggedIn ? 'click' : ''">
					<h4>Publié par {{post.prenom}} {{post.nom}} - {{ post.date | formatDate }}</h4>
					<h1>{{ post.post_title }}</h1>
					<p>{{ post.post }}</p>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script >
	import { mapState } from "vuex"
	export default {
		computed: {
			isLoggedIn() {
				return this.$store.getters['auth/isLoggedIn'];
			},
			...mapState('posts', ['posts'])
		},
		mounted() {
			this.$store.dispatch('posts/loadPosts')
		}
	}
</script>



<style scoped lang="scss">

.postsList{
    border: black solid 0.1em;
    border-radius: 1em;
    box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
}
.onePost{
	padding: 2em;
	margin: 1em;
    border: red solid 0.1em;
    border-radius: 1em;
    box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
}
.postWrapper{
	display: flex;
	flex-direction: column-reverse;

}
</style>