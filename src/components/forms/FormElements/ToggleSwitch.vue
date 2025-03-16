<template>
    <div class="flex items-center">
        <span v-if="showLabel" class="mr-2 text-gray-700 dark:text-gray-300">{{ label }}</span>
        <button
            @click="toggle"
            :class="{'bg-blue-500': isChecked, 'bg-gray-300': !isChecked}"
            class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none">
            <span
                :class="{'translate-x-6': isChecked, 'translate-x-1': !isChecked}"
                class="inline-block w-4 h-4 transform bg-white rounded-full transition-transform"></span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        showLabel(){
            return this.label.length > 0
        }
    },
    data() {
        return {
            isChecked: this.value
        };
    },
    watch: {
        value(newVal) {
            this.isChecked = newVal;
        }
    },
    methods: {
        toggle() {
            this.isChecked = !this.isChecked;
            this.$emit('input', this.isChecked);
        }
    }
}
</script>
