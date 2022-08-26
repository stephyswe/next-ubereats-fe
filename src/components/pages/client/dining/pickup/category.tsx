/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

import { Button } from '@/components';
import { DiningCategoryItem } from '@/components/pages/client/dining/item';

import { useDelivery } from '@/contexts';
import { LoadingInitAlt, LoadingRoundSmall } from '@/ui';
import { SvgCategoryArrow } from '@/ui/icons';

const CategoryContentSkeleton = () => (
  <LoadingInitAlt>
    <LoadingRoundSmall w='144' />
    <div className='w-3 flex-shrink-0 bg-white'></div>
    <LoadingRoundSmall w='104' />
  </LoadingInitAlt>
);

export function PickupCategoryList({ data }: any) {
  const { isComplete } = useDelivery();
  if (!isComplete) return <CategoryContentSkeleton />;
  return (
    <>
      <PickupArrow />
      <div className='scroll-smooth'>
        <div className='flex'>
          {data.map(({ title, img }: any) => (
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
