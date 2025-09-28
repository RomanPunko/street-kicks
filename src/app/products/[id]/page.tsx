'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProducts } from '@/store/slices/products-data-slice';
import { LoadingSpinner } from '@/components/ui/spinner';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

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
    <div className="lg:flex pl-2 pr-2 lg:items-center lg:justify-center lg:gap-20 relative">
      <div className="absolute top-5 left-5 cursor-pointer bg-black/5 hover:bg-black/15 rounded-4xl">
        <Link href="/">
          <IoIosArrowRoundBack size={40} />
        </Link>
      </div>
      <div className="w-full lg:max-w-[40%]">
        <img src={product?.image} alt={product?.name} loading="lazy" />
      </div>
      <div>
        <div className="mb-4">
          <h2 className="text-3xl">{product?.name}</h2>
        </div>
        <div className="w-full mb-2 lg:mb-4 xl:max-w-[550px]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione eveniet
            accusamus facilis veniam doloribus repellat ea, inventore quidem error consequatur rem.
            Iure debitis similique minima voluptates explicabo id obcaecati.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:gap-4 lg:justify-start mb-4">
          <div className="text-2xl mb-2 lg:mb-0">{product?.price}$</div>
          <div className="flex items-center justify-center pb-0.5 bg-black text-white font-bold rounded-xl w-full lg:w-auto">
            <Button>Купити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
