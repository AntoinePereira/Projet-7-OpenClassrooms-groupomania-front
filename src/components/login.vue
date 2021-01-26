<template>
	<div class="login">
		<form>
			<h1>Login</h1>
			<div>
				<label for="email">email</label>
				<input type="text" id="email" v-model="user.email" required>
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" id="password" v-model="user.password" required>
			</div>
			<button @click="login">LOGIN</button>
		</form>
	</div>
</template>


<script>
export default {
	name: 'login',
	data() {
		return {
			user: {
				email: null,
				password: null,
			}
		}
	},
	components: {
	},
	methods: {
		login() {
			let email = this.user.email;
			let password = this.user.password;
			this.$store
				.dispatch("auth/login", { email, password })
				.then(() => this.$router.push("/about"))
				.catch(err => console.log(err));
		}
	} 
}
</script>

<style scoped lang="scss">
	form{
		margin: 2em;
	}
	.login{
		border: black solid 0.1em;
		border-radius: 1em;
		box-shadow: 0.5em 0.5em 0.5em #eaeaea; 
	}
</style>