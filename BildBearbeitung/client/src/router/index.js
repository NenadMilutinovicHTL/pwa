import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import DataView from '../views/DataView.vue';
import Maps from '../views/Maps.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: AboutView,
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps,
    },
  ],
});

export default router;
