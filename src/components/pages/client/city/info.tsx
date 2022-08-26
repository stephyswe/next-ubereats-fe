import { Fragment } from 'react';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Clamp } from '@/components/clamp/clamp';
import Typography from '@/components/typography';

import { Spacer, SpacerItem } from '@/ui';

type CityInfoItemProps = { title: string; subtitle: string };

export const CityInfo = ({ data }: { data: CityInfoItemProps[] }) => (
  <div>
    {data.map((item: CityInfoItemProps, index: number) => (
      <Fragment key={item.title}>
        <Typography as='h2' variant='4xl'>
          {item.title}
        </Typography>
        <Spacer className='h-2' />
        <Typography as='p' variant='base'>
          {item.subtitle}
        </Typography>
        <SpacerItem index={index} length={data.length}>
          <Spacer className='h-4' />
        </SpacerItem>
      </Fragment>
    ))}
  </div>
);

type FoodInfoProps = { title: string; subtitle: string };

export const FoodInfo = ({ title, subtitle }: FoodInfoProps) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div>
      <Typography as='h1' variant='4xl'>
        {title}
      </Typography>
      <Spacer className='h-2' />

      {isMobile ? (
        <Clamp lines={2} withToggle>
          <Typography variant='base'>{subtitle}</Typography>
        </Clamp>
      ) : (
        <Typography variant='base'>{subtitle}</Typography>
      )}
    </div>
  );
};
