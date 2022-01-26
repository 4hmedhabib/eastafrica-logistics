import { FC } from "react";
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
import { boolean } from "yup";

interface Props {
  handleDrawerToggle: () => void;
  onThemeChange: () => void;
  isDarkMode: boolean;
  isDrawerOpen: boolean;
}

const AppBarComponent: FC<Props> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  return (
    <>
      <AppBar position="static" variant="elevation">
        <Toolbar variant="dense">
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                ...(isDrawerOpen && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="subtitle2" component="div">
              Trading App
            </Typography>
          </>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitcher onClick={onThemeChange} size="small" />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
