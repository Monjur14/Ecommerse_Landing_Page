import Product from "../Components/Product"
import item1 from '/public/item1.png'
import item2 from '/public/item2.png'
import item3 from '/public/item3.png'

const OurProducts = () => {
  return (
    <div className="contain mx-auto">
        <div className="section__padding flex flex-col gap-10 md:gap-12">
            <div>
                <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-1">Our <span className='text-blue'>Products</span></h1>
                <p className='text-center text-sm xsm:text-bs text-gray'>List your other great products here.</p>
            </div>
            <div className="flex flex-col gap-14 md:items-center lg:flex-row">
                <Product img={item1} heading={"Glossary Items"}/>
                <Product img={item2} heading={"Brush Items"}/>
                <Product img={item3} heading={"Head Phone"}/>
            </div>
        </div> 
    </div>
  )
}

export default OurProducts
