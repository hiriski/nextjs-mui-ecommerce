import { FC } from 'react'

// Mui
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Hello: FC = () => {
  return (
    <Stack sx={{ height: '100%' }} alignItems='center' justifyContent='center'>
      <Typography variant='h5' component='h1'>
        Hello
      </Typography>
      <Typography>NextJS MUI Ecommerce Template</Typography>
    </Stack>
  )
}

export { Hello }
