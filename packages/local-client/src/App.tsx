// -- App.tsx --
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "./App.css";
import CellList from "./components/CellList";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const htmlElement: HTMLElement = document.documentElement;
    htmlElement.id = theme;
  }, [theme]);

  return (
    <div className="app">
      <header>{theme}</header>
      {/* button to change theme */}
      <button
        onClick={() => {
          console.log("toggling theme");
          toggleTheme();
        }}
        className="button is-primary is-small">
        Toggle Theme
      </button>

      <CellList />
    </div>
  );
};

export default App;
