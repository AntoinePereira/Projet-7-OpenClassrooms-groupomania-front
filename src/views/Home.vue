<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <signup></signup>
    <login></login>
    <PostsList></PostsList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PostsList from '@/components/PostsList.vue'
import signup from '@/components/signup.vue'
import login from '@/components/login.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld, signup, login, PostsList
  }
}
</script>

<style scoped lang="scss">


</style>