<template>
    <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-300">
        <div class="flex justify-between mb-4">
            <div>
                <h1 class="font-bold">Business Name</h1>
                <p class="text-sm">Mobile: 7007475550</p>
            </div>
            <div class="text-right">
                <p class="text-sm">Invoice No: <span class="font-semibold">8</span></p>
                <p class="text-sm">Invoice Date: <span class="font-semibold">12/03/2025</span></p>
            </div>
        </div>

        <div class="border p-4 mb-4 rounded-md">
            <h2 class="text-xs font-semibold">BILL TO</h2>
            <p class="text-xs">CASH SALE</p>
            <p class="text-xs">Mobile: 7007475550</p>
        </div>

        <table class="w-full border-collapse border border-gray-300 mb-4">
            <thead>
                <tr class="text-xs bg-gray-100">
                    <td class="border px-4 py-2">S.NO.</td>
                    <td class="border px-4 py-2">ITEMS</td>
                    <td class="border px-4 py-2">QTY.</td>
                    <td class="border px-4 py-2">RATE</td>
                    <td class="border px-4 py-2">TAX</td>
                    <td class="border px-4 py-2">AMOUNT</td>
                </tr>
            </thead>
            <tbody>
                <tr class="text-xs">
                    <td class="border px-4 py-2">1</td>
                    <td class="border px-4 py-2">Milk</td>
                    <td class="border px-4 py-2">3 LTR</td>
                    <td class="border px-4 py-2">56.6</td>
                    <td class="border px-4 py-2">10.19 (6%)</td>
                    <td class="border px-4 py-2">180</td>
                </tr>
                <tr class="text-xs">
                    <td class="border px-4 py-2">2</td>
                    <td class="border px-4 py-2">Wheat</td>
                    <td class="border px-4 py-2">1 BOR</td>
                    <td class="border px-4 py-2">174.11</td>
                    <td class="border px-4 py-2">20.89 (12%)</td>
                    <td class="border px-4 py-2">195</td>
                </tr>
            </tbody>
        </table>

        <div class="text-right">
            <p class="text-xs">TOTAL: <span class="font-semibold">₹375</span></p>
            <p class="text-xs">RECEIVED AMOUNT: <span class="font-semibold">₹375</span></p>
            <p class="text-xs">BALANCE AMOUNT: <span class="font-semibold">₹0</span></p>
        </div>

        <!-- Tax Breakdown Table -->
        <table class="text-xs w-full border border-gray-300 mt-4">
            <thead class="bg-gray-100">
                <tr>
                    <td class="border px-3 py-2">HSN/SAC</td>
                    <td class="border px-3 py-2">Taxable Value</td>
                    <td class="border px-3 py-2" colspan="2">CGST</td>
                    <td class="border px-3 py-2" colspan="2">SGST</td>
                    <td class="border px-3 py-2">Total Tax Amount</td>
                </tr>
                <tr>
                    <td class="border px-3 py-2"></td>
                    <td class="border px-3 py-2"></td>
                    <td class="border px-3 py-2">Rate</td>
                    <td class="border px-3 py-2">Amount</td>
                    <td class="border px-3 py-2">Rate</td>
                    <td class="border px-3 py-2">Amount</td>
                    <td class="border px-3 py-2"></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tax, index) in taxDetails" :key="index">
                    <td class="border px-3 py-2 text-center">-</td>
                    <td class="border px-3 py-2 text-right">{{ tax.taxableValue.toFixed(2) }}</td>
                    <td class="border px-3 py-2 text-right">{{ tax.cgstRate }}%</td>
                    <td class="border px-3 py-2 text-right">{{ tax.cgstAmount.toFixed(2) }}</td>
                    <td class="border px-3 py-2 text-right">{{ tax.sgstRate }}%</td>
                    <td class="border px-3 py-2 text-right">{{ tax.sgstAmount.toFixed(2) }}</td>
                    <td class="border px-3 py-2 text-right font-semibold">₹ {{ tax.totalTaxAmount.toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="mt-4 border p-4 w-full rounded-md">
            <p class="text-xs" >Total Amount (in words)</p>
            <p class="text-sm font-semibold" >Three hundred seventy five</p>
        </div>

        <div class="flex justify-between" >
            <div class="mt-4 border p-4 w-1/2 rounded-md">
                <p class="font-semibold">Terms and Conditions</p>
                <p class="text-xs">1. Goods once sold will not be taken back or exchanged.</p>
                <p class="text-xs">2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction only.</p>
            </div>
    
            <div class="border p-4 w-1/2 ml-2 rounded-md text-right mt-4">
                <p class="text-sm font-semibold">Authorized Signatory</p>
                <p class="text-sm">For Business Name</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InvoiceComponent",

    data() {
    return {
        taxDetails: [
            {
                taxableValue: 169.81,
                cgstRate: 3,
                cgstAmount: 5.09,
                sgstRate: 3,
                sgstAmount: 5.09,
                totalTaxAmount: 10.19,
            },
            {
                taxableValue: 174.11,
                cgstRate: 6,
                cgstAmount: 10.45,
                sgstRate: 6,
                sgstAmount: 10.45,
                totalTaxAmount: 20.89,
            }
        ],
    };
}

};
</script>