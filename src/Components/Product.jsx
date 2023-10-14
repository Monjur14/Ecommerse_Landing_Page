import {AiFillStar} from 'react-icons/ai'

const Product = ({img, heading,}) => {
  return (
    <div className='space-y-3 md:space-y-4'>
      <img src={img} alt="" />
      <span className='flex md:text-2xl'><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></span>
      <div>
        <h3 className='text-[1.5rem] xsm:text-[1.8rem] md:text-[2rem] lg:text-[1.6rem] font-bold'>{heading}</h3>
         <div className='flex gap-1 items-center'>
            <p className='text-blue font-bold text-2xl md:text-[1.9rem] lg:text-[1.5rem]'>$99.99</p>
            <del className='decoration-slice text-lg font-bold md:text-xl lg:text-[1.1rem]'>$190</del>
        </div>
      </div>
      <button className="py-2 px-5 font-bold md:py-3 md:px-6 md:text-lg hover:text-blue border hover:bg-white bg-white text-black rounded-full shadow-black">Order Now</button>
    </div>
  )
}

export default Product
