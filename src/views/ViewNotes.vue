<template>
    <div class='container'>
      <div>
      <h2 class="mt-4">View Notes for Ticket #{{id}}</h2>
      <p>Ticket Title: This is where the ticket title will go</p>
      <hr>
      <DisplayNotes/>
      <DisplayNotes/>
      <DisplayNotes/>
      </div>
      
  </div>
</template>

<script>
import { ref } from 'vue'
import DisplayNotes from '../components/DisplayNotes'

export default {
    name: 'ViewNotes',
    props: ['id'],
    components: { DisplayNotes }

}
</script>

<style>

</style>