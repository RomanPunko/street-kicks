import React, { FC } from "react";
import SidebarFilterItem from "./SidebarFilterItem";
import { Button } from "../ui/button";

const Sidebar: FC = () => {
  return (
    <div className="w-[200px] flex flex-col items-start pt-4">
      <p className="text-3xl">Фільтри</p>
      <Button className="hover:text-red-500 p-0">Очистити</Button>
      <SidebarFilterItem category={"Стать"} categoryItems={["Жінкам","Чоловікам","Дітям"]}/>
      <SidebarFilterItem category={"Тип"} categoryItems={["Кросівки","Кеди","Черевики"]}/>
    </div>
  );
};

export default Sidebar;
