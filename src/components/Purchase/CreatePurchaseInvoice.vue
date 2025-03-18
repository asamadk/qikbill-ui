<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="purchaseInvoiceEndpoint" :showBackButton="true" path="Purchase" pageTitle="Create Purchase Invoice" />
            <InvoiceForm />
            <div class="mt-5 flex justify-end rounded-b dark:border-gray-600">
                <Button variant="outline" >
                    Cancel
                </Button>
                <Button class="ml-2" >
                    Save
                </Button>
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import InvoiceForm from '../Sales/InvoiceForm.vue';
import Button from '../ui/Button.vue';

export default {

    components: {
        AdminLayout,
        Button,
        InvoiceForm,
        PageBreadcrumb
    },

    name: 'CreatePurchaseInvoice',

    data() {
        return {
            purchaseInvoiceEndpoint: routeConstants.PURCHASE_INVOICE
        }
    }

}

</script>