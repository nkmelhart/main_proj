<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">NovaTickets</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 ms-5 mb-lg-0">
        <li class="nav-item me-3">
          <router-link :to="{ name: 'Main' }" class="nav-link">Main</router-link>
        </li>
        <li class="nav-item me-3">
          <router-link :to="{ name: 'Create' }" class="nav-link">Create Ticket</router-link>
        </li>
        <li class="nav-item dropdown me-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            View
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"></a></li>
            <li><router-link :to="{ name: 'ViewClients'}" class="dropdown-item" >Client Info</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{ name: 'SearchTickets'}" class="dropdown-item">Tickets By Search</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{ name: 'ClosedTickets' }" class="dropdown-item" href="#">Closed Tickets</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown me-3">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"></a></li>
            <li><router-link :to="{name: 'ManageUsers'}" class="dropdown-item" >Users</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'ManageClients'}" class="dropdown-item">Clients</router-link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-success" type="submit" @click="logout">Logout</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import {isAuthorized} from '../helpers/useAuth'
import {useRouter} from "vue-router"

export default {
    name: "Navbar",
    setup(){

        const router = useRouter()
        const logout = () => {
            isAuthorized.value = false
            router.push('/')
        }

        return { logout }
    }
}

</script>

<style>

.router-link-active {
    color: black;
    text-decoration: none;
}

</style>