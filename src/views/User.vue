<template>
	<div>
		<div class="wrapper">
			<div class="user">
				<h1>{{ user.prenom }} {{ user.nom }}</h1>
				<h2>User id:{{ user.id }}</h2>
				<h2>Email: {{ user.email }}</h2>
				<h2 v-if="user.isAdmin  === 1">Admin</h2>
			</div>
		</div>
		<button  v-if="(this.$store.state.auth.user.isAdmin === 1) || (this.$store.state.auth.user.userId === this.user.id)" @click="deleteUser(user.id)">SUPPRIMER UTILISATEUR</button>
	</div>
</template>


<script>
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
		deleteUser(userId)	{
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
@import '@/assets/main.scss';

.wrapper{
	@include wrapper;
	margin: 10vw;
	margin-bottom: 1em;
	.user{
		@include card;
		margin: 3vw;
		width:80%;
	}
}
button{
	@include redButton;
	filter: brightness(95%);
	font-style: bold;
}
</style>
