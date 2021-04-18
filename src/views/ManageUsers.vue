<template>
  <div>
    <ManageUsersSubNav/>
    <router-view/>
  </div>
</template>

<script>

import ManageUsersSubNav from '../components/ManageUsersSubNav'

export default {
  name: 'ManagerUsers',
  components: { ManageUsersSubNav }
}
</script>

<style>

</style>