import { useTheme } from "./ThemeContext";

export function Theme() {
  const { darkTheme, updateTheme } = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={updateTheme}>Toggle Theme</button>
      <div style={themeStyles}>New div!!</div>
    </>
  );
}
