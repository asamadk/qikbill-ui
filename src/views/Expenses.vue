<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <ExpenseList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import ExpenseList from '@/components/Expenses/ExpenseList.vue';
import AdminLayout from '@/components/layout/AdminLayout.vue';

export default {

    components: {
        AdminLayout,
        ExpenseList,
    },

    name: 'Expenses',

}
</script>