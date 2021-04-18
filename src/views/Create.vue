<template>
  <div class="container">
    <h2 class="mt-4">Create Ticket</h2>
    <hr class="mb-4">
      <form>
        <div class="row form-group">
        <div class="col-5">
          <label for="inputTitle">Ticket Title</label>
          <input type="text" class="form-control mb-3" id="inputTitle" required>
          <label for="selectClient">Client Name</label>
          <select class="form-control mb-3" id="selectClient">
            <option value="1">Here will be the list of organizations</option>
          </select>
          <label for="selectStatus">Ticket Status</label>
          <select class="form-control" id="client">
            <option value="1">Here will be the list of status</option>
          </select>
        </div>
        <div class="col-2"/>
        <div class="col-5">
          <label for="inputPOC">Point of Contact</label>
          <input type="text" class="form-control mb-3" id="inputPOC" required>
          <label for="inputPhone">Contact Phone Number</label>
          <input type="text" class="form-control mb-3" id="inputPhone" required>
          <label for="inputPhone">Assigned To</label>
          <select class="form-control" id="client">
            <option value="1">Here will be a list of technicians</option>
          </select>
        </div>
        </div>
        <div class='row'>
          <label for="inputDetails" class="mt-5">Details of Tickets</label>
          <textarea class="form-control mx-2" id="inputDetails"></textarea>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-end mt-3">
            <button class="btn btn-primary me-3">Submit</button>
            <button class="btn btn-primary" @click="handleCancel">Cancel</button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'

export default {
  name: "Create",
  setup(){

    const router = useRouter()
    const handleCancel = () => {
      router.push('/main')
    }

    return{handleCancel}
  }

}
</script>

<style scoped>

label{
  font-weight: bold;
}

input, select{
  width: 300px;
}
textarea{
  height: 250px;
}

</style>