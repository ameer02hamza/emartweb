"use client";

import withAuthentication from "@/components/emart-component/higherordercomponents/authvalidator.hoc";
import LoadingIndicator from "@/components/emart-component/loadingIndicator.component";
import { thunkStatus } from "@/consts/emart/const.values";
import { productsThunk } from "@/redux/emart-redux/features/products/product.thunk";
import { setProducts } from "@/redux/emart-redux/features/products/productslice";
import { AppDispatch, RootState } from "@/redux/emart-redux/store/store";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

function ProductDetailPage() {
  const productSelector = useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  const path = usePathname();
  var num: number = 1;
  const name: string = "name";

  console.log(parseInt("abc"));
  console.log(name);

  useEffect(() => {
    console.log("%c useEffect effective", "color: red");
    if (productSelector.products.length === 0) {
      console.log("%c useEffect effective", "color: green");
      dispatch(productsThunk());
    }
    if (
      productSelector.detailProduct.id == 0 &&
      productSelector.products.length > 0
    ) {
      console.log("%c useEffect effective", "color: yellow");
      dispatch(
        setProducts(
          productSelector.products.find(
            (product) => product.id === parseInt(path.toString().split("/")[2])
          )
        )
      );
    }
    if (productSelector.status != thunkStatus.loading) {
      setLoading(false);
    }
  }, [productSelector.products]);

  return loading && productSelector.detailProduct.id > 0 ? (
    <LoadingIndicator />
  ) : (
    <div className="p-10 grid h-[calc(100vh/1.2)] items-center">
      <div
        className="mx-3 p-6 bg-white border border-gray-200 rounded-lg 
    shadow-2xl"
      >
        <div className="py-8 bg-white md:py-16  antialiased">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img
                  className="w-full "
                  src={productSelector.detailProduct.thumbnail}
                  alt=""
                />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
                  {productSelector.detailProduct.title}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                    $ {productSelector.detailProduct.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                      {Array(
                        parseInt(
                          productSelector.detailProduct.rating.toString()
                        )
                      )
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="text-amber-400">
                            <FaStar></FaStar>
                          </span>
                        ))}
                    </div>
                    <p className="text-sm font-medium leading-none text-gray-500 ">
                      ({productSelector.detailProduct.rating})
                    </p>
                    <a
                      href="#"
                      className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                    >
                      {productSelector.detailProduct.reviews.length} Reviews
                    </a>
                  </div>
                </div>

                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <button
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium
                 text-gray-900 focus:outline-none bg-white rounded-lg border
                  border-gray-200 hover:bg-gray-100 hover:text-primary-700 
                  focus:z-10 focus:ring-4 focus:ring-gray-100  "
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
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
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </button>
                  <button
                    title=""
                    className="flex items-center justify-center py-2.5 px-5 text-sm font-medium
                 text-gray-900 focus:outline-none bg-white rounded-lg border
                  border-gray-200 hover:bg-gray-100 hover:text-primary-700 
                  focus:z-10 focus:ring-4 focus:ring-gray-100  "
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 -ms-2 me-2"
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
                </div>

                <hr className="my-6 md:my-8 border-gray-200 " />

                <p className="mb-6 text-gray-500 ">
                  {productSelector.detailProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuthentication(ProductDetailPage);
