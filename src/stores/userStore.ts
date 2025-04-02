import { type User } from "@/types/User";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  
  const userInfo = ref<User | null>(null);

  
  const isAuthenticated = computed(() => {
    // return userInfo.value?.id != null && userInfo.value?.id.length > 0
    return true;
  });
  const getUserRole = computed(() => userInfo.value?.role);

  const setUser = (userData: User) => {
    userInfo.value = userData;
  };

  const logout = () => {
    userInfo.value = null;
  };

  return {
    userInfo,
    isAuthenticated,
    getUserRole,
    setUser,
    logout,
  };
});
