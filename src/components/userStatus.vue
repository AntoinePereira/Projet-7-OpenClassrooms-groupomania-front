<template>
	<div class = 'userStatus'>
		<span>{{ user.nom }}</span><br/>
		<span>{{ user.prenom }}</span>
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
    
</style>