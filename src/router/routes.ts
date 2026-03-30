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
        component: () => import('pages/auth/SigninPage.vue'),
      },
      {
        path: 'sign-up',
        name: 'signup',
        component: () => import('pages/auth/SignupPage.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    redirect: { name: 'dashboard' },
    component: () => import('layouts/dashboard/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/dashboard/DashboardPage.vue'),
        meta: {
          headline: 'Panel de Control',
          title: 'Gestión de formatos',
          description:
            'Crea, visualiza y genera documentos de manera eficiente con nuestras herramientas integradas.',
          showBackButton: false,
        },
      },
      {
        path: 'create-template',
        name: 'create-template',
        component: () => import('pages/dashboard/CreateTemplatePage.vue'),
        meta: {
          headline: 'Plantillas',
          title: 'Crear Plantillas',
          description:
            'Diseña la estructura de tus formatos definiendo las columnas y sus tipos de datos.',
          showBackButton: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
