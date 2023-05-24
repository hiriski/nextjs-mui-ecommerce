import React, { FC, ReactNode, useMemo } from 'react'

// Mui
import { createTheme, Theme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

// Lodash
import merge from 'lodash/merge'

// Theme mui-config
import { paletteBase, paletteDark, paletteLight, typography, components, shadows, shape, breakpoints } from '@/plugins/mui/config'

// hooks
import { useApp } from '@/features/app/hooks'

interface MuiThemeProviderProps {
  children: ReactNode
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
  const { app_isDarkMode } = useApp()
  // const app_paletteMode = 'light'

  // Theme config.
  const theme = useMemo<Theme>(() => {
    const palette = app_isDarkMode ? merge(paletteBase, paletteDark) : merge(paletteBase, paletteLight)
    return createTheme({
      palette,
      typography,
      shadows,
      components,
      shape,
      breakpoints,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app_isDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* <EmotionThemeProvider theme={theme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
        {/* </EmotionThemeProvider> */}
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default MuiThemeProvider
