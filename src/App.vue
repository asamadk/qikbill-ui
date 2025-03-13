<template>
  <ThemeProvider>
    <SidebarProvider>
      <Toast />
      <Loading/>
      <RouterView />
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup lang="ts">
import ThemeProvider from './components/layout/ThemeProvider.vue'
import SidebarProvider from './components/layout/SidebarProvider.vue'
import Toast from './components/ui/Toast.vue';
import Loading from './components/ui/Loading.vue';
</script>
