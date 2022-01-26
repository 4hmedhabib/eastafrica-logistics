import { FC, useState, useCallback } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// Components
import { AppBar, SideBar } from "./components";

const App: FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggler, setSideBarToggler] = useState<boolean>(true);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = useCallback(() => {
    setSideBarToggler(!sideBarToggler);
  }, [sideBarToggler]);
  const onThemeChange = useCallback(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        onThemeChange={onThemeChange}
        handleDrawerToggle={handleDrawerToggle}
        isDarkMode={themeMode === "dark"}
      />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        isOpen={sideBarToggler}
      />
    </ThemeProvider>
  );
};

export default App;
