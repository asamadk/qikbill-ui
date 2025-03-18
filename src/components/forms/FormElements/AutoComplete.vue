<template>
    <div class="relative w-full">
        <!-- Input Field -->
        <input type="text" v-model="query" @input="filterSuggestions" @keydown.down.prevent="moveDown"
            @keydown.up.prevent="moveUp" @keydown.enter.prevent="selectSuggestion(selectedIndex)"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            :placeholder="placeholder" />

        <!-- Suggestions Dropdown -->
        <ul v-if="filteredSuggestions.length > 0"
            class="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-md">
            <li v-for="(suggestion, index) in filteredSuggestions" :key="suggestion.value"
                @click="selectSuggestion(index)"
                :class="[
                    'px-4 py-2 cursor-pointer hover:bg-blue-100',
                    selectedIndex === index ? 'bg-blue-200' : ''
                ]">
                {{ suggestion.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        suggestions: {
            type: Array,
            required: true,
            validator: (items) => items.every(item => typeof item.label === 'string' && typeof item.value === 'string')
        },
        placeholder: {
            type: String,
            default: "Type to search..."
        }
    },
    data() {
        return {
            query: "",
            filteredSuggestions: [],
            selectedIndex: -1,
            selectedValue: null
        };
    },
    methods: {
        filterSuggestions() {
            this.filteredSuggestions = this.suggestions.filter((suggestion) =>
                suggestion.label.toLowerCase().includes(this.query.toLowerCase())
            );
            this.selectedIndex = -1; // Reset selection on new input
        },
        moveDown() {
            if (this.selectedIndex < this.filteredSuggestions.length - 1) {
                this.selectedIndex++;
            }
        },
        moveUp() {
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
            }
        },
        selectSuggestion(index) {
            this.query = this.filteredSuggestions[index].label;
            this.selectedValue = this.filteredSuggestions[index].value; // Store the value
            this.filteredSuggestions = []; // Hide suggestions
            this.$emit("selected", this.selectedValue); // Emit the selected value
        }
    }
};
</script>
