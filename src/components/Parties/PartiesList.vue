<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90 mt-2">Parties</h3>
                <input
                    type="text"
                    placeholder="Search party"
                    class="ml-2 dark:bg-dark-900 h-11 rounded-lg border border-gray-200 bg-transparent py-2.5 pl-5 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
                <SelectInput disabledMenu="Select category" class="ml-2" />
            </div>

            <div class="flex items-center gap-3">
                <router-link :to="createParties" >
                    <Button size="sm" variant="primary"> Create Parties </Button>
                </router-link>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Party Name</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Category</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Mobile Number</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Party type</p>
                        </th>
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Balance</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(party, index) in parties" :key="index"
                        @click="handleOpenPartyDetails(party)"
                        class="border-t border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-100">
                        <td class="py-3 whitespace-nowrap">
                            <div class="flex items-center gap-3">

                                <div>
                                    <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                        {{ party.name }}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ party.category.name}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ party.phone}}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ party.type }}</p>
                        </td>
                        <td class="py-3 whitespace-nowrap">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ party.balance }}</p>
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
        <PartyDetails v-if="isDrawerOpen" @close="isDrawerOpen = false"/>
    </div>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import Button from '../ui/Button.vue';
import Pagination from '../ui/Pagination.vue';
import AppDrawer from '../layout/AppDrawer.vue';
import PartyDetails from './PartyDetails.vue';

export default {
    components: {
        AppDrawer,
        Button,
        SelectInput,
        Pagination,
        PartyDetails
    },
    name: 'PartiesList',
    computed: {
        totalParties(): number {
            return this.parties.length;
        }
    },
    data() {
        return {
            parties: [
                {   
                    id: '1',
                    name: 'Hyper Market',
                    category: {
                        name: 'Supplier',
                    },
                    phone: '1234567890',
                    type: 'Customer',
                    balance: '4500',
                },
                {
                    id: '2',
                    name: 'Hyper Market',
                    category: {
                        name: 'Supplier',
                    },
                    phone: '1234567890',
                    type: 'Customer',
                    balance: '4500',
                }
            ],
            createParties: routeConstants.CREATE_PARTIES('new'),
            itemsPerPage: 10,
            currentPage: 1,
            isDrawerOpen: false,
        }
    },
    methods: {
        handlePageChange(page: number) {
            this.currentPage = page;
            // Fetch new data based on the current page
        },
        handleOpenPartyDetails(party: any) {
            this.isDrawerOpen = true;
            this.$router.push(routeConstants.EDIT_PARTIES(party.id));
        }
    },
    watch: {
        '$route'(to) {
            if (to.fullPath === routeConstants.PARTIES) {
                this.isDrawerOpen = false;
            } else {
                this.isDrawerOpen = true;
            }
        }
    },
    created() {
        if (this.$route.fullPath.includes('/parties/edit')) {
            this.isDrawerOpen = true;
        }
    }
}
</script>