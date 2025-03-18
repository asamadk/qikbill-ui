<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <PurchaseReturnList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import PurchaseReturnList from '@/components/PurchaseReturn/PurchaseReturnList.vue';

export default {

    components: {
        AdminLayout,
        PurchaseReturnList,
    },

    name: 'PurchaseReturn',

}
</script>