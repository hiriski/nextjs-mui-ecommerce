// import { AppStyleLibs } from '@/features/app/libs'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const fontFamily = ['"Jost", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'].join(',')

const typography: TypographyOptions = {
  fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: 34,
  },
  h2: {
    fontWeight: 500,
    fontSize: 30,
  },
  h3: {
    fontSize: 28,
    fontWeight: 500,
  },
  h4: {
    fontSize: 24,
    fontWeight: 500,
  },
  h5: {
    fontSize: 19,
    fontWeight: 500,
  },
  h6: {
    fontSize: 16,
    fontWeight: 500,
  },
  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: '0.8rem',
  },
  subtitle2: {
    fontSize: '0.8rem',
    fontWeight: 500,
  },
}

export { typography }
