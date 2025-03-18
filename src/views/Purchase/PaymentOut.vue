<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <PaymentOutList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import PaymentOutList from '@/components/PaymentOut/PaymentOutList.vue';

export default {

    components: {
        AdminLayout,
        PaymentOutList,
    },

    name: 'PaymentIn',

}
</script>