import { FC } from 'react'

import Box from '@mui/material/Box'
import { CircularProgress, SxProps } from '@mui/material'

interface LoadingProps {
  size?: number
  sx?: SxProps
}

const Loading: FC<LoadingProps> = (props): JSX.Element => {
  const { size, sx } = props

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  )
}

Loading.defaultProps = {
  size: 40,
}

export default Loading
