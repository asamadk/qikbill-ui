<template>
    <Modal :isVisible="true" @secondary-click="closeModal" @close="closeModal" primary-button-text="Save"
            secondary-button-text="Cancel" header="Create Category"
            :fullScreenBackdrop="true" @primary-click="saveSettings" >
            <div class="m-5" >
                <BasicInput label="Category" placeholder="Enter category name" v-model="category" />
            </div>
        </Modal>
</template>

<script lang="ts" >
import BasicInput from '../forms/FormElements/BasicInput.vue';
import Modal from '../ui/Modal.vue';


export default {

    name: 'CreateCategoryModal',

    components: {
        BasicInput,
        Modal,
    },

    props : {
        type :String
    },

    data() {
        return {
            category: ''
        }
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