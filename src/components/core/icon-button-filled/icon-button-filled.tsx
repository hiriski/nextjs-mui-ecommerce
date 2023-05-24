import { FC } from 'react'

// @mui
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

interface Props extends IconButtonProps {}

export const StyledIconButton = styled(MuiIconButton, { shouldForwardProp: prop => prop !== 'color' })(({ theme, color }) => ({
  ...(color === 'error' && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.dark,
    },
  }),
  ...(color === 'success' && {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.success.dark,
    },
  }),
  ...(color === 'info' && {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.info.dark,
    },
  }),
  ...(color === 'warning' && {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.warning.dark,
    },
  }),
  ...(color === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(color === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
}))

const IconButtonFilled: FC<Props> = (props): JSX.Element => {
  const { color, ...rest } = props
  return <StyledIconButton color={color} {...rest} />
}

export default IconButtonFilled
