import { useState } from 'react';

import {
  CategoryContent,
  LoadingDeliveryCategories,
  RestaurantItem,
  SearchFilter,
} from '@/components/pages/';

import { deliveryData } from '@/constant/pages/client/pickup.data';
import { useDelivery } from '@/contexts/delivery';
import { PickupMap } from '@/ui/maps/pickup';

/**
 * @description Delivery page component
 * @returns {JSX.Element}
 */
export default function PickUpModePage(): JSX.Element {
  const [resItems, setResItems] = useState<any>([]);
  const { isComplete } = useDelivery();
  const { restaurants, categories, filters } = deliveryData;

  return (
    <main className='flex h-[calc(100%-96px)] min-h-[calc(100%-96px)] w-full flex-col'>
      <div className='flex h-full w-full flex-row'>
        <div className='w-[831px] overflow-auto overflow-x-hidden'>
          <div className='px-6'>
            <SearchFilter isComplete={isComplete} data={filters} />
            <div className='relative'>
              <div className='relative mb-3 flex'>
                <CategoryContent isComplete={isComplete} data={categories} />
              </div>
              <div className='h-4'></div>

              <Wrapper
                isComplete={isComplete}
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

/**
 * @description Delivery wrapper component
 * @param props 1. isComplete 2. restaurants 3. resItems
 * @returns
 */
function Wrapper({ isComplete, restaurants, resItems }: any) {
  const { setHoverItem } = useDelivery();

  if (!isComplete) {
    return <LoadingDeliveryCategories />;
  }

  return (
    <div className='mx-[-12px] mb-[-24px] box-border flex flex-wrap'>
      {resItems.map((item: any, index: any) => (
        <div
          key={index}
          onMouseOver={() => setHoverItem(item.place_id)}
          onMouseLeave={() => setHoverItem(undefined)}
          className='group mb-6 box-border block w-1/2 flex-none px-3'
        >
          <div className='m-[-12px] p-3 group-hover:bg-[#f6f6f6]'>
            <RestaurantItem
              {...restaurants[0]}
              title={item.name}
              srcSet={
                item?.photos ? item.photos[0].getUrl() : restaurants[0].srcSet
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
