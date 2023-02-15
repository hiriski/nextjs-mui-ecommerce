import React, { FC, ReactNode, useMemo } from 'react'

// Mui
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Lodash
import { merge } from 'lodash'

// Theme config
import { PaletteMode } from '@mui/material'
import { paletteBase } from '@/features/theme/config/theme.palette-base'
import { paletteDark } from '@/features/theme/config/theme.palette-dark'
import { paletteLight } from '@/features/theme/config/theme.palette-light'
import { typography } from '@/features/theme/config/theme.typography'
import { shadows } from '@/features/theme/config/theme.shadows'
import { components } from '@/features/theme/config/theme.components'

interface MuiThemeProviderProps {
  children: ReactNode
}

const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
  const mode: PaletteMode = 'light' // Hardcoded to light mode
  const theme = useMemo<Theme>(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const palette = mode === 'dark' ? merge(paletteBase, paletteDark) : merge(paletteBase, paletteLight)
    return createTheme({
      palette,
      typography,
      shadows,
      components,
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { MuiThemeProvider }
