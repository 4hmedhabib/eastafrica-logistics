import { FC } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch as ThemeSwitcher,
  Box,
} from "@mui/material/";
import {
  Menu,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100vw",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  ...(isDrawerOpen && {
                    display: "none",
                  }),
                }}
              >
                <Menu />
              </IconButton>
              <Typography variant="subtitle1" component="div">
                Trading App
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              {isDarkMode ? <DarkModeIcon /> : null}
              <ThemeSwitcher onClick={onThemeChange} size="small" />
              {!isDarkMode ? <LightModeIcon /> : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
