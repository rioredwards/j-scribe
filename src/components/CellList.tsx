import { Fragment } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import AddCell from "./AddCell";
import CellListItem from "./CellListItem";

interface Props {}

const CellList: React.FC<Props> = (props: Props) => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <AddCell nextCellId={null} />
    </div>
  );
};

export default CellList;
