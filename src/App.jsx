import './App.css'
import FAQ from './Section/FAQ'
import FeaturedProduct from './Section/FeaturedProduct'
import Hero from './Section/Hero'
import Navbar from './Section/Navbar'
import OurProducts from './Section/OurProducts'
import Reviews from './Section/Reviews'
import WhyChooseUs from './Section/WhyChooseUs'
import WhyLander from './Section/WhyLander'

function App() {

  return (
    <>
     <div>
        <Navbar/>
        <Hero/>
        <WhyLander/>
        <Reviews/>
        <WhyChooseUs/>
        <FeaturedProduct/>
        <OurProducts/>
        <FAQ/>
     </div> 
    </>
  )
}

export default App
