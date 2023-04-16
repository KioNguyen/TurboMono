// @mui
import { CssBaseline } from '@mui/material';
import { Shadows } from '@mui/material/styles';
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { useMemo } from 'react';

import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
//
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

// ----------------------------------------------------------------------
export default function ThemeProvider({ children }: any) {
  const themeOptions = useMemo(
    () => ({
      palette: palette,
      shape: { borderRadius: 6 },
      typography: typography as TypographyOptions,
      shadows: shadows() as Shadows,
      customShadows: customShadows(),
    }),
    [],
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
