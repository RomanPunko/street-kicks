import React, { type FC } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import ProductList from "@/components/catalog/ProductList";

const Home: FC = () => {

  return (
    <div className="h-full w-full flex pl-8 pr-8">
      <Sidebar/>
      <ProductList/>
    </div>
  );
};

export default Home;
