import { useEffect } from "react";
import useLocalStorage from "../useLocalStorage/useLocalStorage";

export default function useDarkMode() {
  const [theme, setTheme] = useLocalStorage("dark", false);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return [theme, setTheme];
}
