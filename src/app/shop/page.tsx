"use client";
import { setProducts } from "@/redux/features/products/productslice";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../home/components/consts";
import LoadingIndicator from "@/components/loadingIndicator.component";
import ProductCard from "@/components/productcard.component";

function Shop() {
  const productSelector = useSelector((state: RootState) => state.products);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(productSelector.loading);
    dispatch(setProducts(productsData));
  }, [productSelector.loading]);
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

export default Shop;
