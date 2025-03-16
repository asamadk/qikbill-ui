<template>
    <div>
        <AppDrawer @close="closeDrawer" @secondary-click="handleDeleteItem" secondary-button-text="Delete"
            :show-footer="true" primary-button-text="Edit" @primary-click="handleEditClick" header="Item Details"
            drawerId="item-details-drawer" drawerLabelId="item-details-label">
            <Tabs class="mb-2" @tab-changed="handleTabChange" :selected-tab="selectedTab" :tabs="tabs" />
            <ItemProfile v-if="selectedTab === '1'" />
            <ItemStockDetail v-else-if="selectedTab === '2'" />
            <ItemPartyPrices v-else />
        </AppDrawer>
        <Modal @secondary-click="closeDeleteModal" @close="closeDeleteModal" primary-button-text="Delete"
            secondary-button-text="Cancel" header="Delete Item ?" :is-visible="showDeleteModal"
            :fullScreenBackdrop="true" @primary-click="deleteItem" >
            <div class="p-2" >
                <p>Are you sure, you want to delete this item?</p>
                <p class="text-gray-400" >This action cannot be reversed.</p>
            </div>
        </Modal>
    </div>
</template>
<script lang="ts">
import { routeConstants } from '@/router/routeConstants';
import AppDrawer from '../layout/AppDrawer.vue';
import Tabs from '../layout/Tabs.vue';
import ItemProfile from './ItemProfile.vue';
import ItemStockDetail from './ItemStockDetail.vue';
import ItemPartyPrices from './ItemPartyPrices.vue';
import Modal from '../ui/Modal.vue';

export default {
    components: {
        AppDrawer,
        Tabs,
        ItemProfile,
        ItemStockDetail,
        ItemPartyPrices,
        Modal,
    },
    
    name: 'ItemDetail',

    data() {
        return {
            tabs: [
                { name: 'Item Details', id: '1' },
                { name: 'Stock Details', id: '2' },
                {name: 'Party Wise Prices',id: '3'},
            ],
            selectedTab: '1',
            showDeleteModal: false
        }
    },

    methods: {
        closeDrawer() {
            this.$router.push(routeConstants.ITEMS);
        },

        closeDeleteModal() {
            this.showDeleteModal = false;
        },

        deleteItem(){
            console.log('Part deleted')
            this.closeDeleteModal();
        },

        handleEditClick() {
            this.$emit('close')
            this.$router.push(routeConstants.CREATE_ITEMS(this.$route.params.id))
        },

        handleTabChange(id: string) {
            this.selectedTab = id;
        },

        handleDeleteItem() {
            this.showDeleteModal = true;
        }
    }
}
</script>