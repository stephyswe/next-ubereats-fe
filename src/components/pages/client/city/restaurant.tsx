import { restaurantData, restaurantTitleData } from '@/constant/ui/restaurant';
import { Separator, Spacer } from '@/ui';
import { CityRestaurantItem, CityRestaurantItemProps } from '@/ui/store/item';
import { CityRestaurantScroll } from '@/ui/store/list';

export const CityRestaurantsClosed = () => (
  <>
    <CityRestaurantList closed data={restaurantData} />
    <Separator mobileHiddenSpace />
  </>
);

export const CityRestaurants = () => (
  <>
    <Spacer className='h-6' />
    <div
      data-test='feed-desktop'
      className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'
    >
      {restaurantTitleData.map((item: any, index: any) => (
        <div key={index} className='col-span-full min-w-0'>
          <section>
            <CityRestaurantScroll data={item} />
          </section>
          <Separator topOnly mobileHiddenSpace />
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

export const CityRestaurantList = ({
  data,
  closed,
}: {
  data: CityRestaurantItemProps[];
  closed?: boolean;
}) => (
  <div className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'>
    {data.map((item: CityRestaurantItemProps) => (
      <div className='min-w-0' key={item.slug}>
        <div className='relative overflow-hidden'>
          <div className='relative flex overflow-hidden'>
            <CityRestaurantItem {...item} closed={closed} />
          </div>
        </div>
      </div>
    ))}
  </div>
);
