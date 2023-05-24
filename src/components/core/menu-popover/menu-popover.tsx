import { FC } from 'react'
import { styled } from '@mui/material/styles'
import { SxProps } from '@mui/material/styles'
import MuiPopover, { PopoverProps } from '@mui/material/Popover'

interface IArrowStyle {
  arrow?: string
}

const ArrowStyle = styled('span', {
  shouldForwardProp: prop => prop !== 'arrow',
})<IArrowStyle>(({ arrow, theme }) => {
  const SIZE = 12

  const POSITION = -(SIZE / 2)

  const borderStyle = `solid 1px transparent`

  const topStyle = {
    borderRadius: '0 0 3px 0',
    top: POSITION,
    borderBottom: borderStyle,
    borderRight: borderStyle,
  }

  const bottomStyle = {
    borderRadius: '3px 0 0 0',
    bottom: POSITION,
    borderTop: borderStyle,
    borderLeft: borderStyle,
  }
  const leftStyle = {
    borderRadius: '0 3px 0 0',
    left: POSITION,
    borderTop: borderStyle,
    borderRight: borderStyle,
  }
  const rightStyle = {
    borderRadius: '0 0 0 3px',
    right: POSITION,
    borderBottom: borderStyle,
    borderLeft: borderStyle,
  }

  return {
    [theme.breakpoints.up('sm')]: {
      zIndex: 1,
      width: SIZE,
      height: SIZE,
      content: "''",
      position: 'absolute',
      transform: 'rotate(-135deg)',
      background: theme.palette.background.paper,
    },
    // Top
    ...(arrow === 'top-left' && { ...topStyle, left: 20 }),
    ...(arrow === 'top-center' && {
      ...topStyle,
      left: 0,
      right: 0,
      margin: 'auto',
    }),
    ...(arrow === 'top-right' && { ...topStyle, right: 20 }),
    // Bottom
    ...(arrow === 'bottom-left' && { ...bottomStyle, left: 20 }),
    ...(arrow === 'bottom-center' && {
      ...bottomStyle,
      left: 0,
      right: 0,
      margin: 'auto',
    }),
    ...(arrow === 'bottom-right' && { ...bottomStyle, right: 20 }),
    // Left
    ...(arrow === 'left-top' && { ...leftStyle, top: 20 }),
    ...(arrow === 'left-center' && {
      ...leftStyle,
      top: 0,
      bottom: 0,
      margin: 'auto',
    }),
    ...(arrow === 'left-bottom' && { ...leftStyle, bottom: 20 }),
    // Right
    ...(arrow === 'right-top' && { ...rightStyle, top: 20 }),
    ...(arrow === 'right-center' && {
      ...rightStyle,
      top: 0,
      bottom: 0,
      margin: 'auto',
    }),
    ...(arrow === 'right-bottom' && { ...rightStyle, bottom: 20 }),
  }
})

interface MenuPopoverProps extends PopoverProps {
  open: boolean
  arrow?: string
  disabledArrow?: boolean
  sx?: SxProps
}

const MenuPopover: FC<MenuPopoverProps> = (props): JSX.Element => {
  const { children, arrow, disabledArrow, transformOrigin, anchorOrigin, sx, ...otherProps } = props
  return (
    <MuiPopover
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      PaperProps={{
        sx: {
          p: 1,
          minWidth: 100,
          overflow: 'inherit',
          boxShadow: 8,
          backgroundColor: 'background.paper',
          backgroundImage: 'none',
          '& .MuiMenuItem-root': {
            borderRadius: 1,
          },
          ...sx,
        },
      }}
      {...otherProps}
    >
      {!disabledArrow && <ArrowStyle arrow={arrow} />}
      {children}
    </MuiPopover>
  )
}

MenuPopover.defaultProps = {
  arrow: 'top-right',
  disabledArrow: false,
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  transformOrigin: { vertical: 'top', horizontal: 'right' },
}

export default MenuPopover
