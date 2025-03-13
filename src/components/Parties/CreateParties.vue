<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb pageTitle="Create Party" />
            <div class="grid grid-cols-1 md:grid-cols-4">
                <BasicInput label="Party Name*" placeholder="Enter party name" />
                <BasicInput label="Mobile" placeholder="Enter mobile" type="number" />
                <BasicInput label="Email" placeholder="Enter email" type="email" />
                <BasicInput label="Opening Balance" placeholder="Enter opening balance" type="number" />
            </div>
            <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                <BasicInput label="GSTIN" placeholder="ex: 21XXXXX9438X1XX" />
                <BasicInput label="Pan Number" placeholder="Enter party PAN number" />
            </div>
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                <SelectInput class="mr-5" label="Party Type" disabledMenu="Select type" />
                <SelectInput label="Party Categories" disabledMenu="Select category" />
            </div>
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div class="grid grid-cols-1 md:grid-cols-4">
                <BasicInput label="Street Address" />
                <SelectInput class="mr-5" label="State" disabledMenu="Select state" />
                <BasicInput label="PinCode" placeholder="Select PinCode" type="number" />
                <BasicInput label="City" placeholder="Select City" />
            </div>
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div class="grid grid-cols-1 md:grid-cols-4">
                <BasicInput label="Credit Period(Days)" placeholder="eg : 30" type="number" />
                <BasicInput label="Credit Limit" placeholder="eg : 5000" type="number" />
            </div>
            <div class="mt-5 flex justify-end" >
                <Button @click="goBack" size="sm" variant="outline"> Cancel </Button>
                <Button class="ml-2" size="sm" variant="primary"> Save </Button>
            </div>
        </div>
    </admin-layout>
</template>
<script lang="ts">
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import BasicInput from '../forms/FormElements/BasicInput.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';

export default {
    components: {
        AdminLayout,
        BasicInput,
        Button,
        PageBreadcrumb,
        SelectInput,
    },
    name: 'CreateParties',
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>