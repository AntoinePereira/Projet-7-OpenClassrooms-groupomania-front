<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostsList></PostsList>
  </div>
</template>

<script>
// @ is an alias to /src
import PostsList from '@/components/PostsList.vue'


export default {
  name: 'Home',
  components: {
     PostsList
  }
}
</script>

<style scoped lang="scss">

div{
  margin: 1em;
}
img{
	max-width: 40vw;
	//max-height: 30vh;
}
</style>