import { productType } from "@/interfaces/card.type";
import { addToCart } from "@/redux/features/cart/cartSlice";
import React, { useMemo,  } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";

function ProductCard({ product, }: { product: productType }) {
  console.log(product.quantity);
  
  const dispatch = useDispatch();
  
  const handleAddToCart = (e: any, product: productType) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const setButtonComponent = useMemo(() => {
    if (product.quantity == 0) {
      return (
        <button
          onClick={(e) => handleAddToCart(e, product)}
          type="button"
          className="inline-flex items-center rounded-lg bg-red-700 px-5 py-2.5
       text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 
        focus:ring-primary-300 "
        >
          <svg
            className="-ms-2 me-2 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
          Add to cart
        </button>
      );
    }

    return (
      <form className="max-w-xs mx-auto">
        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            data-input-counter-min="1"
            data-input-counter-max="50"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
            placeholder="999"
            readOnly
            value={product.quantity}
            required
          />
          <button
         
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-gray-900 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </form>
    );
  }, []);
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm mb-2 mr-2
    "
    >
      <div className="h-56 w-full">
        <a href="#">
          <img className="mx-auto  h-full " src={product.imageUrl} alt="" />
        </a>
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium
           text-primary-800 "
          >
            {" "}
            Up to 35% off{" "}
          </span>

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="sr-only"> Quick look </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-quick-look"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
              data-popper-placement="top"
            >
              Quick look
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>

            <button
              type="button"
              data-tooltip-target="tooltip-add-to-favorites"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 "
            >
              <span className="sr-only"> Add to Favorites </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
            <div
              id="tooltip-add-to-favorites"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
              data-popper-placement="top"
            >
              Add to favorites
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline "
        >
          {product.title}
        </a>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
          {Array(product.rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-amber-400">
              <FaStar></FaStar>
            </span>
          ))}

          </div>
          <p className="text-sm font-medium text-gray-500 ">(455)</p>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500">Fast Delivery</p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500">Best Price</p>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 ">
            ${product.price}
          </p>
          {setButtonComponent}
        </div>
      </div>
    </div>
    // <div
    //   className="bg-white p-4 border mb-4 rounded-lg shadow-md w-full max-w-max
    //                  transform transition-transform duration-300
    //                   hover:scale-105"
    // >
    //   <img
    //     src={product.imageUrl}
    //     alt=""
    //     className="w-full h-48 mb-4 object-contain"
    //   />
    //   <h3 className="text-lg font-semibold">{product.title}</h3>
    //   <p>{product.price}$</p>
    //   <div className="flex flex-row gap-2">
    //     {Array(product.rating)
    //       .fill(0)
    //       .map((_, i) => (
    //         <span key={i} className="text-amber-400">
    //           <FaStar></FaStar>
    //         </span>
    //       ))}
    //   </div>
    //   <button
    //     onClick={(e) => handleAddToCart(e, product)}
    //     className="absolute bottom-4 right-2
    //         flex items-center
    //          justify-center w-8 h-8 bg-red-600
    //         group text-white text-sm rounded-full hover:w-32 hover:bg-red-600
    //         transition-all duration-500 cursor-pointer"
    //   >
    //     <span className="group-hover:hidden text-lg">+</span>
    //     <span className="hidden  group-hover:animate-text-reveal delay-1000	 group-hover:animation-fill-mode:backwards group-hover:block">
    //       Add to Cart
    //     </span>
    //   </button>
    // </div>
  );
}

export default ProductCard;
