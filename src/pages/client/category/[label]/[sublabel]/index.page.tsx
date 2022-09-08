import { Button, ButtonInput, Link, NextImage, Typography } from '@/components';

import { useFindManyRestaurantsQuery } from '@/__generated__/graphql';
import { categoryData } from '@/pages/client/category/[label]/[sublabel]/category.data';
import { tempCatDataForCatPage } from '@/pages/_app/items/category';
import { storeCategoryPageData } from '@/pages/_app/items/store';
import {
  Breadcrumb,
  Container,
  Headline,
  HeroDynamic,
  Separator,
  Spacer,
} from '@/ui';
import { SvgMap } from '@/ui/icons';
import { StoreItemDefault } from '@/ui/store/item';

export { getServerSideProps } from '@/pages/client/category/[label]/[sublabel]/category.server';

export default function CategoryPage({ title, breadcrumb }: any) {
  const {
    categoryTitle,
    foodSubtitle,
    hero: { buttonText, background, inputPlaceholder },
  } = categoryData;

  const { data, loading } = useFindManyRestaurantsQuery({
    variables: { input: { page: 1 } },
  });

  if (loading) return <div>loading...</div>;

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
        <Breadcrumb data={breadcrumb} />
      </Container>
      <Container>
        <Headline title={title} subtitle={foodSubtitle} />
        <Separator mobile />
      </Container>
      <Container>
        <Spacer className='h-6' />
        <div className='grid gap-[40px_24px] md:grid-cols-3'>
          {storeCategoryPageData.map((item: any, index: number) => (
            <div key={index} className='min-w-0'>
              <StoreItemDefault {...item} />
            </div>
          ))}
        </div>

        <Separator />
      </Container>
      <Container>
        <Headline
          title={categoryTitle}
          link={{ title: '/', href: '/' }}
          noArrow
        />
        <div className='mt-8 grid gap-[32px_24px]  md:grid-flow-col md:grid-rows-6'>
          {tempCatDataForCatPage.map((item: any, index: number) => (
            <CategoryPopularItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </main>
  );
}

type CategoryPopularItem = {
  name: string;
  coverImg: string;
  link: string;
};

export const CategoryPopularItem = ({
  name,
  link,
  coverImg,
}: CategoryPopularItem) => (
  <Link href={`/client/category${link}`}>
    <div className='flex items-center'>
      <div>
        <NextImage
          alt='Fast Food Delivery'
          src={coverImg}
          aria-hidden='true'
          className='h-12 w-12 rounded-3xl object-cover'
          width={48}
          height={48}
        />
      </div>
      <Spacer className='w-4' />
      <div>
        <Typography as='div' variant='base'>
          {name} Delivery
        </Typography>
      </div>
    </div>
  </Link>
);
