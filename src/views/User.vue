<template>
	<div class="User">
		<img alt="Vue logo" src="../assets/logo.png">
		<h1>USER PROFILE</h1>
		<h2>{{ user.prenom }} {{ user.nom }}</h2>
		<h2>User id:{{ user.id }}</h2>
		<h2>Email:{{ user.email }}</h2>
		<h2 v-if="user.isAdmin  === 1">Admin</h2>
		<button  v-if="this.$store.state.auth.user.isAdmin === 1" @click="deletePost(user.id)">SUPPRIMER UTILISATEUR</button>
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
	name: 'User',
	data() {
		return {
			user: {
				nom: null,
				prenom: null,
				id: null,
				email: null,
				isAdmin: null,
	}
		}
	},
	async created() {
		let response =  await axios.get(`http://localhost:3000/api/users/` + this.$route.params.id);
		this.user = response.data[0];
	},
	methods: {
		deletePost(userId)	{
			axios.delete(`http://localhost:3000/api/users/` + userId)
			.then(res => {
				console.log(res.data);
				alert('Utilisateur supprimé!');
				this.$router.push("/users/");
			})
			.catch(err => {console.log(err)});
		}
	}
}

</script>


<style scoped lang="scss">
img{
	max-width: 50vw;
	margin: 1.5em;
}

$color-primary: #D1515A;
$color-secondary: #f2f2f2;
$color-accent: #99E2D0;
$color-background: #f6f6f6;


button {
  margin-bottom: 2em;
	margin-top: 1em;
	color: white;
	background-image: linear-gradient( 180deg, $color-secondary 0%, $color-primary 100%);
	padding:1.2em;
	padding-left: 2em;
	padding-right: 2em;
	border-radius: 0.5em;
	border: none;
	box-shadow: 0 0.2em 0.3em grey;
	font-size: 1rem;
	font-weight: bold;
	&:hover{
		filter: brightness(110%);
		box-shadow: 0 0.3em 0.3em 0.3em grey;
	}
}
</style>
