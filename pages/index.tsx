import type { NextPage } from 'next'
import CustomAppBar from '../components/CustomAppBar'
import MainContainer from '../containers/MainContainer'

const Home: NextPage = () => {
  return (
    <>
      <CustomAppBar />
      <CustomAppBar />
      <MainContainer />
    </>
  )
}

export default Home
