import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref();

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = t => localStorage.setItem("theme", t);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    return storedTheme ? storedTheme : "auto";
  }

  const initTheme = () => {
    const preferredTheme = getPreferredTheme();
    theme.value = preferredTheme;
    setStoredTheme(preferredTheme);
  }

  onMounted(() => { initTheme() });

  return { theme };
})
