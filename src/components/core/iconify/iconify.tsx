import React, { FC } from 'react'

// icons
import { Icon, IconProps } from '@iconify/react'

// @mui
import { SxProps } from '@mui/material/styles'

interface Props extends IconProps {
  sx?: SxProps
}

const Iconify: FC<Props> = (props): JSX.Element => {
  const { icon, sx, ...rest } = props
  return <Icon icon={icon} {...rest} />
}

export default Iconify
