<template>
  <div class="home">
    <PostsList></PostsList>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'

export default {
  name: 'Home',
  components: {
     PostsList
  }
}
</script>


<style scoped lang="scss">

.home{
  margin: 1em;
}
</style>