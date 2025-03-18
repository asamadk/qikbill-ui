<template>
    <div class="bg-white p-2 h-screen">
        <!-- Header -->
        <div class="flex justify-between items-center border-b pb-2">
            <Button @click="goBack" variant="outline">&larr; Exit POS [ESC]</Button>
            <h2 class="text-sm">POS Billing</h2>
            <Button @click="showSettings = true" variant="outline">Settings [CTRL + S]</Button>
        </div>

        <!-- Tabs -->
        <div class="flex items-center gap-2 border-b">
            <div class="border-r-1 border-gray-200">
                <p class="p-2 text-sm">Billing Screen 1 [CTRL + 1]</p>
            </div>
            <div class="border-r-1 border-gray-200">
                <p class="text-brand-500 p-2 text-sm cursor-pointer">+ Hold Bill & Create Another [CTRL + B]</p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 h-[calc(100vh-105px)]">
            <!-- Left section -->
            <div class="col-span-2 border-r-1">

                <!-- CRUD Buttons -->
                <div class="flex p-2">
                    <Button variant="outline">+ New Item [CTRL + I]</Button>
                    <Button class="ml-2" variant="outline">Change Price [P]</Button>
                    <Button class="ml-2" variant="outline">Change QTY [Q]</Button>
                    <Button class="ml-2" variant="outline"><span class="text-red-400">Delete Item</span> [DEL]</Button>
                </div>

                <!-- search input -->
                <div class="m-2 mt-1">
                    <!-- <SearchBar placeholder="Search by Item Name/Item Code" /> -->
                    <AutoComplete placeholder="Search by Item Name/Item Code" :suggestions="cities" />

                    <!-- Items row & details -->
                    <div class="mt-4 border rounded-lg w-full">
                        <!-- Table Header -->
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse">
                                <thead>
                                    <tr class="bg-gray-100 text-left text-xs">
                                        <td class="p-3 border-r">NO</td>
                                        <td class="p-3 border-r">ITEMS</td>
                                        <td class="p-3 border-r">ITEM CODE</td>
                                        <td class="p-3 border-r">MRP</td>
                                        <td class="p-3 border-r">SP (₹)</td>
                                        <td class="p-3 border-r">QUANTITY</td>
                                        <td class="p-3 border-r">AMOUNT (₹)</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <!-- Scrollable Table Body -->
                        <div class="overflow-y-auto h-[calc(100vh-355px)]">
                            <table class="w-full border-collapse">
                                <tbody>
                                    <tr v-for="(item, index) in items" :key="index" class="border-b text-sm hover:bg-gray-50">
                                        <td class="p-3 border-r">{{ index + 1 }}</td>
                                        <td class="p-3 border-r">{{ item.name }}</td>
                                        <td class="p-3 border-r">{{ item.code || '-' }}</td>
                                        <td class="p-3 border-r">₹ {{ item.mrp || '-' }}</td>
                                        <td class="p-3 border-r">₹ {{ item.sp }}</td>
                                        <td class="p-3 border-r">{{ item.quantity }}</td>
                                        <td class="p-3 border-r">₹ {{ item.amount }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Footer Section -->
                        <div class="flex justify-between items-center p-3 border-t bg-gray-100 text-sm">
                            <span>Total Items: {{ items.length }}</span>
                            <Button @click="clearItems" variant="outline"><span class="text-red-400">Clear All Items</span> [CTRL + C]</Button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right billing section -->
            <div class="flex flex-col h-full">
                <!-- Discount and additional -->
                <div class="flex pt-2">
                    <Button class="w-1/2" variant="outline">Add Discount [F2]</Button>
                    <Button class="w-1/2 ml-2" variant="outline">Add Additional Charge [F3]</Button>
                </div>

                <!-- Billing details -->
                <div class="border rounded-lg mt-4">
                    <div class="bg-gray-100 text-base p-2">Bill Details</div>
                    <div class="flex justify-between text-base p-2">
                        <p>Sub Total</p>
                        <p>₹ 100</p>
                    </div>
                    <div class="flex justify-between text-base p-2">
                        <p>Tax</p>
                        <p>₹ 10</p>
                    </div>
                    <div class="flex justify-between text-lg p-2 font-semibold bg-green-50">
                        <p>Total Amount</p>
                        <p>₹ 767</p>
                    </div>
                </div>

                <!-- Receiving details -->
                <div class="border rounded-lg mt-4">
                    <div class="bg-gray-100 text-base p-2">Received Amount</div>
                    <div class="flex justify-between text-base p-2">
                        <p class="mt-2">₹ 100</p>
                        <SelectInput />
                    </div>
                </div>

                <!-- Customer Details -->
                <div class="border rounded-lg mt-4">
                    <div class="bg-gray-100 text-base p-2">Customer Details</div>
                    <div class="flex justify-between text-base p-2">
                        <p class="mt-2">Samad</p>
                        <Button size="sm" variant="outline" :startIcon="EditIcon">Edit</Button>
                    </div>
                </div>

                <!-- Footer buttons (Stick to bottom) -->
                <div class="mt-auto flex mb-2">
                    <Button class="w-1/2" variant="outline">Save & Print [F6]</Button>
                    <Button class="w-1/2 ml-2">Save Bill [F7]</Button>
                </div>
            </div>
        </div>
        <PosSettings v-if="showSettings" @close="showSettings = false" />
    </div>
</template>

<script>
import AutoComplete from '@/components/forms/FormElements/AutoComplete.vue';
import SelectInput from '@/components/forms/FormElements/SelectInput.vue';
import SearchBar from '@/components/layout/header/SearchBar.vue';
import PosSettings from '@/components/pos/PosSettings.vue';
import Button from '@/components/ui/Button.vue';
import EditIcon from '@/icons/EditIcon.vue';

export default {
    components: {
        SearchBar,
        Button,
        EditIcon,
        AutoComplete,
        PosSettings,
    },
    name: "POS",

    data() {
        return {
            showSettings: false,
            cities: [
                { label: "New York", value: "nyc" },
                { label: "Los Angeles", value: "la" },
                { label: "Chicago", value: "chi" },
                { label: "Houston", value: "hou" },
                { label: "San Francisco", value: "sf" },
                { label: "Miami", value: "mia" },
                { label: "Seattle", value: "sea" }
            ],
            items: [
                { name: "Milk", code: "", mrp: "", sp: "60", quantity: "1 LTR", amount: "60" },
                { name: "Bread", code: "BRD123", mrp: "50", sp: "45", quantity: "1 Pack", amount: "45" },
                { name: "Butter", code: "BTR001", mrp: "200", sp: "180", quantity: "500g", amount: "180" },
                { name: "Eggs", code: "EGG10", mrp: "90", sp: "85", quantity: "10 pcs", amount: "85" },
                { name: "Rice", code: "RIC100", mrp: "500", sp: "480", quantity: "5 KG", amount: "480" },
                { name: "Oil", code: "OIL1L", mrp: "150", sp: "140", quantity: "1 LTR", amount: "140" },
                { name: "Sugar", code: "SUG1KG", mrp: "50", sp: "45", quantity: "1 KG", amount: "45" },
                { name: "Salt", code: "SLT500", mrp: "25", sp: "20", quantity: "500g", amount: "20" },
                { name: "Tea", code: "TEA250", mrp: "120", sp: "110", quantity: "250g", amount: "110" },
                { name: "Tea", code: "TEA250", mrp: "120", sp: "110", quantity: "250g", amount: "110" },
                { name: "Tea", code: "TEA250", mrp: "120", sp: "110", quantity: "250g", amount: "110" },
            ]
        };
    },

    methods: {
        goBack() {
            this.$router.back();
        },

        clearItems() {
            this.items = [];
        }
    }
};
</script>
