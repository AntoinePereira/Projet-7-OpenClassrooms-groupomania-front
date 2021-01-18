<template>
	<div class = 'postsList'>
		<div v-for="post in posts" :key="post.id">
			<h1>{{ posts }}</h1>
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



<style scoped>
	
</style>