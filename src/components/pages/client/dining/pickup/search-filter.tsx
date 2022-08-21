import { Fragment } from 'react';

import { Button, Typography } from '@/components';

import { useDelivery } from '@/contexts';
import { LoadingSquare, Spacer } from '@/ui';
import { SvgFilterDropdown } from '@/ui/icons';

const SearchFilterSkeleton = () => (
  <>
    <Spacer className='h-6' />
    <LoadingSquare w='176' h='24' />
    <Spacer className='h-1' />
    <LoadingSquare w='88' h='20' />
    <Spacer className='h-2' />
  </>
);

export function SearchFilter({ data }: any) {
  const { isComplete } = useDelivery();
  if (!isComplete) return <SearchFilterSkeleton />;
  return (
    <>
      <div className='box-border flex w-full flex-row'>
        <div className='mx-[-24px] flex flex-grow py-4'>
          <Spacer className='w-6' />
          {data.map((filter: any) => (
            <Fragment key={filter.title}>
              <SearchFilterButton title={filter.title} />
              <Spacer className='w-3' />
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

const SearchFilterButton = ({ title }: any) => (
  <Button variant='filter'>
    <div className='flex-grow overflow-hidden'>
      <Typography as='span'>{title}</Typography>
    </div>
    <Spacer className='w-3' />
    <div className='mx-[-4px] self-center'>
      <div className='h-6 w-6 leading-none'>
        <SvgFilterDropdown />
      </div>
    </div>
  </Button>
);
