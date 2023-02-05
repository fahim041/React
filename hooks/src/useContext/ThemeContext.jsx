import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevState) => !prevState);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, updateTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
