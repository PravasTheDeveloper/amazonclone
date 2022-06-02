import React from 'react'
import {MenuIcon} from '@heroicons/react/outline';

function BottomNav() {
  return (
    <>
        <div>
            <div className='sm:flex flex flex-col sm:flex-row justify-between'>
                <div>
                    <ul className='sm:flex flex flex-col sm:flex-row items-start'>
                        <li className='flex mt-5 sm:mt-0'><MenuIcon className='w-6 h-6 mr-2' />All</li>
                        <li className='md:mx-4 mt-5 sm:mt-0'>Today Deal</li>
                        <li className='md:mx-4 mt-5 sm:mt-0'>Customer Service</li>
                        <li className='md:mx-4 mt-5 sm:mt-0'>Registry</li>
                        <li className='md:mx-4 mt-5 sm:mt-0'>Gift Cart</li>
                        <li className='md:ml-4 mt-5 sm:mt-0'>Sell</li>
                    </ul>
                </div>
                <div>
                    <p className='md:mx-4 mt-5 sm:mt-0' >Shop Gift</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BottomNav
