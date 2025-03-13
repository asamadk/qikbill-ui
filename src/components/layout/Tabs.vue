<template>
    <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
            <li v-for="tab in tabs" :key="tab.name" class="me-2">
                <a
                    @click="navigateToTab(tab.id)"
                    :class="['inline-block p-4 border-b-2 rounded-t-lg cursor-pointer', isActive(tab.id) ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300']"
                    :aria-current="isActive(tab.id) ? 'page' : undefined">
                    {{ tab.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Tabs',
    props: {
        tabs: {
            type: Array as any,
            required: true,
            validator: (value :any) => {
                return value.every((tab: any) => 'name' in tab && 'id' in tab);
            }
        },
        selectedTab: {
            type: String,
            default: '1'
        },
    },
    computed: {
        isActive(){
            return (id: string) => this.selectedTab === id;
        }
    },
    methods: {
        navigateToTab(id: string) {
            this.$emit('tabChanged', id);
        }
    }
};
</script>