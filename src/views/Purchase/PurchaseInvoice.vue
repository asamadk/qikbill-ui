<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <Metrics />
            </div>

            <div class="col-span-12">
                <PurchaseInvoiceList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import Metrics from '@/components/Purchase/Metrics.vue';
import PurchaseInvoiceList from '@/components/Purchase/PurchaseInvoiceList.vue';

export default {

    components: {
        AdminLayout,
        Metrics,
        PurchaseInvoiceList,
    },

    name: 'PurchaseInvoices',
}
</script>