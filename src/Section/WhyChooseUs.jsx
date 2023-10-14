import watch from '/public/watch.png'
const WhyChooseUs = () => {
  return (
    <div className='contain mx-auto'>
      <div className='section__padding flex flex-col lg:flex-row lg:items-center gap-8'>
        <div className='basis-1/2 mx-auto'>
            <img src={watch} alt="" />
        </div>
        <div className='lg:w-full basis-1/2 '>
            <div className='lg:space-y-7 space-y-6 md:space-y-8 lg:text-center'>
                <div>
            <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-1">Why <span className='text-blue'>Choose</span> Us</h1>
            <p className='text-center text-sm xsm:text-bs text-gray'>Write some features of your products.</p>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-left lg:text-center'>Your product quality</h3>
            <p className='text-justify text-bs mt-1 md:text-lg md:leading-6 md:max-w-[500px] lg:text-center lg:mx-auto'>Suspen dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis empus oncu enim.</p>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-left lg:text-center'>Feature of your product</h3>
            <p className='text-justify text-bs mt-1 md:text-lg md:leading-6 md:max-w-[500px] lg:text-center lg:mx-auto'>Suspen dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis. A pellen tesqu.</p>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-left lg:text-center'>Customer Satisfaction</h3>
            <p className='text-justify text-bs mt-1 md:text-lg md:leading-6 md:max-w-[500px] lg:text-center lg:mx-auto'>A pellen tesque pretium feugiat vel morbi sagittis habi tasse cursus. Suspen dise tempus oncu enim pellen tesque este.</p>
        </div></div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
