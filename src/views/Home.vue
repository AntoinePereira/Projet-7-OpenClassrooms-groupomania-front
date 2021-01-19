<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PostsList></PostsList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, PostsList
  }
}
</script>
