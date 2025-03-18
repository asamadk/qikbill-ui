<template>
    <Modal :isVisible="true" @secondary-click="closeModal" @close="closeModal" primary-button-text="Save"
            secondary-button-text="Cancel" header="Counter POS Settings"
            :fullScreenBackdrop="true" @primary-click="saveSettings" >
            
            <!-- Modal body -->
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Hide Customer Information field</p>
                        <p class="text-gray-400 text-xs" >Bills will be saved to Cash Sale Party by default</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Fully Paid Bills</p>
                        <p class="text-gray-400 text-xs" >All Bills will be marked as fully paid</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Round Off</p>
                        <p class="text-gray-400 text-xs" >Automatically add roundoff value to bill</p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Hide MRP</p>
                        <p class="text-gray-400 text-xs" >Hide MRP from POS</p>
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

    name: 'PosSettings',

    methods: {
        closeModal() {
            this.$emit('close');
        },

        saveSettings() {

        }
    }

}

</script>