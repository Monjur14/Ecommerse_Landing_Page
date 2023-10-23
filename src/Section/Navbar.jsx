import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const toggle = () => {
        setNav(!nav)
    }
  return (
    <div className="contain mx-auto bg-white">
        <nav className="py-4 md:py-5 flex justify-between items-center relative">
            <div>
                <img src="Logo.png" alt="" className="w-[120px] xsm:w-[130px] md:w-[170px] xlg:w-[180px]"/>
            </div>
            <div className="hidden lg:block">
                <ul className='flex gap-10 text-lg font-bold'>
                    <li className='cursor-pointer hover:text-blue'><a href="#home">Home</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#about">About</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#reviews">Reviews</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#features">Featured</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#product">Products</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#faq">Faqs</a></li>
                    <li className='cursor-pointer hover:text-blue'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {nav ? <div className='block lg:hidden cursor-pointer' onClick={toggle}>
                <RxHamburgerMenu size={30}/>
            </div> : <div className='absolute w-full h-screen left-0 transform top-0 py-4 md:py-5 flex flex-col bg-white'>
                <div className='self-end cursor-pointer' onClick={toggle}>
                    <AiOutlineCloseSquare size={37}/>
                </div>
                <div className='text-center my-auto'>
                    <ul className='text-2xl md:text-4xl font-bold flex
                    flex-col gap-7'>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#home">Home</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#about">About</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#reviews">Reviews</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#features">Featured</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#product">Products</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#faq">Faqs</a></li>
                        <li className='cursor-pointer hover:text-blue' onClick={toggle}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>}            
        </nav>
    </div>
  )
}

export default Navbar
