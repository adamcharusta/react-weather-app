import React from 'react';
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';

const withThemeHoc = (Component: React.ComponentType<any>) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const WrappedComponent = (props: any) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );

  return WrappedComponent;
};

export default withThemeHoc;
