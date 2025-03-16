<template>
    <Modal :isVisible="true" @secondary-click="closeModal" @close="closeModal" primary-button-text="Save"
            secondary-button-text="Cancel" header="Item Settings"
            :fullScreenBackdrop="true" @primary-click="saveSettings" >
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Stock Value Calculation</p>
                        <p class="text-gray-400 text-xs" >Calculate stock value based on your choice</p>
                    </div>
                    <SelectInput disabledMenu="Select Price" />
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Enable Item Batching & Expiry</p>
                        <p class="text-gray-400 text-xs" >Keep track of multiple prices, expiry and manufacturing dates</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Enable Serial Number/IMEI</p>
                        <p class="text-gray-400 text-xs" >Manage your items by Serial Number or IMEI and track them easily</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">MRP</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Wholesale Price</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
        </Modal>
</template>

<script lang="ts" >
import SelectInput from '../forms/FormElements/SelectInput.vue';
import ToggleSwitch from '../forms/FormElements/ToggleSwitch.vue';
import Modal from '../ui/Modal.vue';

export default {

    components: {
        Modal,
        SelectInput,
        ToggleSwitch,
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

        saveSettings() {

        }
    }

}

</script>