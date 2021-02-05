<template>
  <div class="oneUser">
	<img alt="Vue logo" src="../assets/logo.png">
	<h1>USER PROFILE</h1>
	<!--<h2>{{ user.prenom }} {{ user.nom }}</h2>
	<h2>Userd id:{{ user.id }}</h2>
	<h2>Email:{{ user.email }}</h2>
	<h2>Admin: {{ user.isAdmin }}</h2>-->
	
 
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
	name: 'oneUser',
	data() {
		return {
			user: {
                nom: null,
                prenom: null,
                id: null,
                email: null,
                isAdmin: null,
            }
		};
	},
	async mounted() {
		let response = await axios.get('http://localhost:3000/api/users/23');
		console.log('1' + response);
		this.user = response.data.user;
		console.log('2' + this.user)
		}
}
</script>

<style scoped lang="scss">


</style>

