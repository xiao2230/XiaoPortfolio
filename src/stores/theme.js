import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { getStored, setStored } from "@/lib/localStorage.js";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref();
  const button = ref();
  const storedKey = "theme";

  const getPreferredTheme = (storedTheme) => storedTheme ? storedTheme : "auto";

  const getButtonMode = (storedTheme) => storedTheme ? storedTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const initTheme = () => {
    const preferredTheme = getPreferredTheme(getStored(storedKey));
    const buttonMode = getButtonMode(getStored(storedKey));
    theme.value = preferredTheme;
    button.value = buttonMode;
    setStored(storedKey, preferredTheme);
  };

  const changeTheme = () => {
    button.value = button.value === "dark" ? "light" : "dark";
    theme.value = button.value;
    setStored(storedKey, button.value);
  };

  onMounted(() => { initTheme() });

  return { theme, button, changeTheme };
})
