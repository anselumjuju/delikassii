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
          tabList: 'bg-transparent',
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
