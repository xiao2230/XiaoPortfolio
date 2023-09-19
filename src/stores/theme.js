import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { getStored, setStored } from "@/lib/localStorage.js";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref();
  const themeBtn = ref();
  const storedKey = "theme";

  const getPreferredTheme = (storedTheme) => storedTheme ? storedTheme : "auto";

  const getButtonMode = (storedTheme) => storedTheme ? storedTheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const initTheme = () => {
    const preferredTheme = getPreferredTheme(getStored(storedKey));
    const buttonMode = getButtonMode(getStored(storedKey));
    theme.value = preferredTheme;
    themeBtn.value = buttonMode;
    setStored(storedKey, preferredTheme);
  };

  const changeTheme = () => {
    themeBtn.value = themeBtn.value === "dark" ? "light" : "dark";
    theme.value = themeBtn.value;
    setStored(storedKey, themeBtn.value);
  };

  onMounted(() => { initTheme() });

  return { theme, themeBtn, changeTheme };
})
