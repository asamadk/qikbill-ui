<template>
    <div :id="drawerId"
        :class="['fixed top-0 right-0 z-100000 h-screen p-4 overflow-y-auto transition-transform border-l-1 border-gray-200 bg-white w-3/4 dark:bg-gray-800 shadow-xl flex flex-col', isOpen ? 'translate-x-0' : '-translate-x-full']"
        tabindex="-1" :aria-labelledby="drawerLabelId">
        
        <h5 :id="drawerLabelId" class="inline-flex items-center mb-4 text-base font-semibold dark:text-gray-400">
            {{ header }}
        </h5>

        <button type="button" @click="$emit('close')" :aria-controls="drawerId"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close menu</span>
        </button>

        <!-- Main Content -->
        <div class="flex-grow overflow-y-auto">
            <slot></slot>
        </div>

        <!-- Footer -->
        <div v-if="showFooter" class="absolute bottom-0 left-0 w-full p-2 border-t bg-white dark:bg-gray-800 flex justify-end items-center gap-3">
            <Button v-if="showTertiaryButtonText" @click="$emit('tertiaryClick')" color="red" size="sm" variant="error"> {{ tertiaryButtonText }} </Button>
            <Button v-if="showSecondaryButton" @click="$emit('secondaryClick')" size="sm" variant="outline"> {{ secondaryButtonText }} </Button>
            <Button v-if="showPrimaryButton" @click="$emit('primaryClick')" size="sm" variant="primary"> {{ primaryButtonText }} </Button>
        </div>
    </div>
</template>

<script lang="ts">
import Button from '../ui/Button.vue';

export default {
    components: {
        Button
    },
    
    name: 'AppDrawer',
    
    props: {
        header: {
            type: String,
            required: true
        },
        drawerId: {
            type: String,
            required: true
        },
        drawerLabelId: {
            type: String,
            required: true
        },
        showFooter: {
            type: Boolean,
            default: false
        },
        tertiaryButtonText: String,
        primaryButtonText: String,
        secondaryButtonText: String
    },
    
    computed: {
        showPrimaryButton() {
            return this.primaryButtonText !== undefined;
        },
        showSecondaryButton() {
            return this.secondaryButtonText !== undefined;
        },
        showTertiaryButtonText() {
            return this.tertiaryButtonText !== undefined;
        }
    },

    data() {
        return {
            isOpen: true
        }
    }
}
</script>
