import { ProductsType } from "@/interfaces/emart/product.type";
import { addToCart } from "@/redux/emart-redux/features/cart/cartSlice";
import { setProducts } from "@/redux/emart-redux/features/products/productslice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";

function ProductCard({ product }: { product: ProductsType }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSetProduct = () => {
    console.log(" handle product called");

    dispatch(setProducts(product));
    router.push(`shop/${product.id.toString()}`);
  };
  const handleAddToCart = (e: any, product: ProductsType) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const setButtonComponent = useMemo(() => {
    // if (product. == 0) {
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
  }, []);
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm mb-2 mr-2
    "
    >
      <div className="h-56 w-full">
        <img className="mx-auto  h-full " src={product.thumbnail} alt="" />
      </div>
      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span
            className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium
           text-primary-800 "
          >
            {" "}
            {product.discountPercentage}% off{" "}
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

        <div className="text-lg font-semibold leading-tight text-gray-900 hover:underline w-25 truncate hover:text-wrap cursor-pointer">
          <button onClick={handleSetProduct}>{product.title}</button>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {Array(parseInt(product.rating.toString()))
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-amber-400">
                  <FaStar></FaStar>
                </span>
              ))}
          </div>
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
            <p className="text-sm font-medium text-gray-500 w-28 truncate hover:text-wrap cursor-pointer ">
              {product.shippingInformation}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500">
              {product.availabilityStatus}
            </p>
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
  );
}

export default ProductCard;
