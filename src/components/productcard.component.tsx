import { productType } from '@/interfaces/card.type'
import { addToCart } from '@/redux/features/cart/cartSlice';
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux';

function ProductCard({ product }: { product: productType }) {
    const dispatch = useDispatch();
    const handleAddToCart = (e: any, product: productType) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch(
            addToCart(product)
        );
    }
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
            <button onClick={(e) => handleAddToCart(e, product)}
                className='absolute bottom-4 right-2 
            flex items-center
             justify-center w-8 h-8 bg-red-600
            group text-white text-sm rounded-full hover:w-32 hover:bg-red-600 
            transition-all duration-500 cursor-pointer'>
                <span className='group-hover:hidden text-lg'>+</span>
                <span className='hidden  group-hover:animate-text-reveal delay-1000	 group-hover:animation-fill-mode:backwards group-hover:block'>Add to Cart</span>
            </button>
        </div>
    )
}

export default ProductCard
