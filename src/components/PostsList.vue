<template>
	<div class = 'postsList'>
		<h1>Wall</h1>
		<div class="postWrapper">
			<div class="onePost" v-for="post in posts" :key="post.id">
				<router-link :to="`/post/${post.id}`">
					<h4>{{ post.date | formatDate }}</h4>
					<h1>{{ post.post_title }}</h1>
					<h2>{{ post.post }}</h2>
				</router-link>
			</div>
		</div>
	</div>
</template>



<script >
	import { mapState } from "vuex"
	export default {
		computed: {
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