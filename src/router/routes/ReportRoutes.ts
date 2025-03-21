import { routeConstants } from '../routeConstants';

export const reportRoutes = [
    {
        path: routeConstants.REPORTS,
        name: 'Reports',
        component: () => import('../../views/Report.vue'),
        meta: {
            title: 'Reports',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.profitLoss,
        name: 'Profit Loss',
        component: () => import('../../components/Reports/ProfitLoss.vue'),
        meta: {
            title: 'Profit Loss',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.salesSummary,
        name: 'Sales Summary',
        component: () => import('../../components/Reports/SalesSummary.vue'),
        meta: {
            title: 'Sales Summary',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.purchaseSummary,
        name: 'Purchase Summary',
        component: () => import('../../components/Reports/PurchaseSummary.vue'),
        meta: {
            title: 'Purchase Summary',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.cashBankReport,
        name: 'Cash & Bank Report',
        component: () => import('../../components/Reports/CashAndBankReport.vue'),
        meta: {
            title: 'Cash & Bank Report',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.expenseTransaction,
        name: 'Expense Transaction',
        component: () => import('../../components/Reports/ExpenseTransaction.vue'),
        meta: {
            title: 'Expense Transaction',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.balanceSheet,
        name: 'Balance Sheet',
        component: () => import('../../components/Reports/BalanceSheet.vue'),
        meta: {
            title: 'Balance Sheet',
            requiresAuth: true
        },
    },
    {
        path: routeConstants.REPORTS_LIST.partyStatement,
        name: 'Party Statement',
        component: () => import('../../components/Reports/PartyStatement.vue'),
        meta: {
            title: 'Party Statement',
            requiresAuth: true
        },
    },
]