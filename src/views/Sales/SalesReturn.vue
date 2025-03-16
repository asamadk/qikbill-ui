<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <SalesReturnList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue';
import SalesReturnList from '@/components/SalesReturn/SalesReturnList.vue';

export default {

    components: {
        AdminLayout,
        SalesReturnList,
    },

    name: 'SalesReturn',

}
</script>