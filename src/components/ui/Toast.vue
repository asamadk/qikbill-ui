<template>
    <div class="fixed top-5 right-5 z-500000 flex flex-col gap-3">
        <transition-group name="fade">
            <div v-for="toast in toastStore.toasts" :key="toast.id"
                :class="['rounded-xl border p-4 w-80 shadow-lg', variantClasses[toast.type].container]">
                <div class="flex items-start gap-3">
                    <div :class="['-mt-0.5', variantClasses[toast.type].icon]">
                        <component :is="icons[toast.type]" />
                    </div>

                    <div class="flex-1">
                        <h4 class="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
                            {{ toast.title }}
                        </h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            {{ toast.message }}
                        </p>
                    </div>

                    <button class="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                        @click="toastStore.removeToast(toast.id)">
                        ✖
                    </button>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { useToastStore } from "@/stores/toastStore";
import { SuccessIcon, ErrorIcon, WarningIcon, InfoCircleIcon } from "@/icons";

const toastStore = useToastStore();

const variantClasses = {
    success: {
        container: "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
        icon: "text-success-500",
    },
    error: {
        container: "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
        icon: "text-error-500",
    },
    warning: {
        container: "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
        icon: "text-warning-500",
    },
    info: {
        container: "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
        icon: "text-blue-light-500",
    },
};

const icons = {
    success: SuccessIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoCircleIcon,
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}
</style>