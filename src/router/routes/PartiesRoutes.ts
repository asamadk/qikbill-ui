import { routeConstants } from '../routeConstants';

export const PartiesRoutes = [
  {
    path: routeConstants.PARTIES,
    name: 'Parties',
    component: () => import('../../views/Parties.vue'),
    meta: {
      title: 'Parties',
      requiresAuth: true
    },
  },
  {
    path: routeConstants.CREATE_PARTIES(null),
    name: 'Create Parties',
    component: () => import('../../components/Parties/CreateParties.vue'),
    meta: {
      title: 'Create Parties',
      requiresAuth: true
    },
  },
  {
    path: routeConstants.EDIT_PARTIES(null),
    name: 'Edit Parties',
    component: () => import('../../views/Parties.vue'),
    meta: {
      title: 'Create Parties',
      requiresAuth: true
    },
  },
];