import './App.css'
import Companies from './Section/Companies'
import Credit from './Section/Credit'
import FAQ from './Section/FAQ'
import FeaturedProduct from './Section/FeaturedProduct'
import Footer from './Section/Footer'
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
        <Companies/>
        <Footer/>
        <Credit/>
     </div> 
    </>
  )
}

export default App
