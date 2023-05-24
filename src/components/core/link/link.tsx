import React, { FC } from 'react'

import NextLink from 'next/link'
import MuiLink, { LinkProps } from '@mui/material/Link'

interface Props extends Omit<LinkProps, 'href'> {
  href: string
}

const Link: FC<Props> = (props): JSX.Element => {
  const { href, ...rest } = props
  return <MuiLink component={NextLink} href={href} passHref {...rest} />
}

export default Link
