<template>
    <div class="relative" ref="dropdownRef">
        <button @click="createInvoice"
            class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
        </button>
    </div>
</template>
<script lang="ts">
import { routeConstants } from '@/router/routeConstants';

export default {
    name: 'CreateInvoices',

    methods: {
        createInvoice() {
            this.$router.push(routeConstants.CREATE_SALES_INVOICE('new'));
        }
    }
}

</script>