<template>
    <div>
        <AppDrawer @close="closeDrawer" @secondary-click="showDeleteModal = true" secondary-button-text="Delete"
            :show-footer="true" primary-button-text="Edit" @primary-click="handleEditClick" header="Payment Out #2"
            drawerId="payment-details-drawer" drawerLabelId="payment-details-label">
            <div>
                <Button variant="outline">Download PDF</Button>
                <Button class="ml-2" variant="outline">Print PDF</Button>
            </div>
            <div class="border border-gray-200 rounded-xl mt-2">
                <div class="bg-gray-100 p-2 border border-gray-200 rounded-xl">
                    <p class="text-sm font-medium">
                        Payment Details
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-2 p-2">
                    <div>
                        <p class="text-sm text-gray-500">Party Name</p>
                        <p class="text-sm">Adam</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Payment Date</p>
                        <p class="text-sm">12 January 2025</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Payment Amount</p>
                        <p class="text-sm">5,000</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Payment Type</p>
                        <p class="text-sm">Cash</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Notes</p>
                        <p class="text-sm">-</p>
                    </div>
                </div>
            </div>
            <div class="border border-gray-200 rounded-xl mt-2">
                <div class="bg-gray-100 p-2 border border-gray-200 rounded-xl">
                    <p class="text-sm font-medium">
                        Invoice settled with this payment
                    </p>
                </div>
                <div class="max-w-full overflow-x-auto custom-scrollbar">
                    <table class=" min-w-full">
                        <thead>
                            <tr class="border-t border-gray-100 dark:border-gray-800">
                                <th class="py-3 pl-2 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Date</p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Invoice Number
                                    </p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Invoice Amount
                                    </p>
                                </th>
                                <th class="py-3 text-left">
                                    <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Invoice Amount settled</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(transaction, index) in settledInvoices" :key="index"
                                class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                                <td class="py-3 whitespace-nowrap">
                                    <div class="flex items-center gap-3">
                                        <div>
                                            <p class="pl-2 text-gray-500 text-theme-sm">
                                                {{ transaction.date }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.invoice.id }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.invoice.amount }}</p>
                                </td>
                                <td class="py-3 whitespace-nowrap">
                                    <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.invoice.settledAmount }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppDrawer>

        <!-- Delete modal -->
        <Modal @secondary-click="showDeleteModal = false" @close="showDeleteModal = false" primary-button-text="Delete"
            secondary-button-text="Cancel" header="Delete Party ?" :is-visible="showDeleteModal"
            :fullScreenBackdrop="true" @primary-click="deletePaymentOutRecord">
            <div class="p-2">
                <p>Are you sure, you want to delete this payment out record?</p>
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

    name: 'PaymentOutDetail',

    data() {
        return {
            showDeleteModal: false,
            settledInvoices: [
                {
                    date: '12 January 2025',
                    invoice: {
                        id: '1',
                        amount : '5,000',
                        settledAmount: '3,400',
                    },
                }
            ]
        }
    },

    methods: {
        closeDrawer() {
            this.$router.push(routeConstants.PAYMENT_OUT);
        },

        handleEditClick() {
            const id = this.$route.params.id as string;
            this.$router.push(routeConstants.CREATE_PAYMENT_OUT(id));
        },

        deletePaymentOutRecord() {

        }
    }
}
</script>