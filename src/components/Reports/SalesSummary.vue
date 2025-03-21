<template>
    <AdminLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="reportPath" :showBackButton="true" path="Reports"
                pageTitle="Sales Summary" />
            <div class="flex justify-between">
                <div class="flex" >
                    <!-- <SelectInput disabled-menu="All Parties" /> -->
                    <SelectInput disabled-menu="Select Time Period" />
                    <SelectInput class="ml-2" disabled-menu="Select Invoice status" />
                    <SelectInput class="ml-2" disabled-menu="Select Invoice type" />
                </div>
                <div>
                    <Button variant="outline">Download PDF</Button>
                    <Button class="ml-2" variant="outline">Download Excel</Button>
                    <!-- <Button class="ml-2" variant="outline">Print PDF</Button> -->
                </div>
            </div>
            <div class="text-lg text-gray-500 mt-10 font-semibold" >
                <h3>
                    Total Sales<span class="text-black" >: ₹84,053</span>
                </h3>
            </div>
            <div class="mt-10 max-w-full overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-t border-gray-100">
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">DATE</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">INVOICE NO.</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">PARTY NAME</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">DUE DATE</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">AMOUNT</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">BALANCE AMOUNT</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">INVOICE TYPE</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">INVOICE STATUS</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in reportData" :key="index"
                            class="border-t border-gray-100 dark:border-gray-800">
                            <td class="py-3 whitespace-nowrap">
                                <div class="flex items-center gap-3">

                                    <div>
                                        <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {{ item.date }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.invoice_number }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.party.name }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.due }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.amount }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.balance }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.invoice_type }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <span class="rounded-full px-2 py-0.5 text-theme-xs font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                {{ item.status }}
                            </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';

export default {
    components: {
        AdminLayout,
        PageBreadcrumb,
        SelectInput,
        Button
    },

    name: 'SalesSummary',

    data() {
        return {
            reportPath: routeConstants.REPORTS,
            reportData : [
                {
                    date: '12 June 2025',
                    invoice_number: '#51',
                    party: {name: 'samad'},
                    due: '14 July 2025',
                    amount: '5,000',
                    balance: '3,400',
                    invoice_type: 'Cash',
                    status: 'paid'
                }
            ]
        }
    }
}
</script>