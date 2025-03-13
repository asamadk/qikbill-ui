import { routeConstants } from '../routeConstants';

export const OpenRoutes = [
    {
        path: routeConstants.NOT_FOUND,
        name: '404 Error',
        component: () => import('../../views/Errors/FourZeroFour.vue'),
        meta: {
            title: '404 Error',
        },
    },
    {
        path: routeConstants.LOGIN,
        name: 'Signin',
        component: () => import('../../views/Auth/Signin.vue'),
        meta: {
            title: 'Signin',
        },
    },
    {
        path: routeConstants.SIGN_UP,
        name: 'Signup',
        component: () => import('../../views/Auth/Signup.vue'),
        meta: {
            title: 'Signup',
        },
    },
]