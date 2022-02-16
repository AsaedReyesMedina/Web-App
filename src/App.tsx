import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DashboardRoutes from './routers/DashboardRoutes';
import { UseContext } from './Hooks/UseContext';
const App = () => {
  const [title, setTitle] = useState("Web App Challenge");
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <UseContext.Provider value={{title,setTitle}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardRoutes />
    </ThemeProvider>
    </UseContext.Provider>
  )
}

export default App