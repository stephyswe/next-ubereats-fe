import { useState } from 'react';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { pickupData } from '@/pages/client/dining/pickup/pickup.data';
import { PickupMap } from '@/ui/maps/pickup';

import {
  PickupCategoryList,
  PickupFilter,
  PickupRestaurantList,
} from './components';

/**
 * @description Delivery page component
 * @returns {JSX.Element}
 */
export default function PickUpModePage(): JSX.Element {
  const [resItems, setResItems] = useState<any>([]);
  const { categories, filters } = pickupData;

  const { isMobile } = useWindowSizeJs();

  if (isMobile) {
    return (
      <main className='flex w-full flex-col'>
        <div className='flex h-full min-h-[300px] w-full'>
          <PickupMap setResItems={setResItems} resItems={resItems} />
        </div>

        <div className='relative mb-3 flex'>
          <PickupCategoryList data={categories} />
        </div>
        <div className='h-4'></div>

        <PickupRestaurantList data={resItems} />
      </main>
    );
  }

  return (
    <main className='flex h-[calc(100%-96px)] min-h-[calc(100%-96px)] w-full flex-col'>
      <div className='flex h-full w-full flex-row'>
        <div className='w-[831px] overflow-auto overflow-x-hidden'>
          <div className='px-6'>
            <PickupFilter data={filters} />
            <div className='relative'>
              <div className='relative mb-3 flex'>
                <PickupCategoryList data={categories} />
              </div>
              <div className='h-4'></div>

              <PickupRestaurantList data={resItems} />
            </div>
          </div>
        </div>
        <div className='relative flex-1'>
          <PickupMap setResItems={setResItems} resItems={resItems} />
        </div>
      </div>
    </main>
  );
}
