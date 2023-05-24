import { ChangeEvent, FC } from 'react'

// @mui
import MuiPagination, { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/material'

// eslint-disable-next-line
interface PaginationProps extends Omit<MuiPaginationProps, 'onChange' | 'sx'> {
  onChange: (newPage: number) => void
  sx?: SxProps
}

const Pagination: FC<PaginationProps> = (props): JSX.Element => {
  const { onChange, sx, ...rest } = props

  const onChangePagination = (_: ChangeEvent<unknown>, newPage: number): void => {
    onChange(newPage)
  }
  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <MuiPagination onChange={onChangePagination} {...rest} renderItem={item => <PaginationItem {...item} />} />
    </Stack>
  )
}

export default Pagination
