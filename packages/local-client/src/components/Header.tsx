// -- Header.tsx --
import "@fortawesome/free-brands-svg-icons";
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
      <div className="logo">
        <img
          className="icon"
          src={
            process.env.PUBLIC_URL +
            "/j-scribe-logos/j-scribe-logo-white-app-500.png"
          }
          alt="J-Scribe Icon"
        />
      </div>
      <button className="theme-switcher-btn" onClick={toggleTheme}>
        <i className="fa-brands fa-npm" />
      </button>
      <button className="theme-switcher-btn" onClick={toggleTheme}>
        <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
      </button>
    </header>
  );
};

export default Header;
