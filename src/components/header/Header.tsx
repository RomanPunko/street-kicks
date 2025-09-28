import React, { FC } from 'react';
import Search from '../search-menu/Search';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className="w-full relative h-10 sm:p-6 sm:pl-2 sm:border-b-1 sm:flex sm:items-center">
      <Link href='/'>
        <h1 className="text-2xl italic hidden sm:inline-block">StreetKicks</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
