import { useState } from 'react';

import { Button, ButtonInput, Typography } from '@/components';
import { Categories, FoodList } from '@/components/pages/client/city';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { cityData } from '@/constant/pages/client/city.data';
import { BreadCrumb, Container, DynamicHero, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

type DeliveryInformationItemProps = { title: string; subtitle: string };

export default function CityPage() {
  const {
    deliveryInformation,
    citySelected,
    breadcrumb,
    category,
    hero: {
      buttonText,
      background,
      title,
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
        <DynamicHero background={background} title={title}>
          <div className='relative flex w-[25vw] flex-1 flex-col'>
            <ButtonInput svg={<SvgMap />} placeholder={placeholder} />
          </div>
          <Spacer className='w-4' />
          <Button className='w-[300px]' variant='blackHome'>
            {buttonText}
          </Button>
        </DynamicHero>

        <Spacer className='h-6' />
        <Container>
          <BreadCrumb data={breadcrumb} />
        </Container>
        <Container>
          <div>
            <Typography as='h2' variant='h2b'>
              {citySelected.title}
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
            {deliveryInformation.map((item: DeliveryInformationItemProps) => (
              <div key={item.title}>
                <Typography as='h2' variant='h2b'>
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
