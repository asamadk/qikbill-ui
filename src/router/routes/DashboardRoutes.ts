export const DashboardRoutes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../../views/Dashboard.vue'),
        meta: {
          title: 'Dashboard',
          requiresAuth: true 
        },
      },
];