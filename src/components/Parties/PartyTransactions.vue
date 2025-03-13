<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex">
                <SelectInput disabledMenu="Select Transaction Type" />
                <SelectInput disabledMenu="Select Time period" class="ml-2" />
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
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Transaction Type</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Transaction Number</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Amount</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Status</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(transaction, index) in transactions" :key="index"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-gray-500 text-theme-sm">
                                        {{ transaction.date }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.type}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.number}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ transaction.amount }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <span class="rounded-full px-2 py-0.5 text-theme-xs font-medium bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                {{ transaction.status }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <Pagination
                class="end"
                :total-items="totalParties"
                :items-per-page="itemsPerPage"
                @page-changed="handlePageChange"
            />
        </div>
    </div>
</template>
<script lang="ts">
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Pagination from '../ui/Pagination.vue';

export default {
    components: {
        Pagination,
        SelectInput,
    },

    name: 'PartyTransactions',

    data() {
        return {
            transactions: [
                {date: '12/05/2025',type: 'Sales Return',number: '1',amount: '5000',status: 'paid'},
            ],
            totalParties: 10,
            itemsPerPage: 5,
        }
    },
    methods: {
        handlePageChange(page: number) {
            console.log(page);
        }
    }
}
</script>