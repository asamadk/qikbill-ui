<template>
    <div>
        <admin-layout>
            <div
                class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                <PageBreadcrumb :backPath="quotationsInvoiceEndpoint" :showBackButton="true" path="Quotation" pageTitle="Quotation Invoice #8" />
                <div class="flex justify-between" >
                    <div>
                        <Button variant="outline" >Download PDF</Button>
                        <Button class="ml-2" variant="outline" >Print PDF</Button>
                        <Button class="ml-2" variant="outline" >Print Thermal</Button>
                    </div>
                    <div class="flex" >
                        <Button class="mr-2" >Convert to Invoice</Button>
                        <Button @click="handleEditInvoice" class="mr-2" variant="outline" >Edit</Button>
                        <IconButton @click="showDelete = true" >
                            <DeleteIcon class="text-red-400" />
                        </IconButton>
                    </div>
                </div>
                <FinalInvoice class="mt-2" />
            </div>
        </admin-layout>
        <Modal @secondary-click="showDelete = false" @close="showDelete = false" primary-button-text="Delete"
            secondary-button-text="Cancel" header="Delete Item ?" :is-visible="showDelete"
            :fullScreenBackdrop="true" @primary-click="deleteInvoice" >
            <div class="p-2" >
                <p>Are you sure, you want to delete this invoice?</p>
                <p class="text-gray-400" >This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import IconButton from '../ui/IconButton.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';
import FinalInvoice from '../Sales/FinalInvoice.vue';
import Modal from '../ui/Modal.vue';

export default {
    components: {
        AdminLayout,
        Button,
        DeleteIcon,
        FinalInvoice,
        PageBreadcrumb,
        IconButton,
        Modal,
    },

    name: 'QuotationDetails',

    data() {
        return {
            quotationsInvoiceEndpoint: routeConstants.QUOTATION_ESTIMATE,
            showDelete: false,
        }
    },
    
    methods: {
        deleteInvoice() {
            console.log('Deleted');
            this.showDelete = false;
        },

        handleEditInvoice() {
            const invoiceId = this.$route.params.id;
            this.$router.push(routeConstants.CREATE_QUOTATION_INVOICE(invoiceId));
        }
    }
}

</script>