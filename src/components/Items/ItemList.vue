<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex">
                <input
                    type="text"
                    placeholder="Search items"
                    class="dark:bg-dark-900 h-11 rounded-lg border border-gray-200 bg-transparent py-2.5 pl-5 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
                <SelectInput disabledMenu="Select category" class="ml-2" />
                <Button class="ml-2" size="sm" variant="outline"> Show low stock </Button>
            </div>

            <div class="flex items-center gap-3">
                <IconButton @click="showSettings = true" >
                    <SettingsIcon/>
                </IconButton>
                <router-link :to="createItems" >
                    <Button size="sm" variant="primary"> Create Items </Button>
                </router-link>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Item Name</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Item Code</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Stock QTY</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Selling Price</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Purchase Price</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">MRP</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Wholesale Price</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index"
                        @click="handleOpenItemDetails(item)"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">

                                <div>
                                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                        {{ item.name }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.code}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.qty}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.sellingPrice }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.purchasePrice }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.mrp }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.wholesalePrice }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <Pagination
                class="end"
                :total-items="totalItems"
                :items-per-page="itemsPerPage"
                @page-changed="handlePageChange"
            />
        </div>
    </div>
    <ItemDetail v-if="isDrawerOpen" @close="isDrawerOpen = false"/>
    <ItemSettings v-if="showSettings" @close="showSettings = false" />
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Button from '../ui/Button.vue';
import Pagination from '../ui/Pagination.vue';
import AppDrawer from '../layout/AppDrawer.vue';
import ItemDetail from './ItemDetail.vue';
import IconButton from '../ui/IconButton.vue';
import SettingsIcon from '@/icons/SettingsIcon.vue';
import ItemSettings from './ItemSettings.vue';

export default {
    components: {
        AppDrawer,
        Button,
        SelectInput,
        Pagination,
        ItemDetail,
        IconButton,
        SettingsIcon,
        ItemSettings,
    },
    name: 'ItemsList',
    computed: {
        totalItems(): number {
            return this.items.length;
        }
    },
    data() {
        return {
            items: [
                {   
                    id: '1',
                    name: 'Milk',
                    code: 'XYC-112',
                    qty: '80 LTR',
                    sellingPrice: '58',
                    purchasePrice: '45',
                    mrp: '60',
                    wholesalePrice: '55'
                },
                {   
                    id: '2',
                    name: 'Apples',
                    code: 'XYC-113',
                    qty: '100 PETI',
                    sellingPrice: '400',
                    purchasePrice: '330',
                    mrp: '410',
                    wholesalePrice: '390'
                },
            ],
            createItems: routeConstants.CREATE_ITEMS('new'),
            itemsPerPage: 10,
            currentPage: 1,
            isDrawerOpen: false,
            showSettings: false
        }
    },
    methods: {
        handlePageChange(page: number) {
            this.currentPage = page;
            // Fetch new data based on the current page
        },

        handleOpenItemDetails(item: any) {
            this.isDrawerOpen = true;
            this.$router.push(routeConstants.EDIT_ITEMS(item.id));
        },
    },
    watch: {
        '$route'(to) {
            if (to.fullPath === routeConstants.ITEMS) {
                this.isDrawerOpen = false;
            } else {
                this.isDrawerOpen = true;
            }
        }
    },
    created() {
        if (this.$route.fullPath.includes('/items/edit')) {
            this.isDrawerOpen = true;
        }
    }
}
</script>