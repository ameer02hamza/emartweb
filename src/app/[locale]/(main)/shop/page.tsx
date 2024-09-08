"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../home/components/consts";
import { AppDispatch, RootState } from "@/redux/emart-redux/store/store";
import { productsThunk } from "@/redux/emart-redux/features/products/product.thunk";
import LoadingIndicator from "@/components/emart-component/loadingIndicator.component";
import ProductCard from "@/components/emart-component/productcard.component";
import withAuthentication from "@/components/emart-component/higherordercomponents/authvalidator.hoc";
import { thunkStatus } from "@/consts/emart/const.values";


function Shop() {
  const productSelector = useSelector((state: RootState) => state.products);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();
useEffect(() =>{
  dispatch(productsThunk());
},[])
  useMemo(() => {
    if(productSelector.status != thunkStatus.loading){
      setLoading(false)
    }
  }, [productSelector.status]);
  return loading ? (
    <LoadingIndicator />
  ) : (
    <div className="container mx-auto p-12  px-4 md:px-16 lg:px-24 py-4 ">
      <h2 className="text-2xl font-bold mb-3 text-center">Shop</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ">
        {productSelector.filteredProducts.map((product: any, index: React.Key | null | undefined) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuthentication(Shop);
