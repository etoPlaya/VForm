import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
]

const router = new VueRouter({
  routes
})

export default router
