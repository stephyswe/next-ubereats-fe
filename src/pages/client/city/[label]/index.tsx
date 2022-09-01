import { Button, ButtonInput } from '@/components';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { cityData } from '@/constant/pages/client/city.data';
import { categoriesData } from '@/constant/ui/category';
import { BreadCrumb, Container, HeroDynamic, Separator, Spacer } from '@/ui';
import { CategoryList } from '@/ui/category';
import { Headline, HeadlineCity, HeadlineFood } from '@/ui/headline';
import { SvgMap } from '@/ui/icons';
import { StoresClosed, StoresOpen } from '@/ui/store/list';

export { getServerSideProps } from '@/constant/server/city.server';

export type CityPageProps = {
  breadcrumb: any;
  cityInfo: any;
  title: any;
};

export default function CityPage({ cityInfo, title, breadcrumb }: any) {
  const {
    foodSubtitle,
    categoryTitle,
    hero: { buttonText, background, inputPlaceholder },
  } = cityData;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const { data, loading } = useFindManyRestaurantsQuery({
    variables: { input: { page: 1 } },
  });

  // TODO: Add a date function to view the restaurant's schedule
  const checkTime = () => false;

  if (loading) return <div>Loading...</div>;

  /* if (loading) {
    return (
      <main className='block px-10'>
        {Array.from({ length: 3 }, (item, index) => (
          <Fragment key={index}>
            <LoadingHome h='180' num={2} />
            <SpacerItem length={3} index={index}>
              <LoadingItemSquare h='80' />
            </SpacerItem>
          </Fragment>
        ))}
      </main>
    );
  } */

  return (
    <main className='block'>
      <HeroDynamic background={background} title={title}>
        <div className='relative flex flex-1 flex-col md:w-[540px]'>
          <ButtonInput svg={<SvgMap />} placeholder={inputPlaceholder} />
        </div>
        <Spacer className='sm:h-4 md:w-4' />
        <Button className='md:max-w-[300px]' variant='btnLg3' size='lg'>
          {buttonText}
        </Button>
      </HeroDynamic>

      <Spacer className='h-6' />
      <Container flex>
        <BreadCrumb data={breadcrumb} />
      </Container>
      <Container>
        <HeadlineFood title={title} subtitle={foodSubtitle} />
        <Separator mobile />
      </Container>
      <Container>
        <Spacer className='h-6' />
        <div className='col-[1/-1] min-w-0'>
          <Headline title={categoryTitle} link />
          <div className='scrollbar-none flex overflow-y-hidden overflow-x-scroll scroll-snap-x'>
            <CategoryList data={categoriesData} />
            <CategoryList data={categoriesData} />
          </div>
        </div>
        <Separator mobile />
      </Container>
      <Container>{checkTime() ? <StoresClosed /> : <StoresOpen />}</Container>
      <Container>
        <HeadlineCity data={cityInfo} />
      </Container>
    </main>
  );
}
