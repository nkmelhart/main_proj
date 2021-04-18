<template>
  <div class="main-con card container mb-4">
 <div class="card shadow border border-2">
  <div class="card-header fw-bold h5">
    Ticket Status Group
  </div>
  <div v-for="one in 2" class="card-body border-bottom">
    <h5 class="card-title">Title of Ticket</h5>
    <p class="card-text">Brief description of ticket</p>
    <div class="btn-toolbar">
    <router-link to="/viewnotes/1" class="btn btn-primary me-3">View Notes</router-link>
    <router-link to="/addnotes/2" class="btn btn-primary me-3">Add Notes</router-link>
    <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle me-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {{statusButton}}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li v-for="status in statusA" :key="status"><a class="dropdown-item" href="#">{{status}}</a></li>
  </ul>
  </div>
  <a v-if="!isInClosed" href="#" class="btn btn-primary me-3">Close Ticket</a>
</div>
  </div>
</div>
</div>
</template>

<script>

import { statusArray } from '../helpers/useStatus'
import { ref } from '../helpers/useStatus'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

export default{
  setup(){

    const statusA = statusArray.value

    const route = useRoute()

    const isInClosed = computed(() => {
      if(route.name === "ClosedTickets"){
        return true
      }
      return false
    })

    const statusButton = computed(() => {
      console.log(isInClosed.value)
      if(isInClosed.value){
        return "Re-open Ticket"
      }
      return "Change Status"
    })
    
    onMounted(() => {
      console.log(isInClosed.value)
      console.log(statusButton.value)
      
   })


    return { statusA, isInClosed, statusButton }
  }
}

</script>

<style>

div .container{
    border: none;
}

</style>