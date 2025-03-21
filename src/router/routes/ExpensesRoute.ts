import { routeConstants } from '../routeConstants';

export const expensesRoutes = [
    {
        path: routeConstants.EXPENSES,
        name: 'Expenses',
        component: () => import('../../views/Expenses.vue'),
        meta: {
            title: 'Expenses',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.CREATE_EXPENSES(null),
        name: 'Create Expenses',
        component: () => import('../../components/Expenses/CreateExpense.vue'),
        meta: {
            title: 'Create Expenses',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.EXPENSES_DETAILS(null),
        name: 'Expenses Details',
        component: () => import('../../views/Expenses.vue'),
        meta: {
            title: 'Expenses Details',
            requiresAuth: true
        },
    },
]