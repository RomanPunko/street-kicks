import React, { FC } from "react";
import Link from 'next/link';

interface IProductCardProps{
  id: string;
  name: string;
  image: string;
  price: number;
}

const ProductCard: FC<IProductCardProps> = ({name, image, price, id}) => {

  return (
    <Link href={`/products/${id}`} className="cursor-pointer">
      <img
        src={image}
        alt=""
        className="select-none"
      />
      <div className="pl-2">
        <p className="text-xl font-bold text-secondary">{name}</p>
        <p className="text-xl">{price}$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
