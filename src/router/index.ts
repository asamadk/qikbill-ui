import { useUserStore } from '@/stores/userStore';
import { createRouter, createWebHistory } from 'vue-router'
import { DashboardRoutes } from './routes/DashboardRoutes';
import { routeConstants } from './routeConstants';
import { OpenRoutes } from './routes/OpenRoutes';
import { PartiesRoutes } from './routes/PartiesRoutes';
import { itemRoutes } from './routes/ItemRoutes';
import { salesRoutes } from './routes/SalesRoutes';
import { quotationRoutes } from './routes/QuotationRoutes';
import { paymentInRoutes } from './routes/PaymentInRoute';
import { salesReturnRoutes } from './routes/SalesReturnRoutes';
import { purchaseRoutes } from './routes/PurchaseRoutes';
import { paymentOutRoutes } from './routes/PaymentOutRoute';
import { purchaseReturnRoutes } from './routes/PurchaseReturnRoutes';
import { posRoutes } from './routes/posRoutes';
import { expensesRoutes } from './routes/ExpensesRoute';
import { reportRoutes } from './routes/ReportRoutes';
import { settingsRoutes } from './routes/SettingsRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes: [
    ...OpenRoutes,
    ...DashboardRoutes,
    ...PartiesRoutes,
    ...itemRoutes,
    ...salesRoutes,
    ...quotationRoutes,
    ...paymentInRoutes,
    ...salesReturnRoutes,
    ...purchaseRoutes,
    ...paymentOutRoutes,
    ...purchaseReturnRoutes,
    ...posRoutes,
    ...expensesRoutes,
    ...reportRoutes,
    ...settingsRoutes,
    {
      path: '/calendar',
      name: 'Calendar',
      component: () => import('../views/Others/Calendar.vue'),
      meta: {
        title: 'Calendar',
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Others/UserProfile.vue'),
      meta: {
        title: 'Profile',
      },
    },
    {
      path: '/form-elements',
      name: 'Form Elements',
      component: () => import('../views/Forms/FormElements.vue'),
      meta: {
        title: 'Form Elements',
      },
    },
    {
      path: '/basic-tables',
      name: 'Basic Tables',
      component: () => import('../views/Tables/BasicTables.vue'),
      meta: {
        title: 'Basic Tables',
      },
    },
    {
      path: '/line-chart',
      name: 'Line Chart',
      component: () => import('../views/Chart/LineChart/LineChart.vue'),
    },
    {
      path: '/bar-chart',
      name: 'Bar Chart',
      component: () => import('../views/Chart/BarChart/BarChart.vue'),
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: () => import('../views/UiElements/Alerts.vue'),
      meta: {
        title: 'Alerts',
      },
    },
    {
      path: '/avatars',
      name: 'Avatars',
      component: () => import('../views/UiElements/Avatars.vue'),
      meta: {
        title: 'Avatars',
      },
    },
    {
      path: '/badge',
      name: 'Badge',
      component: () => import('../views/UiElements/Badges.vue'),
      meta: {
        title: 'Badge',
      },
    },

    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('../views/UiElements/Buttons.vue'),
      meta: {
        title: 'Buttons',
      },
    },

    {
      path: '/images',
      name: 'Images',
      component: () => import('../views/UiElements/Images.vue'),
      meta: {
        title: 'Images',
      },
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/UiElements/Videos.vue'),
      meta: {
        title: 'Videos',
      },
    },
    {
      path: '/blank',
      name: 'Blank',
      component: () => import('../views/Pages/BlankPage.vue'),
      meta: {
        title: 'Blank',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next(routeConstants.LOGIN);
  } else {
    next();
  }
});

export default router

router.beforeEach((to, from, next) => {
  document.title = `QikBill ${to.meta.title} | - Smart billing`
  next()
})
