<template>
	<div class = 'usersList'>
		<h1>Users</h1>
		<div class="userTag" v-for="user in users" :key="user.id">
			<router-link :to="`/user/${user.id}`">
				<h1>{{ user.prenom }} {{ user.nom }}</h1>
				<h2 v-if="user.isAdmin  === 1">Admin</h2>
			</router-link>
		</div>
	</div>
</template>



<script >
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
	.userTag{
		margin: 1em;
		border: red solid 0.1em;
		border-radius: 1em;
		box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
	}
</style>
