<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Latest Transactions</h3>
            </div>

            <div class="flex items-center gap-3">
                <button
                    class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
                    See all Transactions
                </button>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Date</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Type</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">TXN NO</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Party</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Amount</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(transaction, index) in transactions" :key="index"
                        class="border-t border-gray-100 dark:border-gray-800">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">

                                <div>
                                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                        {{ transaction.date }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <span class="rounded-full px-2 py-0.5 text-theme-xs font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                {{ transaction.type }}
                            </span>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.transactionNumber
                                }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.party.name }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.amount }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const transactions = ref([
    {
        date: new Date().toLocaleDateString(),
        type: 'Sales Invoice',
        transactionNumber: '#12',
        party: {
            name: 'John Doe',
        },
        amount: '4500',
    },
    {
        date: new Date().toLocaleDateString(),
        type: 'Expense',
        transactionNumber: '#12',
        party: {
            name: 'John Doe',
        },
        amount: '4500',
    },
    {
        date: new Date().toLocaleDateString(),
        type: 'Reduce Money',
        transactionNumber: '#12',
        party: {
            name: 'John Doe',
        },
        amount: '4500',
    },
])
</script>