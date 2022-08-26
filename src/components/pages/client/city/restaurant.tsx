import { CityRestaurantList } from '@/components/pages/client/city/restaurant-not-used';

import {
  tempRestaurantInArray,
  tempRestaurantInTitle,
} from '@/constant/pages/client/city.data';
import { Separator, Spacer } from '@/ui';
import { CityRestaurantItem } from '@/ui/store/item';
import { CityRestaurantScroll } from '@/ui/store/list';

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
      {tempRestaurantInArray.map((item: any, index: any) => (
        <li key={index}>
          <CityRestaurantItem {...item} />
        </li>
      ))}
    </div>
    <Separator />
  </>
);
