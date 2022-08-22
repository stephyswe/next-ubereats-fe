import { useState } from 'react';

import {
  breadCrumbGenerate,
  capitalizeCity,
  titleCaseFull,
} from '@/lib/helper';

import { Button, ButtonInput, Typography } from '@/components';
import { Categories, FoodList } from '@/components/pages/client/city';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { cityData } from '@/constant/pages/client/city.data';
import { BreadCrumb, Container, DynamicHero, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

type DeliveryInformationItemProps = { title: string; subtitle: string };

export async function getServerSideProps(context: any) {
  const { label } = context.params;
  const city = capitalizeCity(label);

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
      deliData,
      breadCrumbText: breadCrumbGenerate(label),
      pageText: titleCaseFull('Food', city),
    },
  };
}

export default function CityPage({ deliData, pageText, breadCrumbText }: any) {
  const {
    citySelected,
    category,
    hero: {
      buttonText,
      background,
      input: { placeholder },
    },
  } = cityData;
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [page, setPage] = useState(1);

  const { data, loading } = useFindManyRestaurantsQuery({
    variables: { input: { page } },
  });

  if (loading) {
    return <div>loading...</div>;
  } else if (data) {
    return (
      <main className='block'>
        <DynamicHero background={background} title={pageText}>
          <div className='relative flex w-[35vw] flex-1 flex-col'>
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
          <div>
            <Typography as='h2' variant='4xl'>
              {pageText}
            </Typography>
            <Spacer className='h-2' />
            <p>{citySelected.subtitle}</p>
          </div>
          <Separator />
        </Container>
        <Container>
          <Spacer className='h-6' />
          <div className='grid grid-cols-3 gap-[40px_24px]'>
            <div className='col-[1/-1] min-w-0'>
              <div>
                <Categories
                  data={data.findManyCategories.categories}
                  exploreTitle={category.title}
                />
              </div>
            </div>
          </div>

          <Separator />
        </Container>

        <Container>
          <Spacer className='h-6' />
          <FoodList data={data.findManyRestaurants.results} />
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
      </main>
    );
  }
}
