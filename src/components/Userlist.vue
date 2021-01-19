<template>
	<div class = 'postsList'>
		<div v-for="user in users" :key="user.id">
			<h1>{{ users }}</h1>
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
		}
	}
</script>



<style scoped>
	
</style>