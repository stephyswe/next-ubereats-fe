import clsx from 'clsx';

import { categoryData } from '@/constant/ui/category';
import { Headline } from '@/ui/headline';
import { CategoryRestaurantItem, CityRestaurantItem } from '@/ui/store/item';

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

// City Restaurant List
export const CityRestaurantScroll = ({ data }: { data?: any }) => (
  <>
    <Headline title={data.title} />
    <div className='scrollbar-none flex overflow-y-hidden overflow-x-scroll scroll-snap-x'>
      <CityRestaurantOne data={data.items} />
      {/* Scrollable content */}
      <CityRestaurantOne data={data.items} />
    </div>
  </>
);

const CityRestaurantOne = ({ data }: { data?: any }) => (
  <div className='flex w-full flex-shrink-0 flex-grow-0 gap-[32px_0] md:basis-[100%] md:flex-wrap md:scroll-align-start'>
    {data?.slice(0, 12).map((item: any, index: number) => (
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
