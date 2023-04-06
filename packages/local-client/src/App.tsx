// -- App.tsx --
import "bulmaswatch/superhero/bulmaswatch.min.css";
// import CodeCell from "./components/CodeCell";
// import TextEditor from "./components/TextEditor";
import CellList from "./components/CellList";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const theme = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <div className={`app ${theme}`}>
      <header style={{ color: "black", textAlign: "center", fontSize: "36px" }}>
        {isDarkMode ? "dark" : "light"}
      </header>
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
