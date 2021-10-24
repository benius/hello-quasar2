import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  {
    path: '/user',
    component: () => import('layouts/User.vue'),
    children: [
      {
        path: 'profile',
        component: () => import('pages/Profile.vue')
      },
      {
        path: 'posts',
        component: () => import('pages/Posts.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
