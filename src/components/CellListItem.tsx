import { Cell } from "../state";

interface Props {
  cell: Cell;
}

const CellListItem: React.FC<Props> = ({ cell }) => {
  return <div>{cell.id}</div>;
};

export default CellListItem;
