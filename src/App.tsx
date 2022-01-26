import { FC, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"

// Components
import {AppBar} from './components'

const App: FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">('dark');

  const theme = createTheme({
    palette: {
      mode: themeMode
    },
    typography: {
      fontSize: 14
    }
  });

  return <ThemeProvider theme={theme}>
    <CssBaseline />
   <AppBar />
  </ThemeProvider>
}

export default App;
