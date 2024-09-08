"use client";
import React, { useEffect, useState } from "react";
import { homeCategories, productsData } from "./components/consts";
import { imgBanner } from "@/consts/images.const";
import InfoCards from "@/components/infocards.component";
import CategoriesCard from "@/components/categorycard.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { setProducts } from "@/redux/features/products/productslice";
import LoadingIndicator from "@/components/loadingIndicator.component";
import ProductCard from "@/components/productcard.component";
import Shop from "../shop/page";
import withAuthentication from "@/components/higherordercomponents/authvalidator.hoc";
import { thunkStatus } from "@/consts/const.values";
import { productsThunk } from "@/redux/features/products/product.thunk";

function HomeScreen() {
  const productSelector = useSelector((state: RootState) => state.products);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (productSelector.status != thunkStatus.loading) {
      setLoading(false);
    }
  }, [productSelector.status]);
  useEffect(() => {
    dispatch(productsThunk());
  }, []);
  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      {" "}
      <div className="mt-2 px-4 md:px-16 lg:px-24 py-4">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2 ">
          <div className="w-full md:w-3/12 ">
            <div className="bg-red-500 text-white text-xs font-bold px-2 py-2.5">
              Shop By Categories
            </div>
            <ul className="space-y-4 bg-gray-300 p-3 border border-md">
              {homeCategories.map((cat, index) => (
                <li
                  key={index}
                  className="flex items-center font-medium text-sm "
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={imgBanner} alt="" className="h-full w-full" />
            <div className="absolute top-11 left-8">
              <p className="text-gray-600 mb-4">
                Hi a super hot sales is on its way
              </p>
              <h2 className="text-xl mt-2.5 font-bold text-gray-800">
                Welcome to the Eshop
              </h2>
              <p className="text-gray-600 mb-4">Million + Products</p>
              <button
                className=" bg-red-500 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform
                 transition-transform duration-300 hover:scale-105"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <InfoCards />
        <CategoriesCard />

        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-3 text-center">Top Products</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ">
            {productSelector.products.slice(0, 5).map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </>
  );
}

export default withAuthentication(HomeScreen);
