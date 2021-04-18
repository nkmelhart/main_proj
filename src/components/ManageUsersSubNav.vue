<template>
  <div class="container mt-4 mb-4">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <router-link :to="{name: 'UserEdit'}" class="nav-link active">Edit User</router-link>
  </li>
  <li class="nav-item">
    <router-link :to="{name: 'UserAdd'}" class="nav-link">Add Uses</router-link>
  </li>
</ul>
  </div>
  <div v-if="editUsers"></div>
  <div v-else></div>
</template>

<script>
export default {

}
</script>

<style>

</style>