import { FC, useState, useCallback } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// Components
import { AppBar, SideBar, Menu } from "./components";
import ROUTES, { BLOTTER, TRADETICKET, MAIN } from "./routes";

import { Blotter, Dashboard, TradeTicket } from "./features";

const App: FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sideBarToggler, setSideBarToggler] = useState<boolean>(false);

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

  const onThemeChange = useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        onThemeChange={onThemeChange}
        handleDrawerToggle={handleDrawerToggle}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sideBarToggler}
      />
      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        isOpen={sideBarToggler}
        children={<Menu links={ROUTES} />}
      />
      <Routes>
        <Route path={MAIN} element={<Dashboard />} />
        <Route path={BLOTTER} element={<Blotter />} />
        <Route path={TRADETICKET} element={<TradeTicket />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
