<template>
  <ThemeProvider>
    <SidebarProvider>
      <Toast />
      <RouterView />
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
import Toast from './components/ui/Toast.vue';
</script>
