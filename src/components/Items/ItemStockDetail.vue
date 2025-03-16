<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <SelectInput disabledMenu="Select Time period" class="ml-2" />
            </div>
            <div>
                <Button variant="outline" >Download PDF</Button>
                <Button class="ml-2" variant="outline" >Download Excel</Button>
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
                    <tr v-for="(stock, index) in stockDetails" :key="index"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">
                                <div>
                                    <p class="text-gray-500 text-theme-sm">
                                        {{ stock.date }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ stock.type}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ stock.qty}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ stock.invoice.number }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ stock.closingStock }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <Pagination
                class="end"
                :total-items="totalStock"
                :items-per-page="itemsPerPage"
                @page-changed="handlePageChange"
            />
        </div>
    </div>
</template>
<script lang="ts">
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Button from '../ui/Button.vue';
import Pagination from '../ui/Pagination.vue';

export default {
    components: {
        Button,
        Pagination,
        SelectInput,
    },

    name: 'ItemStockDetail',

    data() {
        return {
            stockDetails: [
                {date: '12/05/2025',type: 'Sales Return',qty: '45 LTR',invoice: {number: '12'},closingStock: '497 LTR'},
            ],
            totalStock: 10,
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