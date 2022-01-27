import { Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { DataGrid } from "../../components";

const Blotter: FC = (): JSX.Element => {
  const [showNoRowOverlay, setShowNoRowOverlay] = useState<boolean>(false);

  const rowClickHandler = useCallback(() => {}, []);

  return (
    <div>
      <DataGrid
        gridData={[{ name: "typescript" }]}
        colDef={[{ field: "name" }]}
        showNoRowsOverlay={showNoRowOverlay}
        rowClickHandler={rowClickHandler}
        size={{ width: "100%", height: 1000 }}
      ></DataGrid>
    </div>
  );
};

export default Blotter;
