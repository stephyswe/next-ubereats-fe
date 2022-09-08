import clsx from 'clsx';

import { storeData, storeTitleData } from '@/pages/_app/items/store';
import { Separator, Spacer } from '@/ui';
import { Headline } from '@/ui/headline';
import { CityRestaurantItemProps, StoreItemWide } from '@/ui/store/item';

// Closed or Open Store

export const StoresClosed = ({
  closed,
}: {
  data?: CityRestaurantItemProps[];
  closed?: boolean;
}) => (
  <>
    <div className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'>
      {storeData.map((item: CityRestaurantItemProps) => (
        <div className='min-w-0' key={item.slug}>
          <div className='relative overflow-hidden'>
            <div className='relative flex overflow-hidden'>
              <StoreItemWide {...item} closed={closed} />
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
      className='grid grid-cols-1 gap-[30px_24px] md:grid-cols-2 md:gap-[40px_24px]'
    >
      {storeTitleData.map(({ title, items }: any, index: any) => (
        <div key={index} className='col-span-full min-w-0'>
          <section>
            <Headline title={title} info />
            <div className='scrollbar-none flex overflow-y-hidden overflow-x-scroll scroll-snap-x'>
              <StoreScroll data={items} />
              <StoreScroll data={items} />
            </div>
          </section>
          <Separator top mobile />
        </div>
      ))}
      {storeData.map((item: any, index: any) => (
        <li key={index}>
          <StoreItemWide {...item} closed={closed} />
        </li>
      ))}
    </div>
    <Separator />
  </>
);

export const StoreScroll = ({ data }: { data?: any }) => (
  <div className='flex w-full flex-shrink-0 flex-grow-0 gap-[32px_0] md:basis-[100%] md:flex-wrap md:scroll-align-start'>
    {data.map((item: any, index: number) => (
      <li
        key={index}
        className={clsx(
          'w-full flex-none md:w-[calc(50%+-12px)]',
          index % 2 === 0 ? 'mr-6' : ''
        )}
      >
        <StoreItemWide {...item} closed={closed} />
      </li>
    ))}
  </div>
);
