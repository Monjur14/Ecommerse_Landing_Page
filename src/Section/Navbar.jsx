import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const toggle = () => {
        setNav(!nav)
    }
  return (
    <div className="contain mx-auto">
        <nav className="py-4 md:py-5 flex justify-between items-center relative">
            <div>
                <img src="Logo.png" alt="" className="w-[120px] xsm:w-[130px] md:w-[170px] xlg:w-[180px]"/>
            </div>
            <div className="hidden lg:block">
                <ul className='flex gap-10 text-lg font-bold'>
                    <li className='cursor-pointer hover:text-blue'>Home</li>
                    <li className='cursor-pointer hover:text-blue'>About</li>
                    <li className='cursor-pointer hover:text-blue'>Reviews</li>
                    <li className='cursor-pointer hover:text-blue'>video</li>
                    <li className='cursor-pointer hover:text-blue'>Features</li>
                    <li className='cursor-pointer hover:text-blue'>Products</li>
                    <li className='cursor-pointer hover:text-blue'>Faqs</li>
                    <li className='cursor-pointer hover:text-blue'>Contact</li>
                </ul>
            </div>
            {nav ? <div className='block lg:hidden' onClick={toggle}>
                <RxHamburgerMenu size={30}/>
            </div> : <div className='absolute w-full h-screen left-0 transform top-0 py-4 md:py-5 flex flex-col bg-white'>
                <div className='self-end cursor-pointer' onClick={toggle}>
                    <AiOutlineCloseSquare size={37}/>
                </div>
                <div className='text-center my-auto'>
                    <ul className='text-2xl md:text-4xl font-bold flex
                    flex-col gap-7'>
                        <li className='cursor-pointer hover:text-blue'>Home</li>
                        <li className='cursor-pointer hover:text-blue'>About</li>
                        <li className='cursor-pointer hover:text-blue'>Reviews</li>
                        <li className='cursor-pointer hover:text-blue'>video</li>
                        <li className='cursor-pointer hover:text-blue'>Features</li>
                        <li className='cursor-pointer hover:text-blue'>Products</li>
                        <li className='cursor-pointer hover:text-blue'>Faqs</li>
                        <li className='cursor-pointer hover:text-blue'>Contact</li>
                    </ul>
                </div>
            </div>}            
        </nav>
    </div>
  )
}

export default Navbar
