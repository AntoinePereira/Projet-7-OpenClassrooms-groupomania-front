<template>
  <div class="auth">
	<signup class="signup"></signup>
	<login class='login'></login>
  </div>
</template>

<script>
// @ is an alias to /src
import signup from '@/components/signup.vue'
import login from '@/components/login.vue'


export default {
  name: 'Home',
  components: {
	signup, login, 
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/main.scss';


.auth{
	margin: 1em;
	@include wrapper;
	.signup{
		margin: 1em;
		min-width: 90%;
		max-width: 95%;
		@include card;
	}
	.login{
		margin: 1em;
		min-width: 90%;
		max-width: 95%;
		@include card;
	}
}
</style>