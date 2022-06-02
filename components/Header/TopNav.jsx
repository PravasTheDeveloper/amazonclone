import React, { useState } from 'react'
import { LocationMarkerIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

function TopNav() {

    const [count, setCount] = useState(false);

    return (
        <>
            <div className='sm:flex sm:flex-row flex flex-col items-center md:justify-between justify-center'>

                {/* Logo */}

                <div className='my-10 md:my-0 cursor-pointer' style={{ "width": "100px", "minWidth": "100px", "maxWidth": "100px" }}>
                    <img src="MainHeaderLogo.png" alt="Main Logo" className='w-full' />
                </div>

                {/* Delivered */}

                <div className='md:flex w-full justify-center items-center mb-10 md:my-0'>
                    <div className='w-full flex justify-around items-center'>
                        <div className='flex items-end mx-4'>
                            <div style={{ "margin-bottom": "2px" }}>
                                <LocationMarkerIcon style={{ "width": "24px" }} />
                            </div>
                            <div className='cursor-pointer link'>
                                <p className='font-light text-xs'>Deliver to</p>
                                <h1 className='font-semibold'>Bangladesh</h1>
                            </div>
                        </div>

                        {/* Search Bar */}

                        <div className='h-10 w-full hidden md:flex '>
                            <input className='h-full w-full rounded-tl-lg rounded-bl-lg text-black px-2' />
                            <button className='w-10 h-full p-2 bg-orange-300 text-stone-800 rounded-tr-lg rounded-br-lg'><SearchIcon /></button>
                        </div>

                        {/* Country Flag */}

                        <div className='ml-6' style={{ "width": "40px", "minWidth": "40px", "maxWidth": "40px" }} >
                            <h1><img src='https://countryflagsapi.com/png/usa' /></h1>
                        </div>
                    </div>

                    {/* Secoundary Search Bar */}

                    <div className='h-10 md:hidden flex my-5 md:my-0'>

                        <input className='h-full w-full rounded-tl-lg rounded-bl-lg text-black px-2' />

                        <button className='w-10 h-full p-2 bg-orange-300 text-stone-800  rounded-tr-lg rounded-br-lg' onClick={() => { setCount(!count) }}><SearchIcon /></button>
                    </div>

                    {/* Sign In */}
                    <div className='flex justify-around items-center'>
                        <div className='mx-6 min-w-fit link'>

                            <p className='text-xs font-semibold'>Hello, Sign In</p>
                            <p className='font-semibold'>Account</p>
                        </div >

                        {/* Return And Order */}

                        <div className='mr-6 min-w-fit link'>
                            <p className='text-xs font-semibold'>Returns</p>
                            <p className='font-semibold'>&Orders</p>
                        </div>
                        <div className='md:w-10 md:h-10 h-8 w-8 my-5 md:my-0 cursor-pointer flex relative'>
                            <ShoppingCartIcon />
                            <div className='bg-orange-500 absolute top-0 h-6 w-6 rounded-full flex justify-center items-center' style={{"right":"-5px","top":"-5px"}}>
                                2
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default TopNav
