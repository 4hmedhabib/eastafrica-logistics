import { FC } from "react";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";

interface Props {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}

const DRAWER_WIDTH: number = 240;

const SideBar: FC<Props> = ({
  isOpen,
  handleDrawerToggle,
  children,
}): JSX.Element => {
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexSharing: 0,
          "*& . MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      ></Drawer>
    </>
  );
};

export default SideBar;
