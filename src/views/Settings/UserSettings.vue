<template>
    <SettingsLayout>
        <div
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex">
                    <BasicInput placeholder="Search User" label="" />
                </div>

                <div class="flex items-center gap-3">
                    <Button size="sm" variant="primary"> Add users </Button>
                </div>
            </div>
            <div class="max-w-full overflow-x-auto custom-scrollbar">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-t border-gray-100 dark:border-gray-800">
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">User Name</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Mobile Number</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Role Type</p>
                            </th>
                            <th class="py-3 text-left">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Status</p>
                            </th>
                            <th class="py-3 text-right">
                                <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Actions</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in users" :key="index"
                            class="border-t border-gray-100 dark:border-gray-800">
                            <td class="py-3 whitespace-nowrap">
                                <div class="flex items-center gap-3">

                                    <div>
                                        <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                            {{ user.name }}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.mobile }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.role }}</p>
                            </td>
                            <td class="py-3 whitespace-nowrap">
                                <p class="text-gray-500 text-theme-sm dark:text-gray-400">{{ user.status }}</p>
                            </td>
                            <td class="py-3 text-right">
                                <Button class="mr-2 w-24" variant="outline" size="sm" >Edit</Button>
                                <Button class="text-red-400 w-24" variant="outline" size="sm" >Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        Button,
        BasicInput,
        SettingsLayout,
    },

    name: 'UserSettings',

    data() {
        return {
            users: [
                {
                    name: 'samad',
                    mobile: '7007475550',
                    role: 'Admin',
                    status: 'joined'
                }
            ]
        }
    }
}

</script>