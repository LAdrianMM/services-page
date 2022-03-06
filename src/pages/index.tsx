import type { NextPage } from 'next'
import { LandingPage } from '@components'
import SSRProvider from 'react-bootstrap/SSRProvider'
import '@helpers/initFA'

const Home: NextPage = () => {
  return (
    <SSRProvider>
      <LandingPage />
    </SSRProvider>
  )
}

export default Home
