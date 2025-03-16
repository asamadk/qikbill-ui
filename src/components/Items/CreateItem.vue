<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb pageTitle="Create New Item" />
            
            <div>
                <p class="font-semibold" >Basic Details</p>
                <div class="grid grid-cols-1 md:grid-cols-4">
                    <div class=" mt-4" >
                        <CheckboxInput :checked="isItemTypeChecked('product')" @input="changeItemType('product')" text="Product" />

                        <CheckboxInput :checked="isItemTypeChecked('service')" @input="changeItemType('service')" class="mt-2" text="Service" />
                    </div>
                    <BasicInput label="Item Name*" placeholder="Enter item name" />
                    <SelectInput class="mr-5 ml-5" label="Category" disabledMenu="Select category" />
                    <SelectInput label="Measuring Units" disabledMenu="Select unit" />
                </div>
            </div>
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div>
                <p class="font-semibold" >Stock Details</p>
                <div class="mt-2 grid grid-cols-1 md:grid-cols-4">
                    <BasicInput label="Item code" placeholder="ex: ITM12589" />
                    <BasicInput class="ml-5" label="HSN code" placeholder="ex: 4010" />
                    <BasicInput class="ml-5" label="Low stock quantity" placeholder="ex: 10 LTRS" />
                </div>
            </div>
            
            <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div>
                <p class="font-semibold" >Pricing Details</p>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                    <OptionsInput :options="taxes" label="Sales Price (₹)" placeholder="ex: 200" />
                    <OptionsInput class="ml-5" :options="taxes" label="Purchase Price (₹)" placeholder="ex: 200" />
                    <BasicInput class="ml-5" label="Maximum Retail Price MPR (₹)" placeholder="ex: 200" />
                    <SelectInput class="ml-5" label="GST Tax Rate(%)" disabledMenu="Select GST" />

                    <OptionsInput class="mt-4" :options="taxes" label="Wholesale Price (₹)" placeholder="ex: 200" />
                    <BasicInput class="mt-4 ml-5" label="Wholesale Quantity" placeholder="ex: 100 LTR" />
                </div>
            </div>

            <!-- <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

            <div>
                <p class="font-semibold" >Party wise pricing</p>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                </div>
            </div> -->
            
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
import CheckboxInput from '../forms/FormElements/CheckboxInput.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import OptionsInput from '../forms/FormElements/OptionsInput.vue';
import { taxChoice } from '@/constants/itemConstants';

export default {
    components: {
        AdminLayout,
        BasicInput,
        Button,
        CheckboxInput,
        PageBreadcrumb,
        SelectInput,
        OptionsInput,
    },
    name: 'CreateItem',

    data(){
        return {
            type : 'product' as 'product' | 'service',
            taxes: taxChoice
        }
    },

    computed: {
        isItemTypeChecked() {
            return (val: string) => val === this.type;
        }
    },

    methods: {
        goBack() {
            this.$router.go(-1);
        },

        changeItemType(item: string) {
            console.log("🚀 ~ changeItemType ~ item:", item)
            this.type = item;
        }
    }
}
</script>