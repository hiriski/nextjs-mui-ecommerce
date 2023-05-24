import { FC } from 'react'
import MuiButton, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

interface Props extends ButtonProps {}

export const StyledButton = styled(MuiButton)({
  textTransform: 'unset',
  fontWeight: 500,
  whiteSpace: 'pre-wrap',

  // small
  '&.MuiButton-sizeSmall': {
    padding: '4px 14px',
  },

  '&.MuiButton-sizeMedium': {
    padding: '6px 14px',
  },

  '&.MuiButton-sizeLarge': {
    padding: '8px 26px',
  },
})

const Button: FC<Props> = (props): JSX.Element => {
  return <StyledButton {...props} />
}

export default Button
