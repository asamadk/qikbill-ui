import { routeConstants } from '../routeConstants';

export const settingsRoutes = [
    {
        path: routeConstants.SETTINGS.account,
        name: 'Account Settings',
        component: () => import('../../views/Settings/AccountSettings.vue'),
        meta: {
            title: 'Account Settings',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.SETTINGS.company,
        name: 'Company Settings',
        component: () => import('../../views/Settings/CompanySettings.vue'),
        meta: {
            title: 'Company Settings',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.SETTINGS.invoice,
        name: 'Invoice Settings',
        component: () => import('../../views/Settings/InvoiceSettings.vue'),
        meta: {
            title: 'Invoice Settings',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.SETTINGS.manageUsers,
        name: 'Manage Users',
        component: () => import('../../views/Settings/UserSettings.vue'),
        meta: {
            title: 'Manage Users',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.SETTINGS.support,
        name: 'Support',
        component: () => import('../../views/Settings/SupportSettings.vue'),
        meta: {
            title: 'Support',
            requiresAuth: true
        },
    },
]