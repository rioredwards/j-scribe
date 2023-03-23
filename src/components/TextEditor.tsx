import "./TextEditor.css";
import MDEditor from "@uiw/react-md-editor";
import { useState, useEffect, useRef } from "react";

interface Props {}

const TextEditor: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // This sets edit mode to false when the user clicks outside the editor
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref}>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;
