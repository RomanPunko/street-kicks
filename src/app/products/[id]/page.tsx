'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProducts } from '@/store/slices/products-data-slice';
import { LoadingSpinner } from '@/components/ui/spinner';

const ProductPage: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const productId = params.id;

  const { products, loading, error } = useAppSelector((state) => state.products);
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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

  return (
    <div className="flex pl-2 pr-2 items-center justify-center gap-20">
      <div className="max-w-[40%]">
        <img src={product?.image} alt={product?.name} />
      </div>
      <div>
        <div className="mb-4">
          <h2 className="text-3xl">{product?.name}</h2>
        </div>
        <div className="max-w-[500px] mb-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione eveniet
            accusamus facilis veniam doloribus repellat ea, inventore quidem error consequatur rem.
            Iure debitis similique minima voluptates explicabo id obcaecati.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-2xl">{product?.price}$</div>
          <div className="pb-0.5 bg-black text-white font-bold rounded-xl">
            <Button>Купити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
