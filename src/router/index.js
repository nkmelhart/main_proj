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
import AddNotes from '../views/AddNotes'
import ViewNotes from '../views/ViewNotes'
import UserEdit from '../views/UserEdit'
import UserAdd from '../views/UserAdd'
import ClientEdit from '../views/ClientEdit'
import ClientAdd from '../views/ClientAdd'
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
    //beforeEnter: (to, from) => {
    //  if (isAuthorized.value) return true
    //  return '/'
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/searchtickets',
    name: 'SearchTickets',
    component: SearchTickets,
  },
  {
    path: '/closedtickets',
    name: 'ClosedTickets',
    component: ClosedTickets,
  },
  {
    path: '/manageclients',
    name: 'ManageClients',
    component: ManageClients,
    children: [
      {
        path: '/manageclients/clientedit',
        name: 'ClientEdit',
        component: ClientEdit,
      },
      {
        path: '/manageclients/clientadd',
        name: 'ClientAdd',
        component: ClientAdd,
      }
    ]
  },
  {
    path: '/manageusers',
    name: 'ManageUsers',
    component: ManageUsers,
    children: [
      {
        path: '/manageusers/useradd',
        name: 'UserAdd',
        component: UserAdd
      },
      {
        path: '/manageusers/useredit',
        name: 'UserEdit',
        component: UserEdit
      }
    ]
  },
  {
    path: '/viewclients',
    name: 'ViewClients',
    component: ViewClients,
  },
  {
    path: '/addnotes/:id',
    name: 'AddNotes',
    component: AddNotes,
    props: true,
  },
  {
    path: '/viewnotes/:id',
    name: 'ViewVotes',
    component: ViewNotes,
    props: true,
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
