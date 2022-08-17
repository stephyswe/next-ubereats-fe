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
      <div className='flex items-center justify-between'>
        <Typography as='h2' variant='h2b'>
          {title}
        </Typography>
        <Link variant='countryLink' href={link.href}>
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
    <div className='flex items-center justify-between'>
      <Typography as='h2' variant='h2b'>
        {data.title}
      </Typography>
    </div>

    <div className='mt-6 mb-4 grid grid-cols-2 gap-6 md:mb-0 md:grid-cols-4'>
      {data.countries.map((country: string, index: number) => (
        <a key={index}>{country}</a>
      ))}
    </div>
  </div>
);
