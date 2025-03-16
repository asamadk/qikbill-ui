<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <BasicInput label="" placeholder="Search party name" />
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Party Name</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Sales Price</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(price, index) in prices" :key="index"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">
                                <p class="text-gray-500 text-theme-sm">
                                    {{ price.party.name }}
                                </p>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ price.price}}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <Pagination
                class="end"
                :total-items="totalPrices"
                :items-per-page="itemsPerPage"
                @page-changed="handlePageChange"
            />
        </div>
    </div>
</template>
<script lang="ts">
import BasicInput from '../forms/FormElements/BasicInput.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Button from '../ui/Button.vue';
import Pagination from '../ui/Pagination.vue';

export default {
    components: {
        BasicInput,
        Button,
        Pagination,
        SelectInput,
    },

    name: 'ItemPartyPrices',

    data() {
        return {
            prices: [
                {party : {name: 'Abdul Samad'},price: '100'},
            ],
            totalPrices: 10,
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