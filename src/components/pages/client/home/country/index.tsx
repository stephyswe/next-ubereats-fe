import { Link, Typography } from '@/components';

import { isTest } from '@/constant/env';
import { useDelivery } from '@/contexts';
import { Headline, LoadingHome } from '@/ui';
import { HeadlineProps } from '@/ui/headline';
import { HomeMap } from '@/ui/maps/home';

export type CountryWithMapProps = {
  data: {
    title: string;
    link: HeadlineProps['link'];
    mapCenter: { lat: number; lng: number };
    cities: CountryProps[];
  };
};

type CountryProps = {
  city: string;
  link: string;
};

export const CountryWithMap = ({ data }: CountryWithMapProps) => {
  const { isComplete } = useDelivery();
  if (!isComplete && !isTest) return <LoadingHome h='180' num={3} />;
  const { title, link, mapCenter, cities } = data;
  return (
    <div data-testid='ui-country-with-map'>
      <Headline noArrow title={title} link={link} />
      <div className='m-[24px_0]'>
        <HomeMap data={cities} mapCenter={mapCenter} />
      </div>
      <CountryWithMapList data={cities} />
    </div>
  );
};

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
