// -- App.tsx --
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "./App.css";
import CellList from "./components/CellList";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const htmlElement: HTMLElement = document.documentElement;
    htmlElement.id = theme;
  }, [theme]);

  return (
    <div className="app">
      <Header />
      <CellList />
    </div>
  );
};

export default App;
