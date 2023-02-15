import { FC, ReactNode } from 'react'

// Mui components
import Box from '@mui/material/Box'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <Box>{children}</Box>
}

export { MainLayout }
