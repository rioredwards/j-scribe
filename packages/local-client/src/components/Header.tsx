// -- Header.tsx --
import "./Header.css";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const htmlElement: HTMLElement = document.documentElement;
    htmlElement.id = theme;
  }, [theme]);

  return (
    <header>
      <button className="theme-switcher-btn" onClick={toggleTheme}>
        <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
      </button>
    </header>
  );
};

export default Header;
