<template>
  <div class="users">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App Users"/>
   
    <PostsList></PostsList>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import PostsList from '@/components/PostsList.vue'


export default {
  name: 'Users',
  components: {
    HelloWorld, PostsList
  }
}
</script>
