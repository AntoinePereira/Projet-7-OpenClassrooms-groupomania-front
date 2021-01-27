<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <signup></signup>
    <login></login>
    <PostsList></PostsList>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue'
import signup from '@/components/signup.vue'
import login from '@/components/login.vue'


export default {
  name: 'Home',
  components: {
    signup, login, PostsList
  }
}
</script>

<style scoped lang="scss">
div{
  margin: 1em;
}

</style>