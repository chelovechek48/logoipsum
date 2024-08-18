import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/HomeView.vue';
import Blog from '@views/BlogView.vue';

const root = 'logoipsum';
const routes = [
  {
    name: 'home',
    path: `/${root}/home`,
    component: Home,
  },
  {
    name: 'blog',
    path: `/${root}/blog`,
    component: Blog,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: `/${root}/blog`,
  },
];

export default createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});
