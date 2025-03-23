<template>
    <SettingsLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div>
                <p class="text-gray-500">
                    General Information
                </p>
                <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <div class="flex justify-between" >
                    <BasicInput label="Name*" placeholder="Enter Name" />
                    <BasicInput label="Mobile Number" placeholder="Enter mobile number" />
                    <BasicInput label="Email" placeholder="Enter email" />
                </div>
            </div>
            <div class="mt-10">
                <p class="text-gray-500">
                    Subscription Plan
                </p>
                <hr class="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
                <div class="flex justify-between" >
                    <p class="text-xl font-semibold" >Trial </p>
                    <Button>Buy Subscription Plan</Button>
                </div>
            </div>
        </div>
    </SettingsLayout>
</template>

<script lang="ts">
import BasicInput from '@/components/forms/FormElements/BasicInput.vue';
import SettingsLayout from '@/components/layout/SettingsLayout.vue';
import Button from '@/components/ui/Button.vue';

export default {
    
    components: {
        SettingsLayout,
        BasicInput,
        Button
    },

    name: 'AccountSettings'
}

</script>