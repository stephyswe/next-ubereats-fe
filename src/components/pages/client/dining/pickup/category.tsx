/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

import { Button } from '@/components';
import { DiningCategoryItem } from '@/components/pages/client/dining/item';

import { useDelivery } from '@/contexts';
import { LoadingHiddenSpace, LoadingRoundSmall, LoadingWithSpace } from '@/ui';
import { SvgCategoryArrow } from '@/ui/icons';

const CategoryContentSkeleton = () => (
  <LoadingWithSpace p='12px 0px'>
    <LoadingRoundSmall w='144' />
    <LoadingHiddenSpace wSpace='12' />
    <LoadingRoundSmall w='104' />
  </LoadingWithSpace>
);

type PickupCategoryListProps = {
  title: string;
  img: string;
};

export type DiningCategoryItemProps = Pick<
  PickupCategoryListProps,
  'img' | 'title'
>;

export function PickupCategoryList({
  data,
}: {
  data: PickupCategoryListProps[];
}) {
  const { isComplete } = useDelivery();
  if (!isComplete) return <CategoryContentSkeleton />;
  return (
    <>
      <PickupArrow />
      <div className='scroll-smooth'>
        <div className='flex'>
          {data.map(({ title, img }: DiningCategoryItemProps) => (
            <Fragment key={title}>
              <DiningCategoryItem title={title} img={img} />
              <div className='m-0 h-[1px] w-4 flex-shrink-0 p-0'></div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export const PickupArrow = () => (
  <div className='pointer-events-none absolute z-10 flex h-full w-full justify-between'>
    <div className='pointer-events-auto invisible flex h-full cursor-pointer items-center pr-6 bg-gradient-rgb-right'>
      <Button variant='btnSmall2'>
        <SvgCategoryArrow />
      </Button>
    </div>
    <div className='pointer-events-auto right-0 flex h-full cursor-pointer items-center pl-6 bg-gradient-rgb-left'>
      <Button variant='btnSmall2'>
        <SvgCategoryArrow rotate />
      </Button>
    </div>
  </div>
);
