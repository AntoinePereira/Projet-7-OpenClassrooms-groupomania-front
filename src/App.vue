<template>
	<div id="app">
		<div id="nav">
			<div>
				<router-link to="/">Home</router-link> |
				<router-link to="/createPost">Post something</router-link> |
				<router-link to="/users">Users</router-link> |
				<router-link to="/about">About</router-link>
			</div>
			<div id="userStatus">
				<userStatus></userStatus>
				<button v-if="isLoggedIn" @click="logout">Logout</button>
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import userStatus from '@/components/userStatus.vue'

	export default {
		components: {
			userStatus
		},
		computed: {
			isLoggedIn() {
				return this.$store.getters['auth/isLoggedIn'];
			}
		},
		methods: {
			logout() {
				this.$store.dispatch("auth/logout")
				.then(() => {
					this.$router.push("/");
				});
			}
		}
	};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	display: flex;
	justify-content: space-between;
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
