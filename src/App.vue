<template>
	<div id="app">
		<header>
			<div id="nav">
				<div class="routes">
					<router-link to="/">Home |</router-link>
					<router-link v-if="!isLoggedIn" to="/auth"> Signup/Login</router-link>
					<router-link v-if="isLoggedIn" to="/createPost"> Post&nbsp;	something |</router-link> 
					<router-link v-if="isLoggedIn" to="/users"> Users</router-link>
				</div>
				<div class="logo">
					<img alt="Groupo logo" src="./assets/logo.png">
				</div> 
			</div>
			<div id="userStatus" v-if="isLoggedIn">
				<userStatus></userStatus>
				<button @click="logout">Logout</button>
			</div>
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
@import '@/assets/main.scss';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $color-secondary;
	header{
		border: $color-primary solid 1px;
		box-shadow: 0 5px 10px $color-secondary;
		padding-bottom: 0.5em;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 3vh;
		#nav{
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			text-align:left;
			padding-top: 0.6em;
			margin-left: 0.5em;
			.routes{
				margin-left: 3vw;
				a {
					font-weight: bold;
					color: black;
					&.router-link-exact-active {
						color: $color-primary;
					}
				}
			}
			.logo{
				margin-left: 3vw;
				img{
					padding-top: 1em;
					max-width: 40vw;
				}
			}
		}
		#userStatus{
			margin-right: 0.5em;
			padding: 0.1em;
			button {
				@include redButton;
			}
		}
	}
}
</style>
