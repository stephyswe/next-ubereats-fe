import { Link, Typography } from '@/components';

import { isTest } from '@/constant/env';
import { useDelivery } from '@/contexts';
import { LoadingHome } from '@/ui';
import { HomeMap } from '@/ui/maps/home';

type CountryWithMapProps = {
  data: {
    title: string;
    link: { href: string; title: string };
    mapCenter: { lat: number; lng: number };
    cities: CountryProps[];
  };
};

type CountryProps = {
  city: string;
  link: string;
};

export function CountryWithMap({ data }: CountryWithMapProps) {
  const { isComplete } = useDelivery();
  if (!isComplete && !isTest) return <LoadingHome h='180' num={3} />;
  const { title, link, mapCenter, cities } = data;
  return (
    <div data-testid='ui-country-with-map'>
      <div className='flex items-end justify-between'>
        <Typography
          data-testid='ui-country-with-map-typography'
          as='h2'
          variant='4xl'
        >
          {title}
        </Typography>
        <Link
          data-testid='ui-country-with-map-link'
          variant='linkBase2'
          href={link.href}
        >
          {link.title}
        </Link>
      </div>

      <div className='pt-6'>
        <HomeMap data={cities} mapCenter={mapCenter} />
      </div>
      <CountryWithMapList data={cities} />
    </div>
  );
}

export const CountryWithMapList = ({
  data,
}: {
  data: CountryWithMapProps['data']['cities'];
}) => (
  <div
    data-testid='ui-country-with-map-list'
    className='mt-6 mb-4 grid grid-cols-2 gap-6 md:mb-0 md:grid-cols-4'
  >
    {data.map(({ link, city }: CountryProps, index: number) => (
      <Link key={index} href={link}>
        {city}
      </Link>
    ))}
  </div>
);

type CountryListProps = {
  data: {
    title: string;
    countries: string[];
  };
};

export const CountryList = ({ data }: CountryListProps) => {
  const { isComplete } = useDelivery();
  if (!isComplete && !isTest) return <LoadingHome h='180' num={3} />;
  return (
    <div data-testid='ui-country-list'>
      <Typography as='h2' variant='4xl'>
        {data.title}
      </Typography>

      <div className='mt-6 mb-4 grid grid-cols-2 gap-6 md:mb-0 md:grid-cols-4'>
        {data.countries.map((country: string, index: number) => (
          <a key={index}>{country}</a>
        ))}
      </div>
    </div>
  );
};

export const CountryListNew = ({ data }: any) => (
  <div className='mt-8 grid grid-flow-col grid-rows-1 gap-[16px_24px]'>
    {data.map((item: any) => (
      <Link key={item.title} href={item.link}>
        {item.title}
      </Link>
    ))}
  </div>
);
