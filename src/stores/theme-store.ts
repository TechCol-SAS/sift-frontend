import { defineStore, acceptHMRUpdate } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true,
  }),

  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}
