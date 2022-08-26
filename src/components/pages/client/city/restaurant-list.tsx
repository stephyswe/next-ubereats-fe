import clsx from 'clsx';

import { CityExplore } from '@/components/pages/client/city/category';
import { CityRestaurantItem } from '@/components/pages/client/city/restaurant-item';
import { CityRestaurantList } from '@/components/pages/client/city/restaurant-not-used';

import {
  tempRestaurantInArray,
  tempRestaurantInTitle,
} from '@/constant/pages/client/city.data';
import { Separator, Spacer } from '@/ui';

export const CityClosedItems = () => (
  <>
    <CityRestaurantList closed data={tempRestaurantInArray} />
    <Separator mobileHiddenSpace />
  </>
);

export const CityOpenItemsNew = () => (
  <>
    <Spacer className='h-6' />
    <div
      data-test='feed-desktop'
      className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'
    >
      {tempRestaurantInTitle.map((item: any, index: any) => (
        <div key={index} className='col-span-full min-w-0'>
          <section>
            <CityRestaurantScroll data={item} />
          </section>
          <Separator topOnly mobileHiddenSpace />
        </div>
      ))}
      {tempRestaurantInArray.map((item: any) => (
        <li key={item.slug}>
          <CityRestaurantItem {...item} />
        </li>
      ))}
    </div>
    <Separator />
  </>
);

export const CityRestaurantScroll = ({ data }: { data?: any }) => (
  <>
    <CityExplore title={data.title} />
    <div className='scrollbar-none flex overflow-y-hidden overflow-x-scroll scroll-snap-x'>
      <CityRestaurantOne data={data.items} />
      {/* Scrollable content */}
      <CityRestaurantOne data={data.items} />
    </div>
  </>
);

const CityRestaurantOne = ({ data }: { data?: any }) => (
  <div className='flex w-full flex-shrink-0 flex-grow-0 basis-[100%] flex-wrap gap-[32px_0] scroll-align-start'>
    {data?.slice(0, 12).map((item: any, index: number) => (
      <li
        key={index}
        className={clsx(
          'w-[calc(50%+-12px)] flex-none',
          index % 2 === 0 ? 'mr-6' : ''
        )}
      >
        <CityRestaurantItem {...item} />
      </li>
    ))}
  </div>
);
