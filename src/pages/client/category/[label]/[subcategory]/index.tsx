import { useState } from 'react';

import {
  capitalize,
  titleCase,
  titleCaseDefault,
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
  const { label, subcategory } = context.params;
  const city = capitalize(label.substr(0, label.indexOf('-')));
  const region = titleCaseDefault(label.split('-').slice(1).join('-'));
  const countryArray = ['Sweden'];
  countryArray.push(region, city);

  return {
    props: {
      categoryText: titleCaseFull(subcategory, city),
      breadCrumbText: [...countryArray, titleCase(subcategory)],
    },
  };
}

export default function CategoryPage({
  categoryText,
  breadCrumbText,
}: {
  categoryText: string;
  breadCrumbText: string[];
}) {
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
        <DynamicHero background={background} title={categoryText}>
          <div className='relative flex w-[35vw] flex-1 flex-col'>
            <ButtonInput svg={<SvgMap />} placeholder={placeholder} />
          </div>
          <Spacer className='w-4' />
          <Button className='w-[300px]' variant='blackHome'>
            {buttonText}
          </Button>
        </DynamicHero>

        <Spacer className='h-6' />
        <Container>
          <BreadCrumb data={breadCrumbText} />
        </Container>
        <Container>
          <div>
            <Typography as='h2' variant='h2b'>
              {categoryText} Near Me
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
          <Typography as='h2' variant='h2b'>
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
        <Typography as='div' variant='divCategoryResItemTitle'>
          {title}
        </Typography>
      </div>
    </div>
  </Link>
);
