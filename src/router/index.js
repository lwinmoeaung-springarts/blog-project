import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Tag from '../views/Tag.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router