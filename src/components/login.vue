<template>
	<div class="login">
		<div class="topTag">
			<h1>Login</h1>
			<form>
				<div>
					<label for="email">email</label>
					<input type="text" autocomplete="email" id="email" v-model="user.email" required>
				</div>
				<div>
					<label for="password">Password</label>
					<input type="password" autocomplete="current-password" id="password" v-model="user.password" required>
				</div>
			</form>
		</div>
		<button id="loginBtn" type="button" @click="login">LOGIN</button>
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
				.then(() => this.$router.push("/"))
				.catch(err => console.log(err));
		}
	} 
}
</script>


<style scoped lang="scss">
@import '@/assets/main.scss';

.login{
	border: $color-secondary solid 0.1em;
	border-radius: 1em;
	box-shadow: 0.5em 0.5em 0.5em $color-secondary;
	.topTag{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1{
			margin-bottom: 0px;
		}
		form{
			margin: 1em;
			display: flex;
			flex-direction: column;
			align-items: baseline;
			div{
				margin: 0.1em;
				display: flex;
				width: 95%;
				input{
					width: 50%;
					flex: 1;
				}
			}
		}
	}
	#loginBtn{
		@include blueButton;
		margin: 1em;
	} 
}
</style>