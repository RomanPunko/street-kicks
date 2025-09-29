"use client";

import React, { FC } from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/hooks/app-hooks";
import { setSearch } from "@/store/slices/search-slice";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search)

  return (
    <div className="max-w-[350px] w-[95%] md:w-full rounded-4xl bg-black/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
      <div className="absolute top-1.5 left-1">
        <CiSearch size={24} />
      </div>
      <Input
        className="rounded-4xl focus-visible:ring-0 pl-8 placeholder:text-secondary"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search (3 letters or more)"
      />
    </div>
  );
};

export default Search;
