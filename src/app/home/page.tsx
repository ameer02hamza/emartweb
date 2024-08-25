import React from 'react'
import { homeCategories } from './components/consts'

function HomeScreen() {
    return (
        <div className='mt-2 px-4 md:px-16 lg:px-24 py-4'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2 '>

                <div className='w-full md:w-3/12 '>
                    <div className='bg-red-500 text-white text-xs font-bold px-2 py-2.5'>Shop By Categories</div>
                    <ul className='space-y-4 bg-gray-400 p-3 border border-md'>
                        {homeCategories.map((cat, index) => <li key={index} className='flex items-center font-medium text-sm '>
                            <div className='w-2 h-2 border border-red-500 rounded-full mr-2'>

                            </div>
                            {cat}
                        </li>)}
                    </ul>
                </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img src="/images/banner.png" alt="" className='h-full w-full' />
                    <div className='absolute top-11 left-8'>
                        <p className='text-gray-600 mb-4'>Hi a super hot sales is on its way</p>
                        <h2 className='text-xl mt-2.5 font-bold text-gray-800'>Welcome to the Eshop</h2>
                        <p className='text-gray-600 mb-4'>Million + Products</p>
                        <button className=' bg-red-500 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform
                        transition-transform duration-300 hover:scale-105'>Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen