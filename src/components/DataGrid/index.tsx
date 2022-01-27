import { FC, useState } from "react";
import { useTheme } from "@mui/material";
import { ColDef, RowClickedEvent, GridApi } from "ag-grid-community";

interface DataGridProps<T> {
  showNoRowsOverlay?: boolean;
  size: { height: number | string; width: number | string };
  gridData: T[];
  colDef: ColDef[];
  rowClickHandler?: (e: RowClickedEvent) => void;
}

const DataGrid = <T,>({
  showNoRowsOverlay,
  size,
  gridData,
  colDef,
  rowClickHandler,
}: DataGridProps<T>): JSX.Element => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const { palette } = useTheme();
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return <div></div>;
};

export default DataGrid;
