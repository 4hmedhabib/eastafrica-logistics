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
  onThemeChange: () => void;
}

const AppBarComponent: FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="subtitle2" component="div">
            Trading App
          </Typography>
          <ThemeSwitcher onClick={onThemeChange} size="small" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
