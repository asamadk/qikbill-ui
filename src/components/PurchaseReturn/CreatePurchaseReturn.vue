<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="purchaseReturnEndpoint" :showBackButton="true" path="Purchase sReturn" pageTitle="Create Purchase Return" />
            <InvoiceForm />
            <div class="mt-5 flex justify-end rounded-b dark:border-gray-600">
                <button type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Cancel
                </button>
                <button type="button"
                    class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Save
                </button>
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import InvoiceForm from '../Sales/InvoiceForm.vue';

export default {

    components: {
        AdminLayout,
        InvoiceForm,
        PageBreadcrumb
    },

    name: 'CreatePurchaseReturn',

    data() {
        return {
            purchaseReturnEndpoint: routeConstants.PURCHASE_RETURN,
        }
    }

}

</script>