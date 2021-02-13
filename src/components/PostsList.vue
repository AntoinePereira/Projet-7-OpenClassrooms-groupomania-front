<template>
	<div class = 'postsList'>
		<div class="onePost" v-for="post in posts" :key="post.id">
			<router-link :to="`/post/${post.id}`" :disabled="!isLoggedIn" :event="isLoggedIn ? 'click' : ''">
				<div class='post'>
					<h2>{{ post.post_title }}</h2>
					<p>{{ post.post }}</p>
				</div>
				<div class="auteur">
					<p>Publié par {{post.prenom}} {{post.nom}}<br>-- {{ post.date | formatDate }} --</p>
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
@import '@/assets/main.scss';


.postsList{
	@include wrapper;
	flex-direction: column-reverse;
}

@mixin card{
	background-color: white;
	border-radius: 1em;
	border: $color-secondary solid 0.1em;
	box-shadow: 0.5em 0.5em 0.5em $color-secondary; 
}
.onePost{
	@include card;
	margin: 1em;
	overflow: hidden;
	width: 95%;
	a{
		text-decoration: none;
		color: $color-secondary;
		}
	.auteur{
		height: 50%;
		text-align: right;
		background-color: $color-secondary;
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
	