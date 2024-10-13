'use client';

import { Tab, Tabs } from '@nextui-org/react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

interface TabsProps {
  sections: {
    components: {
      extra_comment: string;
      ingredient: {
        name: string;
      };
      measurements: {
        quantity: string;
        unit: {
          abbreviation: string;
          name: string;
        };
      }[];
      raw_text: string;
      position: number;
    }[];
    name: string;
    position: number;
  }[];
  instructions: {
    display_text: string;
    position: number;
  }[];
}

const TabsComponent = ({ sections, instructions }: TabsProps) => {
  return (
    <div>
      <Tabs
        classNames={{
          base: 'w-full pb-2 flex items-center justify-start border-b border-primary-500',
          tab: 'p-0 pr-2 first:border-r-2 first:border-primary-500',
          tabContent: 'px-4 py-1.5 rounded-md group-data-[selected=true]:bg-secondary-900',
          panel: 'h-max my-2',
        }}>
        <Tab key={1} title={<h1 className='text-base font-semibold font-raleway'>Instructions</h1>}>
          <Instructions instructions={instructions} />
        </Tab>
        <Tab key={2} title={<h1 className='text-base font-semibold font-raleway'>Ingredients</h1>}>
          <Ingredients ingredients={sections} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
