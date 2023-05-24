import { FC, forwardRef, ReactElement, ReactNode } from 'react'

// Mui components.
import Slide, { SlideProps } from '@mui/material/Slide'
import MuiDialog, { DialogProps } from '@mui/material/Dialog'
import { Box, IconButton, styled, Typography, SxProps, useTheme } from '@mui/material'

// Mui icons.
import { Button } from '@/components/core'
import { Iconify } from '../iconify'

// Transition component.
// eslint-disable-next-line react/display-name
const Transition = forwardRef<unknown, SlideProps>((props, ref): ReactElement => <Slide ref={ref} direction='up' {...props} />)

const DialogTitle = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
const DialogContent = styled(Box)(({ theme }) => ({
  height: '100%',
  '& p': {
    marginBottom: theme.spacing(1.5),
    '&:last-child': {
      marginBottom: 0,
    },
  },
}))
const DialogActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(2),
  justifyContent: 'space-between',
}))

interface Props extends Omit<DialogProps, 'title'> {
  paperStyles?: SxProps
  title?: ReactNode
  icon?: ReactNode
  iconColor?: string
  onConfirm?: () => void
  confirmButtonText?: string
  disableCloseButton?: boolean
  disableCancelButton?: boolean
  disableConfirmButton?: boolean
  cancelButtonText?: string
  enableActionButton?: boolean
}

const Dialog: FC<Props> = (props): JSX.Element => {
  const theme = useTheme()
  const {
    sx,
    open,
    icon,
    iconColor,
    title,
    onClose,
    maxWidth,
    fullScreen,
    children,
    paperStyles,
    onConfirm,
    confirmButtonText,
    disableCloseButton,
    disableCancelButton,
    disableConfirmButton,
    enableActionButton,
    cancelButtonText,
    ...rest
  } = props
  return (
    <MuiDialog
      fullWidth
      maxWidth={maxWidth}
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 1,
        sx: {
          position: 'relative',
          borderRadius: fullScreen ? 0 : 1.6,
          m: 0,
          px: { xs: 3, md: 9 },
          py: { xs: 2, md: 6 },
          ...(theme.palette.mode === 'light' && {
            boxShadow: 6,
          }),

          ...paperStyles,
        },
      }}
      sx={{
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgb(123 126 130 / 88%)',
          backdropFilter: 'blur(10px)',
          ...(theme.palette.mode === 'light' && {
            backgroundColor: 'rgb(30 36 64 / 55%)',
          }),
        },
        ...sx,
      }}
      {...rest}
    >
      {icon && (
        <Box
          sx={{
            pb: 2,
            lineHeight: 1,
            textAlign: 'center',
            '& svg': {
              height: '60px !important',
              width: '60px !important',
              color: `${iconColor} !important`,
            },
          }}
        >
          {icon}
        </Box>
      )}
      {title && (
        <DialogTitle>
          <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Typography>
        </DialogTitle>
      )}

      {!disableCloseButton && (
        <IconButton
          onClick={onClose as () => void}
          sx={{
            backgroundColor: theme.palette.action.hover,
            '&:hover': {
              backgroundColor: theme.palette.action.focus,
            },
            position: 'absolute',
            top: theme => theme.spacing(2.6),
            right: theme => theme.spacing(3),
          }}
        >
          <Iconify icon='ion:close' />
        </IconButton>
      )}
      <DialogContent>{children}</DialogContent>
      {enableActionButton && (
        <DialogActions>
          {!disableCancelButton && (
            <Button onClick={onClose as () => void} size='medium' variant='text'>
              {cancelButtonText}
            </Button>
          )}
          <Button disabled={disableConfirmButton} onClick={onConfirm} size='medium' sx={{ ml: 'auto' }}>
            {confirmButtonText}
          </Button>
        </DialogActions>
      )}
    </MuiDialog>
  )
}

Dialog.defaultProps = {
  disableCancelButton: false,
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Ok',
  enableActionButton: false,
  maxWidth: 'xs',
  iconColor: 'inherit',
}

export default Dialog
