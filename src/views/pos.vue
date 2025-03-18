<template>
    <div class="bg-white p-2 h-screen">
        <!-- Header -->
        <div class="flex justify-between items-center border-b pb-2">
            <Button @click="goBack" variant="outline">&larr; Exit POS [ESC]</Button>
            <h2 class="text-sm">POS Billing</h2>
            <Button variant="outline">Settings [CTRL + S]</Button>
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
    </div>
</template>

<script>
import AutoComplete from '@/components/forms/FormElements/AutoComplete.vue';
import SelectInput from '@/components/forms/FormElements/SelectInput.vue';
import SearchBar from '@/components/layout/header/SearchBar.vue';
import Button from '@/components/ui/Button.vue';
import EditIcon from '@/icons/EditIcon.vue';

export default {
    components: {
        SearchBar,
        Button,
        AutoComplete,
    },
    name: "POS",

    data() {
        return {
            cities: [
                { label: "New York", value: "nyc" },
                { label: "Los Angeles", value: "la" },
                { label: "Chicago", value: "chi" },
                { label: "Houston", value: "hou" },
                { label: "San Francisco", value: "sf" },
                { label: "Miami", value: "mia" },
                { label: "Seattle", value: "sea" }
            ],
        };
    },

    methods: {
        goBack() {
            this.$router.back();
        }
    }
};
</script>
