import React, { type FC } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ProductList from "@/components/catalog/ProductList";

const Home: FC = () => {

  return (
    <div className="h-full w-full flex pl-2 pr-2 sm:pl-4 sm:pr-4">
      <Sidebar/>
      <ProductList/>
    </div>
  );
};

export default Home;
