import { createRouter, createWebHistory } from 'vue-router';
import Blog from '@views/BlogView.vue';

const root = 'logoipsum';
const routes = [
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
