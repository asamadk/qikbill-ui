<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <QuotationList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import QuotationList from '@/components/Quotations/QuotationList.vue';

export default {

    components: {
        AdminLayout,
        QuotationList,
    },

    name: 'Quotation',

}
</script>