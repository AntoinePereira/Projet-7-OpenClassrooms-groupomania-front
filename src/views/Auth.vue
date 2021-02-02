<template>
  <div class="auth">
    <signup></signup>
    <login></login>
  </div>
</template>

<script>
// @ is an alias to /src
import signup from '@/components/signup.vue'
import login from '@/components/login.vue'


export default {
  name: 'Home',
  components: {
    signup, login, 
  }
}
</script>

<style scoped lang="scss">
div{
  margin: 1em;
}

</style>