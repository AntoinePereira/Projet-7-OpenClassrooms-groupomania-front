<template>
	<div class="PostParent">
		<img alt="Vue logo" src="../assets/logo.png">
		<div class="Post">
			<h1>{{ post.post_title }}</h1>
			<h2>{{ post.post }}</h2>
			<h4>Auteur : {{user.prenom}} {{ user.nom }}</h4>
			<h4>{{ post.date | formatDate }}</h4>
			<button v-if="post.user_id === newComment.userId" @click="deletePost(post.id)">SUPPRIMER</button>
			<div class="comments">
				<h2>Commentaires:</h2>
				<div class="commentaire" v-for="comment in comments" :key="comment.id">
					<p>{{ comment.comment }}</p>
					<p>auteur: {{comment.prenom}} {{comment.nom}} {{ comment.date | formatDate }}</p>
					<button v-if="comment.user_id === newComment.userId" @click="deleteComment(comment.id)">SUPPRIMER</button>
				</div>
			</div>
			<div class="commentInputDiv">
				<textarea id="comment" placeholder="Comment..." v-model="newComment.comment"></textarea>
			</div>
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
img{
	max-width: 50vw;
	margin: 1.5em;
}
.comments{
	background-color: grey
	;
	border: black solid 0.1em;
    border-radius: 1em;
    box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
}
.commentaire{
	border-bottom: #f2f2f2 solid 0.1em;

}
.Post{
	background-color: #f2f2f2
	;
	border: black solid 0.1em;
    border-radius: 1em;
    box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
}
button{
	margin-bottom: 1em;
}

</style>

//v-if="comment.userId === this.$store.state.auth.user.userId"