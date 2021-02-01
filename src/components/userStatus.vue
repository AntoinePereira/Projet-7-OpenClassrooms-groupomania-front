<template>
	<div class = 'userStatus'>
		<h1>test {{ user.prenom }}</h1>
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