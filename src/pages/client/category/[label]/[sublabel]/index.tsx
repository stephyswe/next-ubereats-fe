import { useState } from 'react';

import {
  breadCrumbGenerate,
  capitalizeCity,
  titleCaseFull,
} from '@/lib/helper';

import { Button, ButtonInput, Link, NextImage, Typography } from '@/components';
import { RestaurantList } from '@/components/pages/client/category/restaurant-list';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { categoryData } from '@/constant/pages/client/category.data';
import { BreadCrumb, Container, DynamicHero, Separator, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

const categoryPopularData = [
  {
    id: '1',
    title: 'Fast Food',
    image: '/images/category/fast-food.jpg',
    link: '/fast-food',
  },
  {
    id: '2',
    title: 'Breakfast And Brunch',
    image: '/images/category/breakfast-and-brunch.png',
    link: '/breakfast-and-brunch',
  },
];

export async function getServerSideProps(context: any) {
  const { label, sublabel } = context.params;

  return {
    props: {
      breadCrumbText: breadCrumbGenerate(label, sublabel),
      pageText: titleCaseFull(sublabel, capitalizeCity(label)),
    },
  };
}

export default function CategoryPage({ pageText, breadCrumbText }: any) {
  const {
    citySelected,
    hero: {
      buttonText,
      background,
      input: { placeholder },
    },
  } = categoryData;
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
          <div>
            <Typography as='h2' variant='4xl'>
              {pageText} Near Me
            </Typography>
            <Spacer className='h-2' />
            <p>{citySelected.subtitle}</p>
          </div>
          <Separator />
        </Container>
        <Container>
          <Spacer className='h-6' />
          <RestaurantList data={data.findManyRestaurants.results} />
          <Separator />
        </Container>
        <Container>
          <Typography as='h2' variant='4xl'>
            Explore Popular Categories
          </Typography>
          <div className='mt-8 grid grid-flow-col grid-rows-4 gap-[32px_24px]'>
            {categoryPopularData.map(
              (item: CategoryPopularItem, index: number) => (
                <CategoryPopularItem key={index} {...item} />
              )
            )}
          </div>
        </Container>
      </main>
    );
  }
}

type CategoryPopularItem = {
  title: string;
  image: string;
  link: string;
};

export const CategoryPopularItem = ({
  title,
  link,
  image,
}: CategoryPopularItem) => (
  <Link href={`/client/category${link}`}>
    <div className='flex items-center'>
      <div>
        <NextImage
          alt='Fast Food Delivery'
          src={image}
          aria-hidden='true'
          className='h-12 w-12 rounded-3xl object-cover'
          width={48}
          height={48}
        />
      </div>
      <Spacer className='w-4' />
      <div>
        <Typography as='div' variant='base'>
          {title}
        </Typography>
      </div>
    </div>
  </Link>
);
