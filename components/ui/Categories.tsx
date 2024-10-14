'use client';

import { meals } from '@/utils/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Categories = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const pathTag = pathName.split('/')[2];
    setSelected(pathTag ? pathTag : '');
  }, [pathName]);

  return (
    <div className='w-full mt-3 lg:mt-0 flex items-center justify-start md:justify-center lg:justify-start gap-3 overflow-x-auto no-scroll-bar'>
      {meals.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-max px-6 py-2.5 rounded-full border cursor-pointer transition-all duration-150 hover:bg-primary-900 hover:text-secondary-500 ${
              item.name === selected ? 'bg-primary-900 text-secondary-500' : 'bg-transparent text-primary-900 border-primary-900'
            }`}
            onClick={() => {
              console.log(item.name);
              router.push(item.name === '' ? '/' : `/recipes/${item.name}`);
            }}>
            <p className='text-sm'>{item.display_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
