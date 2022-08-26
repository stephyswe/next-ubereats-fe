import { Button, ButtonInput } from '@/components';
import {
  CityCategories,
  CityInfo,
  FoodInfo,
} from '@/components/pages/client/city';
import {
  CityClosedItems,
  CityOpenItemsNew,
} from '@/components/pages/client/city/restaurant-list';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { cityData } from '@/constant/pages/client/city.data';
import { BreadCrumb, Container, DynamicHero, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

export { getServerSideProps } from '@/components/pages/client/city/server';

export default function CityPage({ cityInfo, cityTitle, breadcrumb }: any) {
  const {
    foodInfoSubtitle,
    categoryTitle,
    hero: { buttonText, background, inputPlaceholder },
  } = cityData;

  const { data, loading } = useFindManyRestaurantsQuery({
    variables: { input: { page: 1 } },
  });

  // TODO: Add a date function to view the restaurant's schedule
  const checkTime = () => false;

  if (loading) return <div>loading...</div>;

  return (
    <main className='block'>
      <DynamicHero background={background} title={cityTitle}>
        <div className='relative flex flex-1 flex-col md:w-[540px]'>
          <ButtonInput svg={<SvgMap />} placeholder={inputPlaceholder} />
        </div>
        <Spacer className='sm:h-4 md:w-4' />
        <Button className='md:max-w-[300px]' variant='btnLg3' size='lg'>
          {buttonText}
        </Button>
      </DynamicHero>

      <Spacer className='h-6' />
      <Container flex>
        <BreadCrumb data={breadcrumb} />
      </Container>
      <Container>
        <FoodInfo title={cityTitle} subtitle={foodInfoSubtitle} />
        <Separator mobileHidden />
      </Container>
      <Container>
        <Spacer className='h-6' />
        <div className='col-[1/-1] min-w-0'>
          <CityCategories
            data={data?.findManyCategories.categories}
            title={categoryTitle}
          />
        </div>
        <Separator mobileHidden />
      </Container>
      <Container>
        {/* Conditionally show items based on time */}
        {checkTime() ? <CityClosedItems /> : <CityOpenItemsNew />}
      </Container>
      <Container>
        <CityInfo data={cityInfo} />
      </Container>
    </main>
  );
}
