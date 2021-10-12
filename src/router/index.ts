import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Characters from '@/views/Characters.vue';
import Comics from '@/views/Comics.vue';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/comics',
    name: 'Comics',
    component: Comics,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
