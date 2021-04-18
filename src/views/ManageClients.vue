<template>
  <div>
    <ManageClientsSubNav/>
    <router-view/>
  </div>
</template>

<script>

import ManageClientsSubNav from '../components/ManageClientsSubNav'

export default {
  name: 'ManagerClients',
  components: { ManageClientsSubNav }
}
</script>

<style>

</style>