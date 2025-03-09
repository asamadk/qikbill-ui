export const DashboardRoutes = [
    {
        path: '/',
        name: 'Ecommerce',
        component: () => import('../../views/Ecommerce.vue'),
        meta: {
          title: 'eCommerce Dashboard',
          requiresAuth: true 
        },
      },
];