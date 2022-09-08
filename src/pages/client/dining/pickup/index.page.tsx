import { useState } from 'react';

import { PickupFilter } from '@/components/pages/';
import { PickupCategoryList } from '@/components/pages/client/dining/pickup/category';
import { PickupRestaurantList } from '@/components/pages/client/dining/pickup/restaurant';

import { pickupData } from '@/constant/pages/client/pickup.data';
import { PickupMap } from '@/ui/maps/pickup';

/**
 * @description Delivery page component
 * @returns {JSX.Element}
 */
export default function PickUpModePage(): JSX.Element {
  const [resItems, setResItems] = useState<any>([]);
  const { restaurants, categories, filters } = pickupData;
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

              <PickupRestaurantList
                restaurants={restaurants}
                resItems={resItems}
              />
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
