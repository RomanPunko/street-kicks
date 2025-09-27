import React, { FC } from "react";
import SidebarFilterItem from "./SidebarFilterItem";
import { Button } from "../ui/button";
import { resetFilters } from "@/store/slices/filter-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/app-hooks";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const typeFilters = useAppSelector((state) => state.filters.typeFilters);
  const genderFilters = useAppSelector((state) => state.filters.genderFilters);

  const onToggle = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="w-[200px] flex flex-col items-start pt-4">
      <p className="text-3xl">Фільтри</p>
      <Button className="hover:text-red-500 p-0" onClick={onToggle}>
        Очистити
      </Button>
      <SidebarFilterItem
        category={"Стать"}
        categoryItems={["Жінкам", "Чоловікам", "Дітям"]}
        typeFilters={typeFilters}
        genderFilters={genderFilters}
      />
      <SidebarFilterItem
        category={"Тип"}
        categoryItems={["Кросівки", "Кеди", "Черевики", "Шльопанці"]}
        typeFilters={typeFilters}
        genderFilters={genderFilters}
      />
    </div>
  );
};

export default Sidebar;
