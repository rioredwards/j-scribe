// -- App.tsx --
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import CodeCell from "./components/CodeCell";
// import TextEditor from "./components/TextEditor";
import CellList from "./components/CellList";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const theme = isDarkMode ? "dark" : "light";

  return (
    <div id={theme} className="app">
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
