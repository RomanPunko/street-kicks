import React, { useEffect, useState } from 'react';
import { Slider } from '../ui/slider';
import { setPriceRange } from '@/store/slices/filter-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';

const PriceSlider = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const priceRange = useAppSelector((state) => state.filters.priceRange);
  const [localRange, setLocalRange] = useState<[number, number]>([0, 100]);

  const minPrice = products.length ? Math.min(...products.map((p) => p.price)) : 0;
  const maxPrice = products.length ? Math.max(...products.map((p) => p.price)) : 0;

  useEffect(() => {
    setLocalRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setLocalRange(priceRange);
  }, [priceRange]);

  const setPrice = (localRange: [number, number]) => {
    dispatch(setPriceRange(localRange));
  };

  return (
    <>
      <Slider
        className="
          cursor-pointer
          h-2 
          bg-gray-200
          rounded-full
          [&_[data-slot=slider-range]]:bg-black
          [&_[data-slot=slider-thumb]]:bg-black
          [&_[data-slot=slider-thumb]]:h-3
          [&_[data-slot=slider-thumb]]:w-3 
          [&_[data-slot=slider-thumb]]:rounded-full
          [&_[data-slot=slider-thumb]]:transition-transform
          [&_[data-slot=slider-thumb]:hover]:scale-110
        "
        defaultValue={[minPrice, maxPrice]}
        value={localRange}
        onValueChange={(val) => setLocalRange(val as [number, number])}
        onPointerUp={() => setPrice(localRange)}
        min={minPrice}
        max={maxPrice}
        step={1}
      />
      <div className="flex justify-between w-full select-none">
        <div>{localRange[0]}$</div>
        <div>{localRange[1] == Infinity ? maxPrice : localRange[1]}$</div>
      </div>
    </>
  );
};

export default PriceSlider;
