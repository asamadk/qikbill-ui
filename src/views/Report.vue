<template>
    <admin-layout>
        <div v-for="reportType of reportTypes">
            <p class="text-xl font-semibold mt-5" >{{ reportType.type }}</p>
            <div class="grid grid-cols-4 gap-4 sm:grid-cols-4 md:gap-6">
                <div
                    v-for="report of reportType.reports"
                    @click="handleReportOpen(report.path)"
                    class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 cursor-pointer md:p-6 hover:bg-brand-50">
                    <h4 class="text-sm text-gray-800">{{ report.name }}</h4>
                </div>
            </div>
            <hr class="border-t border-gray-200 mt-5 mb-5" />
        </div>
    </admin-layout>
</template>
<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import { routeConstants } from '@/router/routeConstants';

export default {
    components: {
        AdminLayout,
    },

    name: 'Report',

    data() {
        return {
            reportTypes: [
                {
                    type: 'Favourite',
                    reports: [
                        {
                            name: 'Balance sheet',
                            path: routeConstants.REPORTS_LIST.balanceSheet,
                        },
                        {
                            name: 'Sales Summary',
                            path: routeConstants.REPORTS_LIST.salesSummary,
                        },
                        {
                            name: 'Profit & Loss',
                            path: routeConstants.REPORTS_LIST.profitLoss,
                        },
                    ]
                },
                // {
                //     type: 'GST',
                //     reports: [
                        // {
                        //     name: 'GSTR-1 (Sale)',
                        //     path: routeConstants.REPORTS_LIST.gstr1sale,
                        // },
                        // {
                        //     name: 'GSTR-2 (Purchase)',
                        //     path: routeConstants.REPORTS_LIST.gstr2purchase,
                        // },
                        // {
                        //     name: 'GSTR-3b',
                        //     path: routeConstants.REPORTS_LIST.gstr3b,
                        // },
                        // {
                        //     name: 'GST Sales (With HSN)',
                        //     path: routeConstants.REPORTS_LIST.gstSaleHSN,
                        // },
                        // {
                        //     name: 'GST Purchase (With HSN)',
                        //     path: routeConstants.REPORTS_LIST.gstPurchaseHSN,
                        // },
                        // {
                        //     name: 'HSN Wise Sales Summary',
                        //     path: routeConstants.REPORTS_LIST.hsnSaleSummary,
                        // },
                        // {
                        //     name: 'TDS Payable',
                        //     path: routeConstants.REPORTS_LIST.tdsPayble,
                        // },
                        // {
                        //     name: 'TDS Receivable',
                        //     path: routeConstants.REPORTS_LIST.tdsReceivable,
                        // },
                        // {
                        //     name: 'TCS Payable',
                        //     path: routeConstants.REPORTS_LIST.tcsPayble,
                        // },
                        // {
                        //     name: 'TCS Receivable',
                        //     path: routeConstants.REPORTS_LIST.tcsReceivable,
                        // },
                    // ]
                // },
                {
                    type: 'Transaction',
                    reports: [
                        {
                            name: 'Purchase Summary',
                            path: routeConstants.REPORTS_LIST.purchaseSummary,
                        },
                        {
                            name: 'Cash And Bank Report',
                            path: routeConstants.REPORTS_LIST.cashBankReport,
                        },
                        // {
                        //     name: 'Audit Trails',
                        //     path: routeConstants.REPORTS_LIST.auditTrails,
                        // },
                        // {
                        //     name: 'Bill Wise Profit',
                        //     path: routeConstants.REPORTS_LIST.billWiseProfit,
                        // },
                        {
                            name: 'Expense Transaction',
                            path: routeConstants.REPORTS_LIST.expenseTransaction,
                        },
                    ]
                },
                {
                    type: 'Party',
                    reports: [
                        {
                            name: 'Party Statement (Ledger)',
                            path: routeConstants.REPORTS_LIST.partyStatement,
                        },
                    ]
                }
            ]
        }
    },

    methods: {
        handleReportOpen(path: string) {
            this.$router.push(path);
        }
    }
}
</script>