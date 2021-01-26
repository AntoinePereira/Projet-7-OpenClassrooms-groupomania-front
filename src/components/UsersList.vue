<template>
	<div class = 'usersList'>
		<h1>Users</h1>
		<div class="oneUser" v-for="user in users" :key="user.id">
			<router-link to="/oneUser">
				<h1>{{ user.prenom }} {{ user.nom }}</h1>
				<h2>Userd id:{{ user.id }}</h2>
				<h2>Email:{{ user.email }}</h2>
				<h2>Admin: {{ user.isAdmin }}</h2>
			</router-link>
		</div>
	</div>
</template>



<script >
	import axios from 'axios'
	import { mapState } from "vuex"
	export default {
		computed: {
			...mapState('users', ['users'])
		},
		mounted() {
			this.$store.dispatch('users/loadUsers')
		},
	}
</script>



<style scoped lang="scss">
	.usersList{
		border: black solid 0.1em;
		border-radius: 1em;
		box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
	}
	.oneUser{
		margin: 1em;
		border: red solid 0.1em;
		border-radius: 1em;
		box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
	}
</style>