import React  from 'react'
import {Routes,Route,useLocation} from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HomePage from "./pages/home/Homepage"
import Footer from './components/common/Footer'
import Missing from './components/Missing/Missing'
import MovieDetails from './components/Moviedetails/MovieDetails'
import TheaterLists from './components/Theater_timing/TheaterLists'
import Seats from './components/TheaterSeats/Seats'
import Profile from './pages/Profile/Profile'
import Payment from './pages/PaymentPage/Payment'



const App = () => {
  const location = useLocation();



  const hideNavbarAndFooterRoutes = ['/Seats','/payment'];



  const shouldHideNavbarAndFooter = hideNavbarAndFooterRoutes.includes(location.pathname)
  return (
<div className='app bg-primary h-full relative ' >
    {!shouldHideNavbarAndFooter && <Navbar/>}
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='*' element={<Missing/>}/>
      <Route path='/details' element={<MovieDetails/>}/>
      <Route path='/buytickets' element={<TheaterLists/>}/>
      <Route path='/Seats' element={<Seats/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    {!shouldHideNavbarAndFooter && <Footer/>}
</div>

  )
  
}

export default App