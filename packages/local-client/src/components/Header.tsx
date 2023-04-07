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
      <div className="logo">
        <a href="/">
          <img
            className="icon"
            src={
              process.env.PUBLIC_URL +
              (isDarkMode
                ? "/j-scribe-logos/j-scribe-logo-white-app-500.png"
                : "/j-scribe-logos/j-scribe-logo-black-app-500.png")
            }
            alt="J-Scribe Icon"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <a
            href="https://www.npmjs.com/package/j-scribe1"
            target="_blank"
            className="cli-link"
            title="CLI"
            rel="noreferrer">
            <i className="fas fa-terminal" />
          </a>
        </li>
        <li className="nav-item">
          <button className="theme-btn" onClick={toggleTheme}>
            <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
