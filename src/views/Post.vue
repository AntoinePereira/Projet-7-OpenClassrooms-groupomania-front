<template>
	<div class="wrapper">
		<div class="post">
			<h1>{{ post.post_title }}</h1>
			<h3>{{ post.post }}</h3>
			<p>Auteur : {{user.prenom}} {{ user.nom }}	</p>
			<p>{{ post.date | formatDate }}</p>
			<button v-if="post.user_id === newComment.userId" @click="deletePost(post.id)">SUPPRIMER</button>
		</div>
		<div class="comments">
			<div class="commentaire" v-for="comment in comments" :key="comment.id">
				<p>{{ comment.comment }}</p>
				<span>auteur: {{comment.prenom}} {{comment.nom}} {{ comment.date | formatDate }}
				<button v-if="comment.user_id === newComment.userId" @click="deleteComment(comment.id)">SUPPRIMER</button></span>
			</div>
		</div>
		<div class="newComment">
			<textarea id="comment" placeholder="Comment..." v-model="newComment.comment"></textarea>
			<button @click="postComment">AJOUTER UN COMMENTAIRE</button>
		</div>
	</div>
</template>


<script>
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
			comments: [],
			newComment:{
				userId: this.$store.state.auth.user.userId,
				comment:"",
			}
		}
	},
	async created() {
		let response =  await axios.get(`http://localhost:3000/api/posts/` + this.$route.params.id);
		this.post = response.data[0];
		this.getUser();
		this.getComments();
	},
	methods: {
		getUser() {
			axios.get(`http://localhost:3000/api/users/` + this.post.user_id)
			.then(res => {
				this.user = res.data[0];
			})
			.catch(err => {console.log(err)});
		},
		getComments() {
			axios.get(`http://localhost:3000/api/comments/` + this.post.id)
			.then(res => {
				this.comments = res.data;
				console.log(res.data);
			})
			.catch(err => {console.log(err)});
		},
		postComment(e) {
			let payload = {
				postId : this.post.id,
				userId: this.newComment.userId,
				comment: this.newComment.comment
			}
			axios.post("http://localhost:3000/api/comments", payload)
			.then((result) => {
				console.log(result)
				this.getComments();
				alert('Commentaire created!');
			})
			e.preventDefault();
		},
		deleteComment(commentId)	{
			axios.delete(`http://localhost:3000/api/comments/` + commentId)
			.then(res => {
				console.log(res.data);
				alert('Commentaire supprimé!');
				this.getComments();
			})
			.catch(err => {console.log(err)});
		},
		deletePost(postId)	{
			axios.delete(`http://localhost:3000/api/posts/` + postId)
			.then(res => {
				console.log(res.data);
				alert('Post supprimé!');
				this.$router.push("/");
			})
			.catch(err => {console.log(err)});
		},
	}
}
</script>


<style scoped lang="scss">
@import '@/assets/main.scss';

.wrapper{
	border: black solid 0.1em;
	border-radius: 1em;
	box-shadow: 0.5em 0.5em 0.5em $color-secondary;
	margin: 5vw;
	overflow: hidden;
	.post{
		margin: 1.5em;
		padding: 1em;
		h3{
			overflow: hidden;
		}
		p{
			font-style: italic;
		}
		button{
			margin-bottom: 1em;
			@include redButton;
		}
	}
	.comments{
		background-color: white;
		border: $color-secondary solid 1em;
		.commentaire{
			border-bottom: $color-secondary solid 1em;
			padding-bottom: 1em;
			p{
				font-size: 1.2em;
			}
			span{
				font-style: italic;
				text-decoration: underline;
				margin-bottom: 2em;
			}
			button{
				margin-left: 3em;
				@include redButton;
			}
		} 
	}
	.newComment{
		background-color: $color-primary;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 1em;
		#comment{
			margin-top: 1em;
			width: 60vw;
			height: 20vh;
		}
		button{
			@include blueButton;
			margin-top: 1em;
		}
	}
}
</style>
