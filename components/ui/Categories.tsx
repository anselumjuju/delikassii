'use client';

import { NavbarCategories } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface categorieInterface {
  display_name: string;
  id: number;
  type: string;
  name: string;
}

const getRandomCategories = (categories: categorieInterface[], count: number) => {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Categories = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState('');
  const [randomCategories, setRandomCategories] = useState<categorieInterface[] | null>();

  useEffect(() => {
    setRandomCategories([{ display_name: 'General', id: 6953045, type: 'cuisine', name: '' }, ...getRandomCategories(NavbarCategories, 7)]);
  }, []);

  useEffect(() => {
    const pathTag = pathName.split('/')[2];
    setSelected(pathTag ? pathTag : '');
  }, [pathName]);

  if (pathName.includes('/recipe/')) return null;

  return (
    <div className='w-full mt-3 lg:mt-0 flex items-center justify-start md:justify-center lg:justify-start gap-3 overflow-x-auto no-scroll-bar'>
      {randomCategories?.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-max px-6 py-2.5 rounded-full border cursor-pointer transition-all duration-150 hover:bg-primary-900 hover:text-secondary-500 ${
              item.name === selected ? 'bg-primary-900 text-secondary-500' : 'bg-transparent text-primary-900 border-primary-900'
            }`}
            onClick={() => {
              router.push(item.name === '' ? '/' : `/recipes/${item.name}`);
            }}>
            <p className='text-sm select-none text-nowrap'>{item.display_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
