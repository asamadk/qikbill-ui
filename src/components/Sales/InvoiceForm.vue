<template>
  <div>
    <!-- Invoice Header -->
    <div class="flex justify-between">
      <div class="w-3/4">
        <h2 class="text-sm">Bill To</h2>
        <div
          class="mt-2 text-sm w-4/5 border-2 border-dashed border-gray-400 p-4 rounded-md text-center cursor-pointer">
          + Add Party
        </div>
      </div>
      <div class="w-1/4 flex flex-col space-y-2">
        <div class="flex justify-between">
          <BasicInput label="Sales Invoice No" value="9" />
          <BasicInput class="ml-2" label="Sales Invoice Date" type="date" />
        </div>
        <div class="flex justify-between">
          <BasicInput label="Payment Terms" value="30" />
          <BasicInput class="ml-2" label="Due Date" type="date" />
        </div>
      </div>
    </div>

    <hr class="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

    <!-- Items Table -->
    <div class="mt-6 border rounded-md">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-100">
          <tr class="border-b">
            <td class="p-2 text-sm">No</td>
            <td class="p-2 text-sm">Items / Services</td>
            <td class="p-2 text-sm">HSN/SAC</td>
            <td class="p-2 text-sm">MRP</td>
            <td class="p-2 text-sm">QTY</td>
            <td class="p-2 text-sm">Price/Item (₹)</td>
            <td class="p-2 text-sm">Discount</td>
            <td class="p-2 text-sm">Tax</td>
            <td class="p-2 text-sm">Amount (₹)</td>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <td colspan="9" class="text-center p-4 text-blue-500 cursor-pointer text-sm">+ Add Item</td>
          </tr>
          <tr class="border-b">
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2"></td>
            <td class="p-2 text-sm">SUBTOTAL</td>
            <td class="p-2 text-sm">0</td>
            <td class="p-2 text-sm">34</td>
            <td class="p-2 text-sm">489</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr class="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

    <!-- Notes and Terms -->
    <div class="mt-4 flex">
      <div class="w-1/2">
        <p v-if="!showAddNotes" @click="showAddNotes = true" class="text-blue-500 cursor-pointer text-sm">+ Add Notes
        </p>
        <div v-if="showAddNotes" class="pr-3 rounded-md mt-2">
          <div class="flex justify-between">
            <h3 class="font-semibold text-sm">Notes</h3>
            <CloseIcon @click="showAddNotes = false" class="cursor-pointer mt-1" />
          </div>
          <TextArea :value="notesText" />
        </div>

        <p v-if="!showTC" @click="showTC = true" class="text-blue-500 cursor-pointer text-sm">+ Add Terms & Conditions
        </p>
        <div v-if="showTC" class="pr-3 rounded-md mt-2">
          <div class="flex justify-between">
            <h3 class="font-semibold text-sm">Terms and Conditions</h3>
            <CloseIcon @click="showTC = false" class="cursor-pointer mt-1" />
          </div>
          <TextArea :value="tcText" />
          <!-- <ul class="text-sm list-disc pl-5">
            <li>Goods once sold will not be taken back or exchanged</li>
            <li>All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction only</li>
          </ul> -->
        </div>
      </div>

      <!-- Amount Summary -->
      <div class="w-1/2 pl-6">
        <div v-if="showAdditionalCharge" class="flex justify-between" >
          <BasicInput label="" placeholder="Enter charge (ex: Transport) " />
          <div class="flex" >
            <OptionsInput placeholder="Enter Amount" />
            <CloseIcon @click="showAdditionalCharge = false" class="mt-5 text-sm cursor-pointer ml-2" />
          </div>
        </div>
        <div class="flex justify-between">
          <p @click="showAdditionalCharge = true" class="text-blue-500 cursor-pointer text-sm">
            + Add Additional Charges
          </p>
          <p class="text-sm">₹{{ additionalCharge }}</p>
        </div>
        <div class="text-sm flex justify-between mt-2">
          <span>Taxable Amount:</span>
          <span>₹ 0</span>
        </div>
        <div class="text-sm flex justify-between">
          <span>SGST@3</span>
          <span>₹ 1.7</span>
        </div>
        <div class="text-sm flex justify-between">
          <span>CGST@3</span>
          <span>₹ 1.4</span>
        </div>

        <p class="text-blue-500 cursor-pointer mt-2 text-sm">+ Add Discount</p>
        <div class="text-sm flex justify-between mt-2">
          <span>Discount:</span>
          <span>- ₹ 0</span>
        </div>
        <hr class="my-1 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <!-- <div class="flex items-center mt-2">
          <input type="checkbox" id="round-off" class="mr-2" />
          <label for="round-off">Auto Round Off</label>
        </div> -->
        <div class="flex justify-between font-semibold mt-4">
          <span>Total Amount:</span>
          <span>₹ 0</span>
        </div>
      </div>
    </div>

    <!-- Payment Section -->
    <div class="mt-6 border-t pt-4">
      <div class="text-sm flex justify-between">
        <span class="mt-3" >Amount Received:</span>
        <OptionsInput :options="paymentOptions" type="number" placeholder="Enter Amount" />
      </div>
      <CheckboxInput text="Mark as fully paid" />
      <hr class="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div class="flex justify-between mt-2 text-green-500 font-semibold">
        <span>Balance Amount:</span>
        <span>₹ 0</span>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-6 text-right">
      <p class="text-sm">Authorized signatory for <span class="font-semibold">Business Name</span></p>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/icons/CloseIcon.vue';
import BasicInput from '../forms/FormElements/BasicInput.vue';
import TextArea from '../forms/FormElements/TextArea.vue';
import OptionsInput from '../forms/FormElements/OptionsInput.vue';
import CheckboxInput from '../forms/FormElements/CheckboxInput.vue';
import { paymentOptions } from '@/constants/saleConstant';

export default {

  components: {
    BasicInput,
    CloseIcon,
    CheckboxInput,
    TextArea,
    OptionsInput
  },

  name: "InvoiceForm",

  data() {
    return {
      paymentOptions: paymentOptions,
      additionalCharge: 0,
      showAdditionalCharge: false,
      showAddNotes: false,
      showTC: true,
      notesText: '',
      tcText: `1. Goods once sold will not be taken back or exchanged 
2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction only`,
    }
  }
};
</script>