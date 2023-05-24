import React, { FC } from 'react'

// react-share
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  PinterestShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  LineIcon,
  LineShareButton,
} from 'react-share'

// @mui
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

const ShareItem = styled(Box)(() => ({
  lineHeight: 0,
}))

interface Props {
  url: string
  options?: {
    facebook?: boolean
    facebookMessenger?: boolean
    twitter?: boolean
    telegram?: boolean
    pinterest?: boolean
    whatsapp?: boolean
    line?: boolean
    email?: boolean
  }
}

const ShareButton: FC<Props> = (props): JSX.Element => {
  const { url, options } = props
  const title = 'GitHub'
  return (
    <Stack direction='row' alignItems='center' spacing={0.65}>
      <Typography variant='subtitle2' sx={{ mr: 1 }}>
        Share
      </Typography>

      {options?.facebook && (
        <ShareItem>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={26} round />
          </FacebookShareButton>
        </ShareItem>
      )}

      {options?.facebookMessenger && (
        <ShareItem>
          <FacebookMessengerShareButton url={url} appId='521270401588372'>
            <FacebookMessengerIcon size={26} round />
          </FacebookMessengerShareButton>
        </ShareItem>
      )}

      {options?.twitter && (
        <ShareItem>
          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={26} round />
          </TwitterShareButton>
        </ShareItem>
      )}

      {options?.telegram && (
        <ShareItem>
          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={26} round />
          </TelegramShareButton>
        </ShareItem>
      )}

      {options?.whatsapp && (
        <ShareItem>
          <WhatsappShareButton url={url} title={title} separator=':: '>
            <WhatsappIcon size={26} round />
          </WhatsappShareButton>
        </ShareItem>
      )}

      {options?.pinterest && (
        <ShareItem>
          <PinterestShareButton url={String(window.location)} media={`${String(window.location)}/foo.jpg`}>
            <PinterestIcon size={26} round />
          </PinterestShareButton>
        </ShareItem>
      )}

      {options?.email && (
        <ShareItem>
          <EmailShareButton url={url} subject={title} body='body'>
            <EmailIcon size={26} round />
          </EmailShareButton>
        </ShareItem>
      )}

      {options?.line && (
        <ShareItem>
          <LineShareButton url={url} title={title}>
            <LineIcon size={26} round />
          </LineShareButton>
        </ShareItem>
      )}
    </Stack>
  )
}

ShareButton.defaultProps = {
  options: {
    facebook: true,
    facebookMessenger: false,
    twitter: true,
    telegram: false,
    pinterest: false,
    whatsapp: true,
    line: false,
    email: true,
  },
}

export default ShareButton
