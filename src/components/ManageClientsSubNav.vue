<template>
  <div class="container mt-4 mb-4">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <router-link :to="{name: 'ClientEdit'}" class="nav-link active">Edit Client</router-link>
  </li>
  <li class="nav-item">
    <router-link :to="{name: 'ClientAdd'}" class="nav-link">Add Client</router-link>
  </li>
</ul>
  </div>
  <div v-if="editUsers"></div>
  <div v-else></div>
</template>

<script>
export default {
  name: 'ManageClientsSubNav'

}
</script>

<style>

</style>