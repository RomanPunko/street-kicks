import React, { FC } from 'react'
import Search from '../search-menu/Search'

const Header: FC = () => {
  return (
    <div className='w-full p-3 border-b-1 relative'>
      <h1 className='text-2xl italic'>StreetKicks</h1>
      <Search/>
    </div>
  )
}

export default Header
