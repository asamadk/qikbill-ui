<template>
    <AdminLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="reportPath" :showBackButton="true" path="Reports"
                pageTitle="Balance Sheet (As of today)" />
            <div class="flex justify-between">
                <div class="text-xs bg-brand-50 rounded-lg">
                    <p class="mt-2 p-2">
                        Balance sheet is updated once per day. Last updated at:
                        <span class="text-brand-500 font-semibold">{{ updatedAt }}</span>
                    </p>
                </div>
                <div>
                    <Button class="ml-2" variant="outline">Download Excel</Button>
                </div>
            </div>
            <!-- <div class="grid grid-cols-4 gap-4 sm:grid-cols-2 md:gap-1 mt-5">
                <div class="border gray-100 p-2" >
                    <p class="text-xs text-gray-500" >LIABILITIES</p>
                </div>
                <div class="border gray-100 p-2" >
                    <p class="text-xs text-gray-500" >ASSETS</p>
                </div>

                <div class="border gray-100 p-2 flex justify-between bg-brand-50">
                    <p>Capital</p>
                    <p>0</p>
                </div>
                <div class="border gray-100 p-2 flex justify-between bg-brand-50">
                    <p>Current Assets</p>
                    <p>35,848.07</p>
                </div>
            </div> -->
            <div class="grid grid-cols-2 gap-4 mt-5">
                <!-- Liabilities Column -->
                <div class="border p-2 rounded-lg">
                    <h2 class="text-xs pb-2 mb-2 text-gray-500">LIABILITIES</h2>
                    <div v-for="(section, index) in liabilities" :key="index" class="mb-4">
                        <div class="flex justify-between items-center border-b p-2 bg-brand-50 rounded-lg">
                            <h3 class="text-sm font-semibold">{{ section.title }}</h3>
                            <span class="text-sm font-semibold">₹ {{ section.total }}</span>
                        </div>
                        <div class="mt-2">
                            <div v-for="(entry, i) in section.entries" :key="i">
                                <div class="flex justify-between">
                                    <span class="text-sm p-2">{{ entry.name }}</span>
                                    <span class="text-sm p-2">₹ {{ entry.amount }}</span>
                                </div>
                                <hr class="border-t text-gray100" />
                                <div class="mt-2">
                                    <div v-for="(subEntry, i) in entry.subEntries" :key="i">
                                        <div class="flex justify-between pl-4">
                                            <span class="text-sm p-2">{{ subEntry.name }}</span>
                                            <span class="text-sm p-2">₹ {{ subEntry.amount }}</span>
                                        </div>
                                        <hr class="border-t text-gray100" />
                                    </div>
                                    <div v-if="entry.subEntries" class="flex justify-between pl-4">
                                        <p class="text-sm text-brand-500 p-2 cursor-pointer">Add new entry +</p>
                                        <hr class="border-t text-gray100" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="section.addEntries" class="flex justify-between">
                                <p class="text-sm text-brand-500 p-2 cursor-pointer">Add new entry +</p>
                                <hr class="border-t text-gray100" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Assets Column -->
                <div class="border p-2 rounded-lg">
                    <h2 class="text-xs pb-2 mb-2 text-gray-500">ASSETS</h2>
                    <div v-for="(section, index) in assets" :key="index" class="mb-4">
                        <div class="flex justify-between items-center border-b p-2 bg-brand-50 rounded-lg">
                            <h3 class="text-sm font-semibold">{{ section.title }}</h3>
                            <span class="text-sm font-semibold">₹ {{ section.total }}</span>
                        </div>
                        <div class="mt-2">
                            <div v-for="(entry, i) in section.entries" :key="i">
                                <div class="flex justify-between">
                                    <span class="text-sm p-2">{{ entry.name }}</span>
                                    <span class="text-sm p-2">₹ {{ entry.amount }}</span>
                                </div>
                                <hr class="border-t text-gray100" />
                                <div class="mt-2">
                                    <div v-for="(subEntry, i) in entry.subEntries" :key="i">
                                        <div class="flex justify-between pl-4">
                                            <span class="text-sm p-2">{{ subEntry.name }}</span>
                                            <span class="text-sm p-2">₹ {{ subEntry.amount }}</span>
                                        </div>
                                        <hr class="border-t text-gray100" />
                                    </div>
                                    <div v-if="entry.subEntries" class="flex justify-between pl-4">
                                        <p class="text-sm text-brand-500 p-2 cursor-pointer">Add new entry +</p>
                                        <hr class="border-t text-gray100" />
                                    </div>
                                </div>
                            </div>
                            <div v-if="section.addEntries" class="flex justify-between">
                                <p class="text-sm text-brand-500 p-2 cursor-pointer">Add new entry +</p>
                                <hr class="border-t text-gray100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';

export default {
    components: {
        AdminLayout,
        Button,
        PageBreadcrumb,
        SelectInput,
    },

    name: 'Balance Sheet',

    data() {
        return {
            reportPath: routeConstants.REPORTS,
            updatedAt: new Date().toDateString(),
            liabilities: [
                { title: 'Capital', total: 5193, entries: [], addEntries: true },
                { title: 'Current Liability', total: 5193, entries: [
                    { name: 'Tax Payable', amount: 5193, subEntries: [{name: 'Tcs payable',amount: '0'},{name: 'Tds payable',amount: '0'}, ] },
                    { name: 'Account Payable', amount: 5193, subEntries: undefined },
                ],addEntries: false },
                { title: 'Loans', total: 0, entries: [],addEntries: true },
                { title: 'Net Income', total: 35697.89, entries: [],addEntries: false },
                { title: 'Total Liabilities', total: 10000,addEntries: false },
            ],
            assets: [
                {
                    title: 'Current Assets', total: 35848.07, entries: [
                        { name: 'Tax Receivable', amount: 241, subEntries: [{ name: 'TCS Receivable', amount: '0' }, { name: 'TDS Receivable', amount: '0' }] },
                        { name: 'Cash In Hand', amount: 10232, subEntries: undefined },
                        { name: 'Cash In Bank', amount: -3995, subEntries: undefined },
                        { name: 'Accounts Receivable', amount: 5000, subEntries: undefined },
                        { name: 'Inventory In Hand', amount: 24611.07, subEntries: undefined }
                    ], addEntries: false
                },
                { title: 'Fixed Assets', total: 0, entries: [], addEntries: true },
                { title: 'Investments', total: 10000, entries: [{ name: 'Clothes', amount: 10000, subEntries: undefined }], addEntries: true },
                { title: 'Loans Advance', total: 10000, entries: [{ name: 'Clothes', amount: 10000, subEntries: undefined }], addEntries: true },
                { title: 'Total Assets', total: 10000, entries: [], addEntries: false },
            ]
        }
    }
} 
</script>