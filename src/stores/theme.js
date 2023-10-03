import { ref, onBeforeMount } from "vue";
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref();
  const storedKey = "theme";

  const getPreferredTheme = (storedTheme) => storedTheme ? storedTheme : "auto";

  const initTheme = () => {
    const preferredTheme = getPreferredTheme(localStorage.getItem(storedKey));
    theme.value = preferredTheme;
    localStorage.setItem(storedKey, preferredTheme);
  };

  const changeTheme = () => {
    const autoTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "Light";
    theme.value = theme.value === "auto" ? autoTheme === "dark" ? "light" : "dark" : theme.value === "dark" ? "light" : "dark"; localStorage.setItem(storedKey, theme.value);
  };

  onBeforeMount(() => initTheme());

  return { theme, changeTheme };
})
