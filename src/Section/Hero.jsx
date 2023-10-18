import Button from "../Components/Button"

const Hero = () => {
  return (
    <div className="contain mx-auto">
      <div className="section__padding flex flex-col lg:flex-row gap-12 xsm:gap-14 md:gap-20">
        <div className="space-y-1 xsm:space-y-2 md:space-y-7 lg:space-y-8 basis-1/2 lg:self-center">
            <h1 className="text-3xl xsm:text-4xl md:text-[3.5rem] xlg:text-[3.5rem] lg:text-[3rem] font-bold">Discover <span className="text-blue">Innovation</span></h1>
            <h1 className="text-3xl xsm:text-4xl md:text-[3.5rem] xlg:text-[3.5rem] lg:text-[3rem] font-bold">Unleash the <span className="text-blue">Future</span></h1>
            <h1 className="text-3xl xsm:text-4xl md:text-[3.5rem] xlg:text-[3.5rem] lg:text-[3rem] font-bold">with Our <span className="text-blue">Products</span></h1>
            <p className="text-gray text-sm xsm:text-base md:text-xl py-2 lg:py-0">Elevate Your Experience and Embrace Excellence</p>
            <Button title="Order Now"/> 
        </div>
        <div className="basis-1/2 md:self-center">
            <img src="heroimg.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
