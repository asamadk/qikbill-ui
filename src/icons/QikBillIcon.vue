<script lang="ts">
    export default {
        name: 'QikBillIcon',

        props: {
            showText : {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<template>
    <div class="flex" >
        <img
          src="/images/logo/logo-icon.svg"
          alt="Logo"
          width="32"
          height="32"
        />
        <h3 v-if="showText" class="text-gray-800 text-2xl ml-2 mt-1 font-medium" >QikBill</h3>
    </div>
</template>