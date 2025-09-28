import React, { FC } from 'react';
import Search from '../search-menu/Search';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className="w-full p-3 border-b-1 relative">
      <Link href='/'>
        <h1 className="text-2xl italic inline-block">StreetKicks</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
