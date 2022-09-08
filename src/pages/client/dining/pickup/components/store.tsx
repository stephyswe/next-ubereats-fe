/* eslint-disable @next/next/no-img-element */
import { Fragment, SetStateAction } from 'react';

import { isTest } from '@/lib/env';
import { pickupItemData } from '@/pages/_app/items/store';
import { useDelivery } from '@/contexts';
import { LoadingHome, SpacerItem } from '@/ui';
import { LoadingItemSquare } from '@/ui/loading/item';
import { StoreItemDefault } from '@/ui/store/item';

type RestaurantItemProps = {
  name: string;
  srcSet: string;
  src: string;
  rating: string;
  photos?: Record<string, any>;
  place_id?: SetStateAction<undefined>;
  time: string;
  distance: string;
};

/**
 * @description PickupRestaurantList component
 * @param props 1. isComplete 2. restaurants 3. resItems
 * @returns
 */
export const PickupRestaurantList = ({ data }: any) => {
  const { setHoverItem, isComplete } = useDelivery();

  if (!isComplete && !isTest) {
    return (
      <>
        {Array.from({ length: 3 }, (item, index) => (
          <Fragment key={index}>
            <LoadingHome h='128' num={2} />
            <SpacerItem length={3} index={index}>
              <LoadingItemSquare h='80' />
            </SpacerItem>
          </Fragment>
        ))}
      </>
    );
  }

  return (
    <div className='box-border grid grid-cols-1 flex-wrap md:mx-[-12px] md:mb-[-24px] md:flex'>
      {data.map(
        (
          { name, src, rating, photos, place_id }: RestaurantItemProps,
          index: number
        ) => {
          return (
            <div
              key={index}
              onMouseOver={() => setHoverItem(place_id)}
              onMouseLeave={() => setHoverItem(undefined)}
              className='group mb-6 box-border block flex-none px-3 md:w-1/2'
            >
              <div className='m-[-12px] p-3 group-hover:bg-[#f6f6f6]'>
                <div className='relative overflow-hidden'>
                  <StoreItemDefault
                    time={pickupItemData.time}
                    distance={pickupItemData.time}
                    ranking={rating}
                    title={name}
                    srcSet={photos ? photos[0].getUrl() : pickupItemData.srcSet}
                  />
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
