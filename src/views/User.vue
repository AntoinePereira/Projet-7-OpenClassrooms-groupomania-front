<template>
	<div class="User">
		<img alt="Vue logo" src="../assets/logo.png">
		<h1>USER PROFILE</h1>
		<h2>{{ user.prenom }} {{ user.nom }}</h2>
		<h2>Userd id:{{ user.id }}</h2>
		<h2>Email:{{ user.email }}</h2>
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
	}
}
</script>


<style scoped lang="scss">

</style>
