import { useState } from 'react';

import {
  citiesInRegion,
  nearbyRegions,
  titleCaseDefault,
  titleCaseFull,
} from '@/lib/helper';

import { Button, ButtonInput, Typography } from '@/components';
import { CountryListNew } from '@/components/pages/client/home/country';

import { regionData } from '@/constant/pages/client/region.data';
import { BreadCrumb, Container, DynamicHero, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

type DeliveryInformationItemProps = { title: string; subtitle: string };

export async function getServerSideProps(context: any) {
  const { label } = context.params;
  const city = titleCaseDefault(label);

  const deliData = [
    {
      title: `${city} food delivery and takeout`,
      subtitle: `With 80 restaurants in ${city} on Uber Eats, including 12Till12Gott, Stigbergs Pizzeria, and DINÉ Burgers - Femman , you’ll have your pick of places from which to order food online. Get food, from Fast Food to Breakfast And Brunch, from some of the best restaurants in ${city} delivered to your door. If you’d prefer to get your takeout yourself, simply browse ${city} restaurants offering pickup.`,
    },
    {
      title: `${city} restaurants that deliver`,
      subtitle: `Uber Eats helps you find food delivery and pickup options from a wide selection of places to eat in ${city}. Enter an address to browse ${city} restaurants and cafes offering food delivery. See ${city} restaurants on Uber Eats that you’ve never tried? View their menus and star ratings to help decide if you’d like to try their food.`,
    },
    {
      title: `Best food in ${city}`,
      subtitle: `On a quest to taste the best food in ${city}? Search for famous restaurants in ${city} or for your personal favorite places to eat in ${city} to see if they offer food delivery with Uber Eats. Sometimes the best food is just what you’re craving so if you know what you’d like to eat, browse ${city} restaurants that deliver by cuisine or dish.`,
    },
  ];

  return {
    props: {
      citiesTitle: `Cities in ${city}`,
      citiesData: citiesInRegion(label),
      nearbyRegionData: nearbyRegions(label),
      deliData,
      regionSubtitle: `Have your favorite ${city} restaurant food delivered to your door with Uber Eats. Whether you want to order breakfast, lunch, dinner, or a snack, Uber Eats makes it easy to discover new and nearby places to eat in ${city}. Browse tons of food delivery options, place your order, and track it by the minute.`,
      breadCrumbText: [
        { title: 'Sweden', link: '/' },
        {
          title: titleCaseDefault(label),
          link: `/client/region/${label}`,
        },
      ],
      pageText: titleCaseFull('Food', city),
    },
  };
}

export default function RegionPage({
  deliData,
  pageText,
  breadCrumbText,
  regionSubtitle,
  citiesData,
  citiesTitle,
  nearbyRegionData,
}: any) {
  const {
    hero: {
      buttonText,
      background,
      backgroundColor,
      input: { placeholder },
    },
  } = regionData;
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [page, setPage] = useState(1);

  return (
    <main className='block'>
      <DynamicHero
        backgroundColor={backgroundColor}
        background={background}
        title='Order your favorites with Uber Eats'
      >
        <div className='relative flex flex-1 flex-col md:w-[540px]'>
          <ButtonInput svg={<SvgMap />} placeholder={placeholder} />
        </div>
        <Spacer className='w-4' />
        <Button className='w-[300px]' variant='btnLg3' size='lg'>
          {buttonText}
        </Button>
      </DynamicHero>

      <Spacer className='h-6' />
      <Container>
        <BreadCrumb data={breadCrumbText} />
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          {pageText}
        </Typography>
        <Spacer className='h-2' />
        <p>{regionSubtitle}</p>

        <Separator />
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          {citiesTitle}
        </Typography>
        <CountryListNew data={citiesData} />
        <Separator />
      </Container>
      <Container>
        <div>
          {deliData.map((item: DeliveryInformationItemProps) => (
            <div key={item.title}>
              <Typography as='h2' variant='4xl'>
                {item.title}
              </Typography>
              <Spacer className='h-2' />
              <p>{item.subtitle}</p>
              <Spacer className='h-4' />
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <Typography as='h2' variant='4xl'>
          Nearby regions
        </Typography>
        <CountryListNew data={nearbyRegionData} />
      </Container>
    </main>
  );
}
