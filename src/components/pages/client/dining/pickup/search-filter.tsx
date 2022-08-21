import { Fragment } from 'react';

import { Button, Typography } from '@/components';

import { LoadingSquare, Spacer } from '@/ui';
import { SvgFilterDropdown } from '@/ui/icons';

const SearchFilterSkeleton = () => (
  <>
    <div className='h-6'></div>
    <LoadingSquare w='176' h='24' />
    <div className='h-1'></div>
    <LoadingSquare w='88' h='20' />
    <div className='h-2'></div>
  </>
);

export function SearchFilter({ isComplete, data }: any) {
  return (
    <>
      {!isComplete ? (
        <SearchFilterSkeleton />
      ) : (
        <div className='box-border flex w-full flex-row'>
          <div className='mx-[-24px] flex flex-grow py-4'>
            <Spacer className='w-6' />
            {data.map((filter: any) => (
              <Fragment key={filter.title}>
                <SearchFilterButton {...filter} />
                <Spacer className='w-3' />
              </Fragment>
            ))}
          </div>
        </div>
      )}
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
