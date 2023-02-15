import React, { FC } from 'react'

// Mui
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const NotFoundPage: FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Stack direction='column' spacing={1} alignItems='center'>
        <Typography variant='h4'>404</Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          Page not found
        </Typography>
      </Stack>
    </Box>
  )
}

export default NotFoundPage
