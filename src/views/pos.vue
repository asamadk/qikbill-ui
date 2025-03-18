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
            <div class="border-r-1 border-gray-200" >
                <p class="p-2 text-xs" >Billing Screen 1 [CTRL + 1]</p>
            </div>
            <div class="border-r-1 border-gray-200" >
                <p class="text-brand-500 p-2 text-xs cursor-pointer" >+ Hold Bill & Create Another [CTRL + B]</p>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <!-- Left section -->
            <div class="col-span-2 border-r-1">04</div>
            
            <!-- billing and total section -->
            <div>
                <!-- Discount and additional -->
                <div class="flex pt-2" >
                    <Button class="w-1/2" variant="outline">Add Discount [F2]</Button>
                    <Button class="w-1/2 ml-2" variant="outline">Add Additional Charge [F3]</Button>
                </div>

                <!-- Billing details -->
                <div class="border rounded-lg mt-4 rounded-lg" >
                    <div class="bg-gray-100 text-base p-2" >Bill Details</div>
                    <div class="flex justify-between text-base p-2" >
                        <p>Sub Total</p>
                        <p>₹ 100</p>
                    </div>
                    <div class="flex justify-between text-base p-2" >
                        <p>Tax</p>
                        <p>₹ 10</p>
                    </div>
                    <div class="flex justify-between text-lg p-2 font-semibold bg-green-50" >
                        <p>Total Amount</p>
                        <p>₹ 767</p>
                    </div>
                </div>

                <!-- Receiving details -->
                <div class="border rounded-lg mt-4 rounded-lg" >
                    <div class="bg-gray-100 text-base p-2" >Received Amount</div>
                    <div class="flex justify-between text-base p-2" >
                        <p class="mt-2" >₹ 100</p>
                        <SelectInput/>
                    </div>
                </div>

                <!-- Customer Details -->
                <div class="border rounded-lg mt-4 rounded-lg" >
                    <div class="bg-gray-100 text-base p-2" >Customer Details</div>
                    <div class="flex justify-between text-base p-2" >
                        <p class="mt-2" >Samad</p>
                        <Button size="sm" variant="outline" :startIcon="EditIcon" >Edit</Button>
                    </div>
                </div>

                <!-- Footer buttons -->
                <div class="mt-4 flex" >
                    <Button class="w-1/2" variant="outline">Save & Print [F6]</Button>
                    <Button class="w-1/2 ml-2" >Save Bill [F7]</Button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import SelectInput from '@/components/forms/FormElements/SelectInput.vue';
import Button from '@/components/ui/Button.vue';
import EditIcon from '@/icons/EditIcon.vue';

export default {
    components: {
        Button,
        SelectInput
    },
    name: "POS",

    methods: {
        goBack() {
            this.$router.back();
        }
    }
};
</script>