<script setup lang="ts">
import BoxCubeIcon from '@/icons/BoxCubeIcon.vue';
import CashIcon from '@/icons/CashIcon.vue';

</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <CashIcon/>
            </div>

            <div class="flex items-end justify-between mt-5">
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Stock Value</span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">1,93,400</h4>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <BoxCubeIcon/>
            </div>

            <div class="flex items-end justify-between mt-5">
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Low Stock</span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">5</h4>
                </div>
            </div>
        </div>
    </div>
</template>