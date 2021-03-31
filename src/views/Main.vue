<template>
  <div>
    <Subnav/>
    <DisplayTicket/>
    <DisplayTicket/>
    <DisplayTicket/>
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {isAuthorized} from '../helpers/useAuth'
import Subnav from '../components/Subnav'
import Subnav2 from '../components/SubNav2'
import DisplayTicket from '../components/DisplayTicket'

export default {
  name: 'Main',
  components: {Subnav, Subnav2, DisplayTicket},
  setup(){
      onMounted(() => {
        console.log("isAuthorized: " + isAuthorized.value)
      })
    }
}
</script>
