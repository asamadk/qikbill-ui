<template>
    <SettingsLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <p class="text-xl mb-5 text-gray-500">
                Tell us about your issue!
            </p>
            <BasicInput label="Subject" placeholder="Enter Subject" />
            <TextArea class="mt-2" label="Body" placeholder="Enter your issue..." />
            <div class="flex justify-end mt-2">
                <Button variant="outline">Cancel</Button>
                <Button class="ml-2">Submit</Button>
            </div>
        </div>
    </SettingsLayout>
</template>

<script lang="ts">
import BasicInput from '@/components/forms/FormElements/BasicInput.vue';
import TextArea from '@/components/forms/FormElements/TextArea.vue';
import SettingsLayout from '@/components/layout/SettingsLayout.vue';
import Button from '@/components/ui/Button.vue';
export default {

    components: {
        BasicInput,
        Button,
        SettingsLayout,
        TextArea
    },

    name: 'SupportSettings'

}
</script>