<template>
  <div class='container'>
      <div>
      <h2 class="mt-4">Add Notes for Ticket #{{id}}</h2>
      <p>Ticket Title: This is where the ticket title will go</p>
      <hr>
      </div>
      <div class='row'>
          <label for="inputDetails" class="mt-3">Notes</label>
          <textarea class="form-control mx-2" id="inputDetails"></textarea>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-end mt-3">
            <button class="btn btn-primary me-3">Submit</button>
            <router-link :to="{ name: 'Main'}" class="btn btn-primary">Cancel</router-link>
          </div>
        </div>
  </div>
</template>

<script>

export default {
    name: 'AddNotes',
    props: ['id'],
    components: {},
    setup(props) {

    },
    }


const tempNumber = 123456

</script>

<style scoped>

label{
  font-weight: bold;
}
textarea{
  height: 250px;
}

</style>