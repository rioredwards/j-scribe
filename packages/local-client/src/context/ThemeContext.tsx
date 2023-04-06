import { useState, useEffect, createContext, useContext } from "react";
import localforage from "localforage";

const themeStorage = localforage.createInstance({
  name: "themeStorage",
});

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const getTheme = async () => {
      const theme = await themeStorage.getItem("theme");
      setIsDarkMode(theme === "dark");
    };
    getTheme();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      themeStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export { ThemeProvider, useTheme };
