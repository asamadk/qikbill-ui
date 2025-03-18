<template>
    <div>
        <AppDrawer @close="closeDrawer" @secondary-click="showDeleteModal = true" secondary-button-text="Delete"
            :show-footer="true" primary-button-text="Edit" @primary-click="handleEditClick" header="Expense #2"
            drawerId="payment-details-drawer" drawerLabelId="payment-details-label">

            <div class="border border-gray-200 rounded-xl mt-2">
                <div class="bg-gray-100 p-2 border border-gray-200 rounded-xl">
                    <p class="text-sm font-medium">
                        Expense Details
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-2 p-2">
                    <div>
                        <p class="text-sm text-gray-500">Party Name</p>
                        <p class="text-sm">Adam</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Expense Category</p>
                        <p class="text-sm">Rent Expense</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Payment Mode</p>
                        <p class="text-sm">Cash</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Date</p>
                        <p class="text-sm">12 june 2024</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Notes</p>
                        <p class="text-sm">-</p>
                    </div>
                </div>
            </div>
            <div
                class="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                <div class="max-w-full overflow-x-auto custom-scrollbar">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Item Date</p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">HSN
                                    </p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">QTY
                                    </p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Price/Item</p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Discount</p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Tax</p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">ITC Applicable
                                    </p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Total Amount
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(expense, index) in expenses" :key="index"
                                class="border-t border-gray-100 dark:border-gray-800">
                                <td class="py-3 whitespace-nowrap">
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="text-gray-500 text-theme-sm">
                                                {{ expense.name }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.hsn }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.qty }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.price }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.discount }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.tax }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.itc }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ expense.total }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end mt-4">
                    <Pagination class="end" :total-items="0" :items-per-page="5" @page-changed="handlePageChange" />
                </div>
            </div>
        </AppDrawer>

        <!-- Delete modal -->
        <Modal @secondary-click="showDeleteModal = false" @close="showDeleteModal = false" primary-button-text="Delete"
            secondary-button-text="Cancel" header="Delete Expense ?" :is-visible="showDeleteModal"
            :fullScreenBackdrop="true" @primary-click="deleteExpenseOutRecord">
            <div class="p-2">
                <p>Are you sure, you want to delete this expense out record?</p>
                <p class="text-gray-400">This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import AppDrawer from '../layout/AppDrawer.vue';
import Modal from '../ui/Modal.vue';
import Button from '../ui/Button.vue';

export default {
    components: {
        AppDrawer,
        Modal,
        Button
    },

    name: 'ExpenseDetails',

    data() {
        return {
            showDeleteModal: false,
            settledInvoices: [
                {
                    date: '12 January 2025',
                    invoice: {
                        id: '1',
                        amount: '5,000',
                        settledAmount: '3,400',
                    },
                }
            ],
            expenses: [
                {
                    name: 'Rent',
                    hsn: '-',
                    qty: 1,
                    price: '5000',
                    discount: '0',
                    tax: '0',
                    itc: true,
                    total: '5,000'
                }
            ]
        }
    },

    methods: {
        closeDrawer() {
            this.$router.push(routeConstants.EXPENSES);
        },

        handleEditClick() {
            const id = this.$route.params.id as string;
            this.$router.push(routeConstants.CREATE_EXPENSES(id));
        },

        deleteExpenseOutRecord() {

        },

        handlePageChange() {

        },
    }
}
</script>