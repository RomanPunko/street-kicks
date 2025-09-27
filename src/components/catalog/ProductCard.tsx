import React, { FC } from "react";

interface IProductCardProps{
  name: string;
  image: string;
  price: number;
}

const ProductCard: FC<IProductCardProps> = ({name, image, price}) => {
  return (
    <div className="cursor-pointer">
      <img
        src={image}
        alt=""
      />
      <div className="pl-2">
        <p className="text-xl font-bold text-secondary">{name}</p>
        <p className="text-xl">{price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
