'use client';

import { useState } from 'react';

const Categories = () => {
  const data = ['General', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Drinks'];
  const [selected, setSelected] = useState<string>(data[0]);

  return (
    <div className='w-full mt-3 lg:mt-0 flex items-center justify-start md:justify-center lg:justify-start gap-3 overflow-x-auto no-scroll-bar'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-max px-6 py-2.5 rounded-full border cursor-pointer transition-all duration-150 ${
              item === selected ? 'bg-primary-900 text-secondary-500' : 'bg-transparent text-primary-900 border-primary-900'
            }`}
            onClick={() => setSelected(item)}>
            <p className='text-sm'>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
