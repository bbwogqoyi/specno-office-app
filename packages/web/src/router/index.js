import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Office from '../pages/Office.vue'
import NewOrEditOffice from '../pages/NewOrEditOffice.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/offices/:id',
    name: 'Office',
    component: Office
  },
  {
    path: '/offices/edit/:id',
    name: 'EditOffice',
    component: NewOrEditOffice,
    props: true
  },
  {
    path: '/offices/new',
    name: 'NewOffice',
    component: NewOrEditOffice,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router