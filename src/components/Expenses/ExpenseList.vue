<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex">
                <SelectInput disabledMenu="Select Time Period" />
            </div>

            <div class="flex items-center gap-3">
                <router-link :to="createExpense">
                    <Button size="sm" variant="primary"> Create Expense</Button>
                </router-link>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Date</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Expense Number</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Party Name</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Category</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Amount</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(invoice, index) in invoices" :key="index" @click="handleInvoiceOpen(invoice)"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">

                                <div>
                                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                        {{ invoice.date }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ invoice.expense_number }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ invoice.party.name }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ invoice.category.name }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ invoice.amount }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <Pagination class="end" :total-items="totalInvoices" :items-per-page="itemsPerPage"
                @page-changed="handlePageChange" />
        </div>
    </div>
    <ExpenseDetails v-if="isDrawerOpen" @close="isDrawerOpen = false"/>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import Button from '../ui/Button.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Pagination from '../ui/Pagination.vue';
import ExpenseDetails from './ExpenseDetails.vue';


export default {

    components: {
        Button,
        SelectInput,
        Pagination,
        ExpenseDetails,
    },

    name: 'ExpenseList',

    computed: {
        totalInvoices() {
            return this.invoices.length;
        }
    },

    data() {
        return {
            itemsPerPage: 1,
            currentPage: 0,
            showSettings: false,
            createExpense: routeConstants.CREATE_EXPENSES('new'),
            invoices: [
                {
                    id: 'XBJL101',
                    date: '12 March 2025',
                    expense_number: '8',
                    party: { name: 'Cash Sale' },
                    category: {name: 'Essentials'},
                    amount: '₹ 375',
                }
            ],
            isDrawerOpen: false,
        }
    },

    methods: {
        handlePageChange(page: number) {
            this.currentPage = page;
            // Fetch new data based on the current page
        },
        handleInvoiceOpen(invoice: any) {
            this.$router.push(routeConstants.EXPENSES_DETAILS(invoice?.id))
        }
    },
    watch: {
        '$route'(to) {
            if (to.fullPath === routeConstants.EXPENSES) {
                this.isDrawerOpen = false;
            } else {
                this.isDrawerOpen = true;
            }
        }
    },

    created() {
        if (this.$route.fullPath.includes('/expenses/details')) {
            this.isDrawerOpen = true;
        }
    }
}

</script>