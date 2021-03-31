<template>
    <Navbar v-if="checkAuth === true"/>
  <router-view/>
</template>

<script>
  import {onMounted, onUpdated} from 'vue'
  import Navbar from './components/Navbar.vue'
  import {isAuthorized} from './helpers/useAuth'

  export default {
    name: 'App',
    components: {Navbar},
    setup(){},
    computed: {
      checkAuth() {
        return isAuthorized.value
      }
    }
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
