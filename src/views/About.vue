<template>
  <div class="about">
    <h1>OOOOPS YOU NEED TO LOGIN FIRST!</h1>
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