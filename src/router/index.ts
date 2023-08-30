import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import VHome from '@/views/VHome.vue';
import VSettings from '@/views/VSettings.vue';
import VAbout from '@/views/VAbout.vue';

interface Import extends ImportMeta {
  env: Record<string, string>;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: VHome,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/settings',
    component: VSettings,
  },
  {
    path: '/about',
    component: VAbout,
  },
];

const router = createRouter({
  history: createWebHistory((import.meta as Import).env.BASE_URL),
  routes,
});

export default router;
