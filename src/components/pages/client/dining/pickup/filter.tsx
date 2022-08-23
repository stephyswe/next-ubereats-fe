import { Fragment } from 'react';

import { Button, Typography } from '@/components';

import { useDelivery } from '@/contexts';
import { LoadingSquare, Spacer } from '@/ui';
import { SvgFilterDropdown } from '@/ui/icons';

const PickupFilterSkeleton = () => (
  <>
    <Spacer className='h-6' />
    <LoadingSquare w='176' h='24' />
    <Spacer className='h-1' />
    <LoadingSquare w='88' h='20' />
    <Spacer className='h-2' />
  </>
);

export function PickupFilter({ data }: any) {
  const { isComplete } = useDelivery();
  if (!isComplete) return <PickupFilterSkeleton />;
  return (
    <div className='box-border flex w-full flex-row'>
      <div className='mx-[-24px] flex flex-grow py-4'>
        <Spacer className='w-6' />
        {data.map((filter: any) => (
          <Fragment key={filter.title}>
            <PickupFilterButton title={filter.title} />
            <Spacer className='w-3' />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

const PickupFilterButton = ({ title }: any) => (
  <Button variant='btnSmall1'>
    <div className='flex-grow overflow-hidden'>
      <Typography
        as='span'
        className='whitespace-nowrap text-sm font-medium leading-4'
      >
        {title}
      </Typography>
    </div>
    <Spacer className='w-3' />
    <div className='mx-[-4px] self-center'>
      <div className='h-6 w-6 leading-none'>
        <SvgFilterDropdown />
      </div>
    </div>
  </Button>
);
