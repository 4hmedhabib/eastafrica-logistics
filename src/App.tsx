import { FC, useState, useCallback } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// Components
import { AppBar, SideBar } from "./components";

const App: FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = useCallback(() => {}, []);
  const onThemeChange = useCallback(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        onThemeChange={onThemeChange}
        handleDrawerToggle={handleDrawerToggle}
        isDarkMode={themeMode === "dark"}
      />
      <SideBar handleDrawerToggle={handleDrawerToggle} isOpen={false} />
    </ThemeProvider>
  );
};

export default App;
