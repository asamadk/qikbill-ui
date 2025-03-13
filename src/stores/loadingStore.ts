import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore('LoadingStore', () => {
    const loading = ref(false);

    const startLoading = () => {
        loading.value = true;
    };

    const stopLoading = () => {
        loading.value = false;
    }

    return {
        loading,
        startLoading,
        stopLoading
    };
});