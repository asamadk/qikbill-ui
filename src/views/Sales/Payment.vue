<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <PaymentInList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import PaymentInList from '@/components/PaymentIn/PaymentInList.vue';

export default {

    components: {
        AdminLayout,
        PaymentInList,
    },

    name: 'PaymentIn',

}
</script>