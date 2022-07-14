import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import VHome from '@/views/VHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: VHome,
  },
];

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
