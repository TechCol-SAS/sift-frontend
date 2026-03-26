import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/auth',
  },
  {
    path: '/auth',
    redirect: '/auth/sign-in',
    component: () => import('layouts/auth/AuthLayout.vue'),
    children: [
      {
        path: 'sign-in',
        name: 'signin',
        component: () => import('pages/auth/LoginPage.vue'),
      },
      {
        path: 'sign-up',
        name: 'signup',
        component: () => import('pages/auth/SignupPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
