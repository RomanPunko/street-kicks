import React, { FC } from "react";
import { Input } from "../ui/input";

interface ISidebarFilterItemProps {
  category: string;
  categoryItems: string[];
}

const SidebarFilterItem: FC<ISidebarFilterItemProps> = ({
  category,
  categoryItems,
}) => {
  return (
    <div className="inline-flex flex-col mb-2 select-none">
      <div className="mb-1">
        <p className="text-xl">{category}</p>
      </div>
      {categoryItems.map((item) => (
        <label key={item} className="flex items-center gap-2 cursor-pointer">
          <Input
            type="checkbox"
            className="w-4 h-4 accent-black cursor-pointer"
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default SidebarFilterItem;
