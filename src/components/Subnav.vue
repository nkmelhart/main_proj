<template>
  <div class="container mt-4 mb-4">
      <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#" @click="activeTab = 1">All Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Normal Priority</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Open</a>
      <a class="dropdown-item" href="#">Contact Customer</a>
      <a class="dropdown-item" href="#">Scheduled</a>
      <a class="dropdown-item" href="#">Ongoing</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">High Priority</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Code Red</a>
      <a class="dropdown-item" href="#">Code Yellow</a>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Low Priority</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Waiting on Parts</a>
      <a class="dropdown-item" href="#">Waiting on Customer</a>
      <a class="dropdown-item" href="#">Waiting on Vendor</a>
      <a class="dropdown-item" href="#">On Hold</a>
    </div>
  </li>
</ul>
  </div>
</template>

<script setup>

</script>

<style>

</style>