<template>
    <div>
        <AppDrawer @close="closeDrawer" @secondary-click="handleDeleteParty" secondary-button-text="Delete" :show-footer="true"
            primary-button-text="Edit" @primary-click="handleEditClick" header="Party Details"
            drawerId="party-details-drawer" drawerLabelId="party-details-label">
            <Tabs class="mb-2" @tab-changed="handleTabChange" :selected-tab="selectedTab" :tabs="tabs" />
            <PartyTransactions v-if="selectedTab === '1'" />
            <PartyProfile :party-details="partyDetails" v-else-if="selectedTab === '2'" />
            <PartyLedger v-else-if="selectedTab === '3'" />
            <PartyItemReport v-else />
        </AppDrawer>
        <Modal @secondary-click="closeDeleteModal" @close="closeDeleteModal" primary-button-text="Delete"
            secondary-button-text="Cancel" header="Delete Party ?" :is-visible="showDeleteModal"
            :fullScreenBackdrop="true" @primary-click="deleteParty" >
            <div class="p-2" >
                <p>Are you sure, you want to delete this party?</p>
                <p class="text-gray-400" >This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
</template>
<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import AppDrawer from '../layout/AppDrawer.vue';
import Tabs from '../layout/Tabs.vue';
import PartyItemReport from './PartyItemReport.vue';
import PartyLedger from './PartyLedger.vue';
import PartyProfile from './PartyProfile.vue';
import PartyTransactions from './PartyTransactions.vue';
import Modal from '../ui/Modal.vue';
import { useLoadingStore } from '@/stores/loadingStore';
import PartyAPI from '@/api/PartyAPI';

export default {
    components: {
        AppDrawer,
        Modal,
        PartyLedger,
        PartyProfile,
        PartyTransactions,
        PartyItemReport,
        Tabs,
    },

    name: 'PartyDetails',

    data() {
        return {
            tabs: [
                { name: 'Transactions', id: '1' },
                { name: 'Profile', id: '2' },                
            ],
            partyDetails: {},
            selectedTab: '1',
            partyId: this.$route.params.id as string,
            showDeleteModal: false
        }
    },

    created() {
        this.getPartyDetails();
    },

    methods: {

        async getPartyDetails() {
            try {
                useLoadingStore().startLoading();
                const res = await PartyAPI.getById(this.$route.params.id as string)
                this.partyDetails = res?.party
            } catch (err) {
                useLoadingStore().stopLoading();
            } finally {
                useLoadingStore().stopLoading();
            }
        },

        closeDrawer() {
            this.$router.push(routeConstants.PARTIES);
        },

        closeDeleteModal() {
            this.showDeleteModal = false;
        },

        deleteParty(){
            console.log('Part deleted')
            this.closeDeleteModal();
        },

        handleEditClick() {
            this.$emit('close')
            this.$router.push(routeConstants.CREATE_PARTIES(this.partyId))
        },

        handleTabChange(id: string) {
            this.selectedTab = id;
        },

        handleDeleteParty() {
            this.showDeleteModal = true;
        }
    }
}
</script>