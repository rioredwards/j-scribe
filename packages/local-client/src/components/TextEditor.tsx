import "./TextEditor.css";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect, useRef } from "react";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";

interface Props {
  cell: Cell;
}

const TextEditor: React.FC<Props> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

  useEffect(() => {
    // This sets edit mode to false when the user clicks outside the editor
    const clickListener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    // This sets edit mode to false when the user presses the escape key
    const escListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEditing(false);
      }
    };

    document.addEventListener("click", clickListener, { capture: true });
    document.addEventListener("keydown", escListener, { capture: true });
    return () => {
      document.removeEventListener("click", clickListener, { capture: true });
      document.removeEventListener("keypress", escListener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || "Click to edit!"} />
      </div>
    </div>
  );
};

export default TextEditor;
