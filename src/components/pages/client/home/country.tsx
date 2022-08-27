import { Link, Typography } from '@/components';

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
  const { title, link, mapCenter, cities } = data;
  return (
    <div>
      <div className='flex items-end justify-between'>
        <Typography as='h2' variant='4xl'>
          {title}
        </Typography>
        <Link variant='linkBase2' href={link.href}>
          {link.title}
        </Link>
      </div>

      <div className='pt-6'>
        <HomeMap data={cities} mapCenter={mapCenter} />
      </div>
      <div className='mt-6 mb-4 grid grid-cols-2 gap-6 md:mb-0 md:grid-cols-4'>
        {cities.map((country: CountryProps, index: number) => (
          <Link key={index} href={country.link}>
            {country.city}
          </Link>
        ))}
      </div>
    </div>
  );
}

type CountryListProps = {
  data: {
    title: string;
    countries: string[];
  };
};

export const CountryList = ({ data }: CountryListProps) => (
  <div>
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

export const CountryListNew = ({ data }: any) => (
  <div className='mt-8 grid grid-flow-col grid-rows-1 gap-[16px_24px]'>
    {data.map((item: any) => (
      <Link key={item.title} href={item.link}>
        {item.title}
      </Link>
    ))}
  </div>
);
