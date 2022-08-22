/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

import { Button, Typography } from '@/components';

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

export function CategoryContent({ data }: any) {
  const { isComplete } = useDelivery();
  if (!isComplete) return <CategoryContentSkeleton />;
  return (
    <>
      <Arrow />
      <div className='scroll-smooth'>
        <div className='flex'>
          {data.map((item: any) => (
            <Fragment key={item.title}>
              <CategoryIcon {...item} />
              <div className='m-0 h-[1px] w-4 flex-shrink-0 p-0'></div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

const CategoryIcon = ({ title, img }: any) => (
  <div>
    <li>
      <a
        href='yup'
        className='group relative flex min-w-[80px] max-w-fit flex-col items-center '
      >
        <div className='relative h-[60px] w-[60px]'>
          <img
            alt={title}
            role='presentation'
            src={img}
            className='h-full w-full rounded-full group-hover:bg-[#eee]'
          />
        </div>
        <div className='h-2'></div>
        <Typography
          as='p'
          variant='small'
          weight='medium'
          leading='4'
          className='w-full text-center'
        >
          <div className='overflow-hidden'>{title}</div>
        </Typography>
      </a>
    </li>
  </div>
);

export const Arrow = () => (
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
