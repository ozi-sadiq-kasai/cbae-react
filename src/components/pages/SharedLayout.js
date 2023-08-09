import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Logobar'

const SharedLayout = () => {
  return (
    <>
     <Footer/>
     <Outlet/>
     <Navbar/>
    </> 
  )
}
export default SharedLayout