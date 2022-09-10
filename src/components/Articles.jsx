import React from 'react'
import Currency from '../assets/image-currency.jpg'
import Restaurant from '../assets/image-restaurant.jpg'
import Plane from '../assets/image-plane.jpg'
import Confetti from '../assets/image-confetti.jpg'

const Articles = () => {
    return (
        <div>
            <div className=''>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
                    <div>
                        <h1 className='text-4xl font-normal'>Latest Articles</h1>
                    </div>


                    <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-10 text-center py-8'>
                        <div>
                            <img src={Currency} alt="" className='rounded-sm' />
                            <p className='max-w-xl text-sm py-4 font-normal text-gray-500 text-left '>By Claire Robinson</p>
                            <h1 className='cursor-pointer max-w-xl text-xl font-normal  text-left hover:text-green-400'>Receive money in any currency with no fees</h1>
                            <p className='max-w-sm py-4 mx-auto md:mx-0 text-left font-normal text-gray-500'>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                        </div>
                        <div>
                            <img src={Restaurant} alt="" className='rounded-sm' />
                            <p className='max-w-xl text-sm py-4 font-normal text-gray-500 text-left '>By Wilson Hutton</p>
                            <h1 className='cursor-pointer max-w-xl text-xl font-normal  text-left hover:text-green-400'>Treat yourself without worrying about money</h1>
                            <p className='max-w-sm py-4 mx-auto md:mx-0 text-left font-normal text-gray-500'>Our simple budgeting feature allows you to separate out your spending and set
                                realistic limits each month. That means you …</p>
                        </div>
                        <div>
                            <img src={Plane} alt="" className='rounded-sm' />
                            <p className='max-w-xl text-sm py-4 font-normal text-gray-500 text-left '>By Wilson Hutton</p>
                            <h1 className='cursor-pointer max-w-xl text-xl font-normal  text-left hover:text-green-400'>Take your Easybank card wherever you go</h1>
                            <p className='max-w-sm py-4 mx-auto md:mx-0 text-left font-normal text-gray-500'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                                while you’re abroad. We’ll even show you …</p>
                        </div>
                        <div>
                            <img src={Confetti} alt="" className='rounded-sm' />
                            <p className='max-w-xl text-sm py-4 font-normal text-gray-500 text-left '>By Claire Robinson</p>
                            <h1 className='cursor-pointer max-w-xl text-xl font-normal  text-left hover:text-green-400'>Our invite-only Beta accounts are now live!</h1>
                            <p className='max-w-sm py-4 mx-auto md:mx-0 text-left font-normal text-gray-500'>After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                                It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default Articles