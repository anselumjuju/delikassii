'use client';

import { meals } from '@/utils/constants';
import { useState } from 'react';

const Categories = () => {
  const [selected, setSelected] = useState(meals[0]);
  return (
    <div className='w-full mt-3 lg:mt-0 flex items-center justify-start md:justify-center lg:justify-start gap-3 overflow-x-auto no-scroll-bar'>
      {meals.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-max px-6 py-2.5 rounded-full border cursor-pointer transition-all duration-150 ${
              item === selected ? 'bg-primary-900 text-secondary-500' : 'bg-transparent text-primary-900 border-primary-900'
            }`}
            onClick={() => setSelected(item)}>
            <p className='text-sm'>{item.display_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
