<template>
	<div class = 'userStatus'>
		<span>{{ user.prenom }} {{ user.nom }}</span>
	</div>
</template>


<script >
	import { mapState } from "vuex"

	export default {
		name: 'userStatus',
		computed: {
			...mapState('auth', ['user'])
		},
	}
</script>


<style scoped lang="scss">
@import '@/assets/main.scss';

.userStatus{	
	font-weight: bold;
	padding: 0.5em;
	border-radius: 0.5em;
	box-shadow: 0 3px 10px $color-secondary;
	background-color: $color-secondary;
	color: white;
	margin-bottom: 0.5em;
}
</style>