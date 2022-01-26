import React, { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch as ThemeSwitcher,
} from "@mui/material/";
import {
  Menu,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

interface Props {
  handleDrawerToggle: () => void;
}

const AppBarComponent: FC<Props> = ({ handleDrawerToggle }): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation" fle>
        <Toolbar variant="dense">
          <IconButton color="inherit" edge="start">
            <Menu />
          </IconButton>
          <Typography variant="subtitle2" component="div">
            Trading App
          </Typography>
        </Toolbar>
        <ThemeSwitcher />
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
