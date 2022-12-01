import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function Home() {
  return (
    <>
      <Menu />
      <h1>Home</h1>
      <Outlet />
    </>
  )
}

export default Home
