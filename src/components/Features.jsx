import React from 'react'
import Online from '../assets/icon-online.svg'
import Budgeting from '../assets/icon-budgeting.svg'
import Onboarding from '../assets/icon-onboarding.svg'
import Api from '../assets/icon-api.svg'


const Features = () => {
    return (

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <h1 className='text-4xl font-normal inline'>Why choose Easybank?</h1>
                <p className='max-w-2xl py-4 font-normal text-gray-500 text-left'>We leverage Open Banking to turn your bank account into your financial hub. Control
                    your finances like never before.</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='space-y-6 py-7'>
                    <img src={Online} alt="" className='mx-auto md:mx-0' />
                    <h1 className='max-w-md text-2xl font-normal sm:text-left text-center'>Online Banking</h1>
                    <p className='max-w-sm  mx-auto md:mx-0 text-center font-normal text-gray-500 sm:text-left'>Our modern web and mobile applications allow you to keep track of your finances
                        wherever you are in the world.</p>
                </div>
                <div className='space-y-6 py-7'>
                    <img src={Budgeting} alt="" className='mx-auto md:mx-0' />
                    <h1 className='max-w-md text-2xl font-normal sm:text-left text-center'>Simple Budgeting</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center font-normal text-gray-500 sm:text-left'>See exactly where your money goes each month. Receive notifications when you’re
                        close to hitting your limits.</p>
                </div>
                <div className='space-y-6 py-7'>
                    <img src={Onboarding} alt="" className='mx-auto md:mx-0' />
                    <h1 className='max-w-md text-2xl font-normal sm:text-left text-center'>Fast Onboarding</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center font-normal text-gray-500 sm:text-left'>We don’t do branches. Open your account in minutes online and start taking control
                        of your finances right away.</p>
                </div>
                <div className='space-y-6 py-7'>
                    <img src={Api} alt="" className='mx-auto md:mx-0' />
                    <h1 className='max-w-md text-2xl font-normal sm:text-left text-center'>Open API</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center font-normal text-gray-500 sm:text-left'>Manage your savings, investments, pension, and much more from one account. Tracking
                        your money has never been easier.</p>
                </div>
            </div>
        </div>


    )
}

export default Features