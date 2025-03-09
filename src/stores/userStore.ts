import { type User } from "@/types/User";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  
  const userInfo = ref<User | null>(null);

  
//   const isAuthenticated = computed<boolean>(() => !!userInfo.value);
  const isAuthenticated = computed<boolean>(() => true);
  const getUserRole = computed<string>(() => userInfo.value?.role);

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
