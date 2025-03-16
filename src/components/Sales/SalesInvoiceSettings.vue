<template>
    <Modal :isVisible="true" @secondary-click="closeModal" @close="closeModal" primary-button-text="Save"
            secondary-button-text="Cancel" header="Item Settings"
            :fullScreenBackdrop="true" @primary-click="saveSettings" >
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">Invoice Prefix & Sequence Number</p>
                        <p class="text-gray-400 text-xs" >
                            Add your custom prefix & sequence for Invoice Numbering
                        </p>
                    </div>
                    <ToggleSwitch @input="handleToggleValue" :value="customPrefix" />
                </div>
            </div>
            <div v-if="customPrefix" >
                <div class="p-2 flex justify-between" >
                    <BasicInput class="w-full mr-2" label="Prefix" placeholder="Prefix" />
                    <BasicInput class="w-full" label="Sequence Number" placeholder="Sequence Number" />
                </div>
                <p class="text-gray-400 text-sm p-2" >Invoice Number: PRD10</p>
            </div>
            <div class="p-2" >
                <div class="flex justify-between" >
                    <div>
                        <p class="text-sm">
                            Show Purchase Price while adding Items
                        </p>
                        <p class="text-gray-400 text-xs" >
                            Add your custom prefix & sequence for Invoice Numbering
                        </p>
                    </div>
                    <ToggleSwitch/>
                </div>
            </div>
        </Modal>
</template>

<script lang="ts" >
import BasicInput from '../forms/FormElements/BasicInput.vue';
import SelectInput from '../forms/FormElements/SelectInput.vue';
import ToggleSwitch from '../forms/FormElements/ToggleSwitch.vue';
import Modal from '../ui/Modal.vue';

export default {

    name: 'SalesInvoiceSettings',

    components: {
        BasicInput,
        Modal,
        SelectInput,
        ToggleSwitch,
    },

    data() {
        return {
            customPrefix: false
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

        handleToggleValue(newVal: boolean) {
            this.customPrefix = newVal;
        },

        saveSettings() {

        }
    }

}

</script>