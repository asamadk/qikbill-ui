<template>
    <admin-layout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <PageBreadcrumb :backPath="expenseEndpoint" :showBackButton="true" path="Expense"
                pageTitle="Create Expense" />

            <!-- Body -->
            <div class="flex justify-between">
                <div class="mt-4 p-4 w-1/2 rounded-md">
                    <div class="border p-3 rounded-md flex justify-between">
                        <div>
                            <p class="text-sm">Expense with GST</p>
                        </div>
                        <ToggleSwitch />
                    </div>
                    <SelectInput class="mt-5" label="Party Name" disabled-menu="Select party by name or number" />
                    <SelectInput class="mt-5" label="Expense Category" disabled-menu="Select category" />
                    <BasicInput class="mt-5" label="Enter expense number" placeholder="0" type="number" />
                </div>

                <div class="p-4 w-1/2 ml-2 rounded-md mt-4">
                    <div class="flex">
                        <BasicInput class="w-1/2 mr-2" label="Date" type="date" />
                        <SelectInput class="w-1/2" label="Payment Mode" disabled-menu="Select Mode" />
                    </div>
                    <TextArea class="mt-5" label="Notes" placeholder="Enter notes" />
                </div>
            </div>
            <div class="p-4 mx-auto">
                <table class="w-full border-collapse border border-gray-100">
                    <thead class="bg-gray-100 text-xs">
                        <tr>
                            <td class="p-2 border">NO</td>
                            <td class="p-2 border">ITEMS</td>
                            <td class="p-2 border">HSN</td>
                            <td class="p-2 border">QTY</td>
                            <td class="p-2 border">PRICE/ITEM</td>
                            <td class="p-2 border">DISCOUNT</td>
                            <td class="p-2 border">TAX</td>
                            <td class="p-2 border">AMOUNT</td>
                            <td class="p-2 border">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center text-xs">
                            <td class="p-2 border">1</td>
                            <td class="p-2 border">Rent</td>
                            <td class="p-2 border"></td>
                            <td class="p-2 border">
                                <input type="number" v-model="qty" class="w-16 p-1 border rounded" />
                            </td>
                            <td class="p-2 border">
                                <input type="number" v-model="price"
                                    class="w-24 p-1 border rounded" />
                            </td>
                            <td class="p-2 border">
                                <input type="number" v-model="discount" class="w-16 p-1 border rounded" />%
                                <br/>
                                <input  type="number" v-model="discount" class="w-16 mt-2 p-1 border rounded" />%
                            </td>
                            <td class="p-2 border">
                                <input type="number" v-model="discount" class="w-16 mt-2 p-1 border rounded" />% <br />
                                <input v-model="discount" value="Ineligible" class="w-16 mt-2 p-1 border rounded" />
                            </td>
                            <td class="p-2 border">
                                ₹ <input type="number" v-model="totalAmount"
                                    class="w-24 p-1 border rounded" />
                            </td>
                            <td class="p-2 border cursor-pointer">
                                <DeleteIcon class="ml-4" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-center mt-4 text-blue-500 cursor-pointer">+ Add Item</div>
                <div class="mt-6 p-4 border-t text-sm">
                    <div class="flex justify-between text-sm">
                        <span class="text-brand-500" >+ Add Additional Charges</span>
                        <span>₹ 0</span>
                    </div>
                    <div class="flex justify-between mt-2">
                        <span>Taxable Amount</span>
                        <span>₹ {{ totalAmount }}</span>
                    </div>
                    <div class="flex justify-between mt-2">
                        <span class="text-brand-500">+ Add Discount</span>
                        <span>- ₹ 0</span>
                    </div>
                    <div class="flex justify-between text-lg mt-4">
                        <span>Total Amount</span>
                        <span>₹ {{ totalAmount }}</span>
                    </div>
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
import ToggleSwitch from '../forms/FormElements/ToggleSwitch.vue';
import DeleteIcon from '@/icons/DeleteIcon.vue';

export default {

    components: {
        AdminLayout,
        PageBreadcrumb,
        Button,
        SelectInput,
        BasicInput,
        TextArea,
        ToggleSwitch,
        DeleteIcon
    },

    name: 'CreateExpense',

    computed: {
        totalAmount() {
            return this.qty * this.price * (1 - this.discount / 100);
        },
    },

    data() {
        return {
            expenseEndpoint: routeConstants.EXPENSES,
            qty: 1,
            price: 5000,
            discount: 0,
        }
    },

    methods: {
        removeItem() {
            this.qty = 0;
            this.price = 0;
        },
    },

}
</script>