"use client";
import { setProducts } from "@/redux/features/products/productslice";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../home/components/consts";
import LoadingIndicator from "@/components/loadingIndicator.component";
import ProductCard from "@/components/productcard.component";
import withAuthentication from "@/components/higherordercomponents/authvalidator.hoc";
import { productsThunk } from "@/redux/features/products/product.thunk";
import { thunkStatus } from "@/consts/const.values";

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
        {productSelector.filteredProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuthentication(Shop);
