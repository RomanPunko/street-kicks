"use client";

import React, { FC, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "@/hooks/app-hooks";
import { getProducts } from "@/store/slices/products-data-slice";
import { LoadingSpinner } from "../ui/spinner";

const ProductList: FC = () => {
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  const search = useAppSelector((state) => state.filters.search);
  const selectedTypeFilters = useAppSelector(
    (state) => state.filters.typeFilters
  );
  const selectedGenderFilters = useAppSelector(
    (state) => state.filters.genderFilters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search.length >= 3) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedGenderFilters.length > 0) {
      result = result.filter((item) => {
        return item.gender.some((g) => selectedGenderFilters.includes(g));
      });
    }

    if (selectedTypeFilters.length > 0) {
      result = result.filter((item) => {
        return selectedTypeFilters.includes(item.type.toLowerCase());
      });
    }

    return result;
  }, [products, search, selectedTypeFilters, selectedGenderFilters]);

  if (loading)
    return (
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>ERROR</p>
      </div>
    );

  if (filteredProducts.length == 0)
    return (
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p>NOT FOUND</p>
      </div>
    );

  return (
    <div className="w-full pl-4 pr-4 grid grid-cols-4 justify-between gap-4">
      {filteredProducts.map((item) => (
        <ProductCard
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
