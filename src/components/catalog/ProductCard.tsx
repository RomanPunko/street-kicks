import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
}

const ProductCard: FC<IProductCardProps> = ({ name, image, price, id }) => {
  return (
    <Link href={`/products/${id}`} className="cursor-pointer">
      <Image
        src={image || '/placeholder.png'}
        alt={name || ""}
        className="select-none"
        width={400}
        height={400}
      />
      <div className="pl-2">
        <p className="text-xl font-bold text-secondary">{name}</p>
        <p className="text-xl">{price}$</p>
      </div>
    </Link>
  );
};

export default ProductCard;
