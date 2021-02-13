<template>
  <div class="users">
    <UsersList></UsersList>
  </div>
</template>


<script>
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users',
  components: {
    UsersList
  }
}
</script>


<style scoped lang="scss">
.users{
  margin: 1em;
}
</style>