<template>
  <div class="users">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <PostsList></PostsList>
  </div>
</template>


<script>
// @ is an alias to /src

import PostsList from '@/components/PostsList.vue'


export default {
  name: 'Users',
  components: {
     PostsList
  }
}
</script>
