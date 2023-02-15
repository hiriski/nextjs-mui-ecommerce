// Next
import Head from 'next/head'

// Components
import { Hello } from '@/components/hello'

// Interfaces
import { NextPageWithLayout } from '@/features/common/interfaces'

// Layouts
import { MainLayout } from '@/components/layouts'

const HomePage: NextPageWithLayout<unknown> = () => {
  return (
    <>
      <Head>
        <title>NextJS MUI Ecommerce Template</title>
        <meta name='description' content='NextJS MUI Ecommerce Template' />
      </Head>
      <Hello />
    </>
  )
}

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default HomePage
