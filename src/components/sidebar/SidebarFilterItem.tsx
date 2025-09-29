import React, { FC } from 'react';
import { Input } from '../ui/input';
import { setGenderFilters, setTypeFilters } from '@/store/slices/filter-slice';
import { useAppDispatch } from '@/hooks/app-hooks';

interface ISidebarFilterItemProps {
  category: string;
  categoryItems: string[];
  typeFilters: string[];
  genderFilters: string[];
}

const SidebarFilterItem: FC<ISidebarFilterItemProps> = ({
  category,
  categoryItems,
  typeFilters,
  genderFilters,
}) => {
  const dispatch = useAppDispatch();

  const onToggle = (item: string) => {
    if (category === 'Тип') {
      dispatch(setTypeFilters(item));
    } else {
      dispatch(setGenderFilters(item));
    }
  };

  const isChecked = (item: string) => {
    if (category === 'Тип') return typeFilters.includes(item.toLowerCase());
    return genderFilters.includes(item.toLowerCase());
  };

  return (
    <div className="inline-flex flex-col mb-3 select-none">
      <div className="mb-1">
        <p className="text-xl">{category}</p>
      </div>
      {categoryItems.map((item) => (
        <label key={item} className="flex items-center gap-2 cursor-pointer">
          <Input
            type="checkbox"
            className="w-4 h-4 accent-black cursor-pointer"
            checked={isChecked(item)}
            onChange={() => onToggle(item.toLocaleLowerCase())}
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default SidebarFilterItem;
