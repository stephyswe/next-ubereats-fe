import {
  CityRestaurantItem,
  CityRestaurantItemProps,
} from '@/components/pages/client/city/restaurant-item';

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
