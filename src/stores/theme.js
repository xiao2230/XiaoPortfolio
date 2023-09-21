import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { getStored, setStored } from "@/lib/localStorage.js";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref();
  const storedKey = "theme";

  const getPreferredTheme = (storedTheme) => storedTheme ? storedTheme : "auto";

  const initTheme = () => {
    const preferredTheme = getPreferredTheme(getStored(storedKey));
    theme.value = preferredTheme;
    setStored(storedKey, preferredTheme);
  };

  const changeTheme = () => {
    const autoTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "Light";
    theme.value = theme.value === "auto" ? autoTheme === "dark" ? "light" : "dark" : theme.value === "dark" ? "light" : "dark"; setStored(storedKey, theme.value);
  };

  onMounted(() => { initTheme() });

  return { theme, changeTheme };
})
