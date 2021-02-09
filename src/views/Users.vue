<template>
  <div class="users">
    <img alt="Vue logo" src="../assets/logo.png">
    <UsersList></UsersList>
  </div>
</template>


<script>
// @ is an alias to /src


import UsersList from '@/components/UsersList.vue'


export default {
  name: 'Users',
  components: {
    UsersList
  }
}
</script>

<style scoped lang="scss">
img{
	max-width: 50vw;
	margin: 1.5em;
}
</style>