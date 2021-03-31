import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Landing from '../views/Landing'
import ClosedTickets from '../views/ClosedTickets.vue'
import Create from '../views/Create.vue'
import ManageClients from '../views/ManageClients.vue'
import ManageUsers from '../views/ManageUsers.vue'
import ViewClients from '../views/ViewClients.vue'
import NotFound from '../views/NotFound'
import SearchTickets from '../views/SearchTickets'
import { isAuthorized } from '../helpers/useAuth'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/searchtickets',
    name: 'SearchTickets',
    component: SearchTickets,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/closedtickets',
    name: 'ClosedTickets',
    component: ClosedTickets,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/manageclients',
    name: 'ManageClients',
    component: ManageClients,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/manageusers',
    name: 'ManageUsers',
    component: ManageUsers,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/NotFound'
    }
  },
  {
    path: '/viewclients',
    name: 'ViewClients',
    component: ViewClients,
    beforeEnter: (to, from) => {
      if (isAuthorized.value) return true
      return '/'
    }
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
