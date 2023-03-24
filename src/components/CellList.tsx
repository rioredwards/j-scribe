import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./CellListItem";

interface Props {}

const CellList: React.FC<Props> = (props: Props) => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const renderedCells = cells.map((cell) => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
