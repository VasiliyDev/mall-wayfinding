import type { RouteRecordRaw } from 'vue-router';

const ViewDemo = () => import('@/views/ViewDemo.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ViewDemo',
    component: ViewDemo,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/',
  },
];

export default routes;
