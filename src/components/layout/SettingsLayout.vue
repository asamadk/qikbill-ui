<template>
    <div class="min-h-screen xl:flex">
        <SettingsSidebar />
        <Backdrop />
        <div class="flex-1 transition-all duration-300 ease-in-out lg:ml-[290px]">
            <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Backdrop from './Backdrop.vue'
import SettingsSidebar from './SettingsSidebar.vue';

export default {
    components: {
        Backdrop,
        SettingsSidebar,
    },

    name: 'SettingsLayout',
}
</script>
