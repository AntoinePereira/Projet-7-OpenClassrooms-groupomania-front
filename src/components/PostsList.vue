<template>
	<div class = 'postsList'>
		<div class="onePost" v-for="post in posts" :key="post.id">
			<router-link :to="`/post/${post.id}`" :disabled="!isLoggedIn" :event="isLoggedIn ? 'click' : ''">
				<div class='post'>
					<h2>{{ post.post_title }}</h2>
					<p>{{ post.post }}</p>
				</div>
				<div class="auteur">
					<p>-- Publié par {{post.prenom}} {{post.nom}} - {{ post.date | formatDate }} --</p>
				</div>
			</router-link>
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
	display: flex;
	flex-direction: column-reverse;
	border: black solid 0.1em;
	border-radius: 1em;
	box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
}
.onePost{
	margin: 1em;
	border: black solid 0.1em;
	border-radius: 1em;
	overflow: hidden;
	box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
	a{
		text-decoration: none;
		color: black;
		}
	.auteur{
		height: 50%;
		text-align: right;
		background-color: black;
		color: white;
		p{
			margin-bottom: 0px;
			padding: 0.5em;
			padding-right: 2em;
		}
	}
	.post{
		text-align: left;
		padding-left: 1em;
		padding-right: 1em;
		height: 20vh;
		text-overflow: ellipsis;
	}
}

</style>
	