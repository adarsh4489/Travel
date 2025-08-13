import './App.css'
import Navbar from './Components/Navbar'
import Booking from './Pages/Booking'
import Home from './Pages/Home'
import Faq from "./Pages/Faq"
import Deals from './Pages/Deals'
import ErrorPage from './Components/ErrorPage'
import { Routes,Route } from 'react-router'
import Footer from './Components/Footer'
import OfferDetail from './Pages/OfferDetail'
import About from './Pages/About'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <div className='max-w-[1400px] w-full bg-[#f9f9f9] px-4 py-4 '>
     <div className='mx-auto px-2  bg-orange-100 rounded-xl py-2 '>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/deals' element={<Deals/>}/>
      <Route path='/deals/:id' element={<OfferDetail/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
    <Footer/>
     </div>
    </div>
  )
}

export default App
