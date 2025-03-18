<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="paymentOutEndpoint" :showBackButton="true" path="PaymentOut"
                pageTitle="Record Payment Out" />
            
            <!-- Body -->
            <div class="flex justify-between">
                <div class="mt-4 p-4 w-1/2 rounded-md">
                    <SelectInput label="Party Name" disabled-menu="Select party by name or number" />
                    <BasicInput class="mt-5" label="Enter payment amount" placeholder="0" type="number" />
                </div>

                <div class="p-4 w-1/2 ml-2 rounded-md mt-4">
                    <div class="flex" >
                        <BasicInput class="w-1/2 mr-2" label="Payment Date" type="date" />
                        <SelectInput class="w-1/2" label="Payment Mode" disabled-menu="Select Mode" />
                    </div>
                    <TextArea class="mt-5" label="Notes" placeholder="Enter notes" />
                </div>
            </div>

            <!-- Footer -->
            <div class="mt-5 flex justify-end rounded-b dark:border-gray-600">
                <Button variant="outline">
                    Cancel
                </Button>
                <Button class="ml-2">
                    Save
                </Button>
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import BasicInput from '../forms/FormElements/BasicInput.vue';
import TextArea from '../forms/FormElements/TextArea.vue';

export default {

    components: {
        AdminLayout,
        PageBreadcrumb,
        Button,
        SelectInput,
        BasicInput,
        TextArea
    },

    name: 'CreatePaymentOut',

    data() {
        return {
            paymentOutEndpoint: routeConstants.PAYMENT_OUT,
        }
    }

}
</script>