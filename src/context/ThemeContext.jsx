import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(false);

  function toggleTheme() {
    setDarkmode((darkmode) => !darkmode);
  }

  useEffect(() => {
    if (darkmode) {
      document.body.classList.remove("dark-content");
      document.body.classList.add("white-content");
    } else {
      document.body.classList.remove("white-content");
      document.body.classList.add("dark-content");
    }
  }, [darkmode]);
  return (
    <ThemeContext.Provider value={darkmode}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
