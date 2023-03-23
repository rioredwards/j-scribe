import MDEditor from "@uiw/react-md-editor";

interface Props {}

const TextEditor: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <MDEditor />
    </div>
  );
};

export default TextEditor;
