import { Fragment } from 'react';

import { Button } from '@/components';
import { DiningCategoryItem } from '@/pages/client/dining/item';

import { isTest } from '@/lib/env';
import { useDelivery } from '@/contexts';
import { LoadingWithSpace } from '@/ui';
import { SvgCategoryArrow } from '@/ui/icons';
import { LoadingHiddenSpace, LoadingRoundSmall } from '@/ui/loading/item';

export const CategoryContentSkeleton = () => (
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

export const PickupCategoryList = ({
  data,
}: {
  data: PickupCategoryListProps[];
}) => {
  const { isComplete } = useDelivery();
  if (!isComplete && !isTest) return <CategoryContentSkeleton />;
  return (
    <>
      <PickupArrow />
      <div className='scroll-smooth sm:overflow-hidden px-3 md:p-0'>
        <div className='flex'>
          {data.map(({ title, img }: PickupCategoryListProps) => (
            <Fragment key={title}>
              <DiningCategoryItem title={title} img={img} />
              <div className='m-0 h-[1px] w-4 flex-shrink-0 p-0'></div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

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
