<template>
  <div class='container'>
      <div>
      <h2 class="mt-4">Search for Ticket{{id}}</h2>
      <hr>
      <div class="input-group mb-3 mt-4">
        <div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search by...</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Term</a></li>
    <li><a class="dropdown-item" href="#">Client</a></li>
    <li><a class="dropdown-item" href="#">Ticket Number</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>
      </div>
      </div>
      <div>
        <DisplayTicket/>
      </div>
  </div>
</template>

<script>
import DisplayTicket from '../components/DisplayTicket'
export default {
  components: {DisplayTicket}
}
</script>

<style>

</style>