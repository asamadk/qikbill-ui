<template>
    <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px text-sm">
            <li>
                <a href="#" @click.prevent="changePage(currentPage - 1)" :class="{ 'cursor-not-allowed': currentPage === 1 }"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li v-for="page in totalPages" :key="page">
                <a href="#" @click.prevent="changePage(page)" :class="{ 'bg-blue-50 text-blue-600': currentPage === page, 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white': currentPage !== page }"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">{{ page }}</a>
            </li>
            <li>
                <a href="#" @click.prevent="changePage(currentPage + 1)" :class="{ 'cursor-not-allowed': currentPage === totalPages }"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'Pagination',
    props: {
        totalItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        totalPages(): number {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        }
    },
    methods: {
        changePage(page: number) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.$emit('page-changed', page);
            }
        }
    }
});
</script>
