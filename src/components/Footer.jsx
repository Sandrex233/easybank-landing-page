import React from 'react'
import Logowhite from '../assets/logo-white.svg'
import Facebook from '../assets/icon-facebook.svg'
import Youtube from '../assets/icon-youtube.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-[#0a192f]'>
            <div className='container flex flex-col-reverse justify-between px-8 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div className='mx-auto my-6 text-center text-gray-400 md:hidden'>© Easybank. All Rights Reserved</div>

                    <div className=''>
                        <img src={Logowhite} alt="" className='h-5' />
                    </div>

                    <div className='flex justify-center space-x-4'>
                        <a href="#">
                            <img src={Facebook} alt="" className='h-5 hovered' />
                        </a>
                        <a href="#">
                            <img src={Youtube} alt="" className='h-5 hovered' />
                        </a>
                        <a href="#">
                            <img src={Twitter} alt="" className='h-5 hovered' />
                        </a>
                        <a href="#">
                            <img src={Pinterest} alt="" className='h-5 hovered' />
                        </a>
                        <a href="#">
                            <img src={Instagram} alt="" className='h-5 hovered' />
                        </a>
                    </div>
                </div>

                <div className='flex justify-around space-x-32'>
                    <div className='flex flex-col space-y-3 text-gray-300'>
                        <a href="#" class="hover:text-green-500">About Us</a>
                        <a href="#" class="hover:text-green-500">Contact</a>
                        <a href="#" class="hover:text-green-500">Blog</a>

                    </div>
                    <div className='flex flex-col space-y-3 text-gray-300'>
                        <a href="#" class="hover:text-green-500">Careers</a>
                        <a href="#" class="hover:text-green-500">Support</a>
                        <a href="#" class="hover:text-green-500">Privacy Policy</a>

                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <div className='flex space-x-3'>
                        <button className='px-6 py-2 text-white text-sm font-medium rounded-full bg-gradient-to-r baseline from-green-400 to-cyan-500 hover:opacity-70'>Request Invite</button>
                    </div>
                    <div className='hidden text-gray-400 md:block'>© Easybank. All Rights Reserved</div>
                </div>
            </div>
        </footer>



    )
}

export default Footer