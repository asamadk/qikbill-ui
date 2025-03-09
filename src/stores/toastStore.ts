import { defineStore } from "pinia";
import { ref } from "vue";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastMessage {
    id: number;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number; // Time before auto-dismiss (default: 3000ms)
}

export const useToastStore = defineStore("toast", () => {
    const toasts = ref<ToastMessage[]>([]);
    let toastId = 0;

    // Show a toast
    const showToast = (title: string, message: string, type: ToastType = "info", duration = 3000) => {
        const id = ++toastId;
        toasts.value.push({ id, title, message, type, duration });

        // Auto-remove after duration
        setTimeout(() => removeToast(id), duration);
    };

    // Remove a toast manually
    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter((toast) => toast.id !== id);
    };

    return {
        toasts,
        showToast,
        removeToast,
    };
});
