import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export interface NextPageWithLayout<T> extends NextPage<T> {
  getLayout?: (page: ReactElement) => ReactNode
}
