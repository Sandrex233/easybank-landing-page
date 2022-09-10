import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-20 p-6'>
            <div className=''>
                <img src={Logo} alt="" />
            </div>

            <ul className='hidden md:flex items-center justify-center gap-5 font-normal text-gray-500'>
                <li className='hover:inline hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Home</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>About</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Contact</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Blog</li>
                <li className='hover:text-black cursor-pointer hover:border-b-2 hover:border-b-green-400'>Careers</li>
            </ul>
            <a href='#' className='hidden p-3 px-6 text-sm text-white bg-gradient-to-r from-green-400 to-cyan-500
                rounded-full baseline hover:opacity-70 font-medium md:block'>Request Invite</a>

        </div>
    )
}

export default Navbar