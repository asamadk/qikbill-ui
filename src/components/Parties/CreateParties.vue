<template>
    <div>

        <admin-layout>
            <div
                class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
                <PageBreadcrumb pageTitle="Create Party" />
                <div class="grid grid-cols-1 md:grid-cols-4">
                    <BasicInput v-model="partyInfo.Name" label="Party Name*" placeholder="Enter party name" />
                    <BasicInput v-model="partyInfo.Mobile" class="ml-5" label="Mobile" placeholder="Enter mobile" type="text" />
                    <BasicInput v-model="partyInfo.Email" class="ml-5" label="Email" placeholder="Enter email" type="email" />
                    <BasicInput v-model="partyInfo.OpeningBalance" class="ml-5" label="Opening Balance" placeholder="Enter opening balance" type="number" />
                </div>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                    <BasicInput v-model="partyInfo.GST" label="GSTIN" placeholder="ex: 21XXXXX9438X1XX" />
                    <BasicInput v-model="partyInfo.PAN" class="ml-5" label="Pan Number" placeholder="Enter party PAN number" />
                </div>
                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <div class="mt-5 grid grid-cols-1 md:grid-cols-4">
                    <SelectInput v-model="partyInfo.Type" :options="PARTY_TYPE_CONST" class="mr-5" label="Party Type" disabledMenu="Select type" />
                    <!-- TODO create category modal -->
                    <SelectInput label="Party Categories" disabledMenu="Select category" />
                    <div class="mt-6 ml-2" >
                        <Button @click="showCreateCategory = true" variant="outline" >Create category +</Button>
                    </div>
                </div>
                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <div class="grid grid-cols-1 md:grid-cols-4">
                    <BasicInput v-model="partyInfo.Address" label="Street Address" />
                    <SelectInput v-model="partyInfo.State" class="ml-5" label="State" disabledMenu="Select state" />
                    <BasicInput v-model="partyInfo.Pincode" class="ml-5" label="PinCode" placeholder="Select PinCode" type="text" />
                    <BasicInput v-model="partyInfo.City" class="ml-5" label="City" placeholder="Select City" />
                </div>
                <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <div class="grid grid-cols-1 md:grid-cols-4">
                    <BasicInput v-model="partyInfo.CreditPeriod" label="Credit Period(Days)" placeholder="eg : 30" type="number" />
                    <BasicInput v-model="partyInfo.CreditLimit" class="ml-5" label="Credit Limit" placeholder="eg : 5000" type="number" />
                </div>
                <div class="mt-5 flex justify-end" >
                    <Button @click="goBack" size="sm" variant="outline"> Cancel </Button>
                    <Button @click="createParty" class="ml-2" size="sm" variant="primary"> Save </Button>
                </div>
            </div>
        </admin-layout>
        <CreateCategoryModal 
            v-if="showCreateCategory" 
            :type="CATEGORY_TYPE.PARTY" 
            @close="showCreateCategory = false"
        />
    </div>
</template>
<script lang="ts">
import PartyAPI from '@/api/PartyAPI';
import PageBreadcrumb from '../common/PageBreadcrumb.vue';
import BasicInput from '../forms/FormElements/BasicInput.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import Button from '../ui/Button.vue';
import { useToastStore } from '@/stores/toastStore';
import { getApiErrorMessage, getApiSuccessMessage } from '@/utils/axiosUtils';
import { useLoadingStore } from '@/stores/loadingStore';
import { PARTY_TYPE_CONST } from '@/constants/partyConstants';
import CreateCategoryModal from '../category/CreateCategoryModal.vue';
import { CATEGORY_TYPE } from '@/constants/categoryConstants';

export default {
    components: {
        AdminLayout,
        BasicInput,
        Button,
        CreateCategoryModal,
        PageBreadcrumb,
        SelectInput,
    },
    
    name: 'CreateParties',
    
    data(){
        return {
            partyInfo : {} as any,
            PARTY_TYPE_CONST,
            CATEGORY_TYPE,
            showCreateCategory: false
        }
    },
    
    methods: {
        goBack() {
            this.$router.go(-1);
        },

        async createParty(){
            try{
                useLoadingStore().startLoading();
                const data = await PartyAPI.create(this.partyInfo)
                useToastStore().showToast('Success',getApiSuccessMessage(data),'success')
            }catch(error){ 
                useToastStore().showToast('Error',getApiErrorMessage(error,'Failed to create party.'),'error')
            }finally{
                useLoadingStore().stopLoading();
            }
        }
    }
}
</script>