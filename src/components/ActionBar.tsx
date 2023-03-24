import { useActions } from "../hooks/useActions";

interface Props {
  id: string;
}

const ActionBar: React.FC<Props> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <button onClick={() => moveCell(id, "up")}>Up</button>
      <button onClick={() => moveCell(id, "down")}>Down</button>
      <button onClick={() => deleteCell(id)}>Delete</button>
    </div>
  );
};

export default ActionBar;
