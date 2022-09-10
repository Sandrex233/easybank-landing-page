import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='flex items-center justify-between px-20 p-6'>
            <div className=''>
                <img src={Logo} alt="" />
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className='hidden md:flex items-center justify-center gap-5 font-normal text-gray-500'>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Home</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>About</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Contact</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Blog</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Careers</li>
            </ul>

            <ul
                className={!nav
                    ? 'hidden'
                    : 'absolute top-[100px] left-[60px] w-2/3 h-1/3 bg-white flex flex-col justify-center space-y-4 items-center text-gray-500'}>
                <li onClick={handleClick} className='hover:text-black cursor-pointer'>Home</li>
                <li onClick={handleClick} className='hover:text-black cursor-pointer'>About</li>
                <li onClick={handleClick} className='hover:text-black cursor-pointer'>Contact</li>
                <li onClick={handleClick} className='hover:text-black cursor-pointer'>Blog</li>
                <li onClick={handleClick} className='hover:text-black cursor-pointer'>Careers</li>
            </ul>
            <a href='#' className='hidden p-3 px-6 text-sm text-white bg-gradient-to-r from-green-400 to-cyan-500
                rounded-full baseline hover:opacity-70 font-medium md:block'>Request Invite</a>



        </div>
    )
}

export default Navbar