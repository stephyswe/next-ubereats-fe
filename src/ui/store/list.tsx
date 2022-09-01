import clsx from 'clsx';

import { categoryData } from '@/constant/ui/category';
import { restaurantData, restaurantTitleData } from '@/constant/ui/restaurant';
import { Separator, Spacer } from '@/ui';
import { Headline } from '@/ui/headline';
import {
  CategoryRestaurantItem,
  CityRestaurantItem,
  CityRestaurantItemProps,
} from '@/ui/store/item';

// Closed or Open Store

export const StoresClosed = ({
  closed,
}: {
  data?: CityRestaurantItemProps[];
  closed?: boolean;
}) => (
  <>
    <div className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'>
      {restaurantData.map((item: CityRestaurantItemProps) => (
        <div className='min-w-0' key={item.slug}>
          <div className='relative overflow-hidden'>
            <div className='relative flex overflow-hidden'>
              <CityRestaurantItem {...item} closed={closed} />
            </div>
          </div>
        </div>
      ))}
    </div>
    <Separator mobileSpace />
  </>
);

export const StoresOpen = () => (
  <>
    <Spacer className='h-6' />
    <div
      data-test='feed-desktop'
      className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'
    >
      {restaurantTitleData.map((item: any, index: any) => (
        <div key={index} className='col-span-full min-w-0'>
          <section>
            <StoreScroll data={item} />
          </section>
          <Separator top mobileSpace />
        </div>
      ))}
      {restaurantData.map((item: any, index: any) => (
        <li key={index}>
          <CityRestaurantItem {...item} />
        </li>
      ))}
    </div>
    <Separator />
  </>
);

// Category Restaurant List
// eslint-disable-next-line unused-imports/no-unused-vars
export const CategoryRestaurantList = ({ data }: any) => (
  <div className='grid gap-[40px_24px] md:grid-cols-3'>
    {categoryData.map(({ coverImg, category }: any, index: number) => (
      <div key={index} className='min-w-0'>
        <CategoryRestaurantItem coverImg={coverImg} category={category} />
      </div>
    ))}
  </div>
);

// City Restaurant List - Scrollable Content
export const StoreScroll = ({ data }: { data?: any }) => (
  <>
    <Headline title={data.title} />
    <div className='scrollbar-none flex overflow-y-hidden overflow-x-scroll scroll-snap-x'>
      <CityRestaurantOne data={data.items} />
      <CityRestaurantOne data={data.items} />
    </div>
  </>
);

const CityRestaurantOne = ({ data }: { data?: any }) => (
  <div className='flex w-full flex-shrink-0 flex-grow-0 gap-[32px_0] md:basis-[100%] md:flex-wrap md:scroll-align-start'>
    {data.map((item: any, index: number) => (
      <li
        key={index}
        className={clsx(
          'w-full flex-none md:w-[calc(50%+-12px)]',
          index % 2 === 0 ? 'mr-6' : ''
        )}
      >
        <CityRestaurantItem {...item} />
      </li>
    ))}
  </div>
);
