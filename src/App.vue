<template>
	<div id="app">
		<header>
			<div id="navbar">
				<div id="nav">
					<router-link to="/">Home |</router-link>
					<router-link v-if="!isLoggedIn" to="/auth"> Signup/Login</router-link>
					<router-link v-if="isLoggedIn" to="/createPost"> Post something |</router-link> 
					<router-link v-if="isLoggedIn" to="/users"> Users</router-link> 
				</div>
				<div id="userStatus" v-if="isLoggedIn">
					<userStatus></userStatus>
					<button @click="logout">Logout</button>
				</div>
			</div>
			<img alt="Groupo logo" src="./assets/logo.png">
		</header>
		<main>
			<router-view/>
		</main>
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
	border: blue solid 2px;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	header{
		border: green solid 2px;
		#navbar {
			width: 100%;
			border: red solid 2px;
			display: flex;
			justify-content: space-between;
			padding-top: 1em;
			#nav{
				margin-left: 1em;
				a {
					font-weight: bold;
					color: black;
					&.router-link-exact-active {
						color: #D1515A;
					}
				}
			}
			#userStatus{
				padding: 0.5em;
				margin-right: 1em;
				background-color: #f2f2f2;
				border: black solid 0.1em;
				border-radius: 0.5em;
				box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
			}
		}
		img{
			max-width: 40vw;
		}
	}
}
</style>
