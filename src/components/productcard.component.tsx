import { productType } from '@/interfaces/card.type'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductCard({ product }: { product: productType }) {
    return (
        <div className='bg-white p-4 border mb-4 rounded-lg shadow-md w-full max-w-max
                     transform transition-transform duration-300
                      hover:scale-105'>
            <img src={product.imageUrl} alt="" className='w-full h-48 mb-4 object-contain' />
            <h3 className='text-lg font-semibold'>{product.title}</h3>
            <p>{product.price}$</p>
            <div className='flex flex-row gap-2'>

                {Array(product.rating)
                    .fill(0)
                    .map((_, i) => (

                        <span key={i} className='text-amber-400'><FaStar></FaStar></span>))}

            </div>
            <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
            group text-white text-sm rounded-full hover:w-32 hover:bg-red-600 transition-all duration-500 cursor-pointer'>
                <span className='group-hover:hidden text-lg'>+</span>
                <span className='hidden group-hover:block transition-all duration-75'>Add to Cart</span>
            </div>
        </div>
    )
}

export default ProductCard
