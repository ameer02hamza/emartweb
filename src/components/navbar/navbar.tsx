import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'

function NavBar() {
    return (
        <nav  className='bg-white shadow-md'>
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
                <div className='flex items-center space-x-4 text-black'>
                    <Link href={'cart'}>
                    <FaShoppingCart className='text-lg'>
                        
                    </FaShoppingCart>
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
                <Link href={"/home"} className='hover:underline'>
                Home
                </Link>
                <Link href={"/shop"} className='hover:underline'>
                Shop
                </Link>
                <Link href={"/home"} className='hover:underline'>
                Contact
                </Link>
                <Link href={"/home"} className='hover:underline'>
                About
                </Link>
            </div>
        </nav>
    )
}

export default NavBar