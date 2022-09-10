import React from 'react'
import Mockups from '../assets/mockups.png'
import Mockupsm from '../assets/mockups-mobile.png'


const Header = () => {
    return (
        <>
            <img src={Mockupsm} alt="" className='md:hidden flex' />
            <div className='flex justify-between items-center flex-row  mx-auto'>
                <div className='flex flex-col space-y-12 mb-12 px-6 mx-auto mt-50'>
                    <h1 className='max-w-md text-4xl font-normal text-left'>Next generation digital banking</h1>
                    <p className='max-w-sm text-center font-normal text-gray-500 md:text-left'>Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.</p>
                    <div className="flex justify-center items-center md:justify-start">
                        <a href='#' className='p-3 px-6 text-sm text-white bg-gradient-to-r from-green-400 to-cyan-500
                rounded-full baseline hover:opacity-70 font-medium max-w-[150px]'>Request Invite</a>
                    </div>
                </div>
                <div>
                    <img src={Mockups} alt="" className='hidden md:flex' />
                </div>
            </div>
        </>

    )
}

export default Header