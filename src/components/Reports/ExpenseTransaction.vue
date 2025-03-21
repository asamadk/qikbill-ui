<template>
    <AdminLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="reportPath" :showBackButton="true" path="Reports"
                pageTitle="Expense Transaction" />
            <div class="flex justify-between">
                <div class="flex" >
                    <!-- <SelectInput disabled-menu="All Parties" /> -->
                    <SelectInput disabled-menu="Select Time Period" />
                    <SelectInput class="ml-2" disabled-menu="Select expense categories" />
                </div>
                <div>
                    <Button variant="outline">Download PDF</Button>
                    <Button class="ml-2" variant="outline">Download Excel</Button>
                    <!-- <Button class="ml-2" variant="outline">Print PDF</Button> -->
                </div>
            </div>
            <div class="mt-10 max-w-full overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-t border-gray-100">
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">DATE</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">EXPENSE NUMBER</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">CATEGORY</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">PAYMENT MODE</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">TOTAL AMOUNT</p>
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
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.expense_number }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.category }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.paymentMode }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.totalAmount }}</p>
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
import AdminLayout from '../layout/AdminLayout.vue';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Button from '../ui/Button.vue';

export default {
    components: {
        AdminLayout,
        Button,
        PageBreadcrumb,
        SelectInput,
    },

    name: 'ExpenseTransaction',

    data() {
        return {
            reportPath: routeConstants.REPORTS,
            reportData : [
                {
                    date: '12 June 2025',
                    expense_number: '#51',
                    category: 'Rent',
                    paymentMode: 'cash',
                    totalAmount: '5,000',
                }
            ]
        }
    }
} 
</script>