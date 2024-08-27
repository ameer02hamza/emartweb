"use client"
import { RootState } from '@/redux/store/store'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function NavBar() {
    const addedProducts = useSelector((state: RootState) => state.cart.products);


    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
                <div className='text-lg font-bold text-black'>
                    <Link href={'home'}>e-shop</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form action="">
                        <input type="text" name="search"
                            className='w-full border py-4 px-4 rounded-xl'
                            placeholder='Search Product' id="" />
                        <FaSearch className='absolute top-1/3 font-bold right-3 text-2xl text-red-600'>

                        </FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-4 text-black text-lg'>
                    <Link href={'cart'} className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {addedProducts.length > 0 && (
                            <span className='absolute -top-3 left-3 text-xs w-4 bg-red-600 
                            rounded-full flex justify-center items-center text-white'>
                                {addedProducts.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block'>
                        Login | Register
                    </button>

                    <button>
                        <FaUser>

                        </FaUser>
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link href={"home"} className='hover:underline'>
                    Home
                </Link>
                <Link href={"shop"} className='hover:underline'>
                    Shop
                </Link>
                <Link href={"home"} className='hover:underline'>
                    Contact
                </Link>
                <Link href={"home"} className='hover:underline'>
                    About
                </Link>
            </div>
        </nav>
    )
}

export default NavBar