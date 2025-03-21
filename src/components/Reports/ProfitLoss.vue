<template>
    <AdminLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="reportPath" :showBackButton="true" path="Reports"
                pageTitle="Profit And Loss Report" />
            <div class="flex justify-between">
                <SelectInput disabled-menu="Select Time Period" />
                <div>
                    <Button variant="outline">Download PDF</Button>
                    <Button class="ml-2" variant="outline">Print PDF</Button>
                    <Button class="ml-2" variant="outline">Print Thermal</Button>
                </div>
            </div>
            <div class="mt-10 max-w-full overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-t border-gray-100">
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">PARTICULARS</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">AMOUNT</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in reportData" :key="index"
                            class="border-t border-gray-100 dark:border-gray-800">
                            <td class="py-3 whitespace-nowrap">
                                <div class="flex items-center gap-3">

                                    <div>
                                        <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {{ item.particulars }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ item.amount }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';

export default {
    components: {
        AdminLayout,
        PageBreadcrumb,
        SelectInput,
        Button
    },

    name: 'ProfitLoss',

    data() {
        return {
            reportPath: routeConstants.REPORTS,
            reportData : [
                { particulars: 'Sales(+)', amount: '-' },
                { particulars: 'Cr. Note/Sale Return(-)', amount: '-' },
                { particulars: 'Purchase(-)', amount: '-' },
            ]
        }
    }
}
</script>