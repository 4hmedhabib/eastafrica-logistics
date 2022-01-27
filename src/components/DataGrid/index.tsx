import { FC, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material";
import { ColDef, RowClickedEvent, GridApi } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

const GridStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: theme.spacing(2, 1),
  justifyContent: "center",
}));
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
  rowClickHandler = undefined,
}: DataGridProps<T>): JSX.Element => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const { palette } = useTheme();
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  useEffect(() => {
    if (showNoRowsOverlay) {
      gridApi?.showNoRowsOverlay();
    }
  }, [gridApi, showNoRowsOverlay]);

  console.log(gridData);

  return (
    <GridStyledWrapper>
      <div
        className={`${
          palette.mode === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"
        }`}
      >
        <AgGridReact
          rowData={gridData}
          onGridReady={onGridReady}
          columnDefs={[{ field: "name" }]}
          rowSelection="single"
          //   defaultColDef={{ resizable: true, filter: true }}
          onRowClicked={rowClickHandler}
        ></AgGridReact>
      </div>
    </GridStyledWrapper>
  );
};

export default DataGrid;
