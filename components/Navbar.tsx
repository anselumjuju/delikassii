'use client';

import { usePathname } from 'next/navigation';
import Categories from './ui/Categories';
import SearchBar from './ui/SearchBar';

const Navbar = () => {
  const pathName = usePathname();

  if (pathName.includes('/recipe/')) return null;

  return (
    <div className='w-full  flex flex-col gap-3 items-center justify-between lg:flex-row-reverse'>
      <SearchBar />
      <Categories />
    </div>
  );
};

export default Navbar;
