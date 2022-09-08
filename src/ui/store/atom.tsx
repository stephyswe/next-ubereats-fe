import { Fragment } from 'react';

import { Typography } from '@/components';

import { Spacer, SpacerItem } from '@/ui/spacer';
import { CityRestaurantItemProps } from '@/ui/store/item';

/* eslint-disable @next/next/no-img-element */
export const ClosedFigCaption = ({ closed }: { closed: boolean }) => (
  <figcaption className='absolute right-0 left-0 top-0 bottom-0'>
    <div className='absolute h-full w-full bg-black opacity-50'></div>
    <div className='absolute box-border flex h-full w-full flex-col items-center justify-center p-2'>
      <div className='box-border flex h-9 w-fit flex-row items-center bg-[#eee] p-[8px_12px] rounded-500'>
        <div className='text-sm font-medium leading-4'>
          <span className='flex'>
            <span className='align-middle leading-[1px]'>
              <img
                alt=''
                role='presentation'
                src='https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/calendar_filled.png'
                width='16'
                height='16'
              />
            </span>
            <span className='ml-[2px]'> Schedule Order</span>
          </span>
        </div>
      </div>
      <div className='mt-1 w-full text-xs font-medium text-white opacity-100'>
        <div className='overflow-hidden text-center webkit-line-clamp-3 webkit-orient-vertical webkit'>
          Opens at {closed ? '10:00 AM' : '10:00 AM'}
        </div>
      </div>
    </div>
  </figcaption>
);

export const ItemPromote = ({
  banner,
}: Pick<CityRestaurantItemProps, 'banner'>) => (
  <div className='absolute top-0 box-border flex w-full justify-between py-3 '>
    <div className='inline-block overflow-hidden text-ellipsis whitespace-nowrap rounded-[0_24px_24px_0] bg-[rgb(5,163,87)] py-1 px-3 text-sm font-medium leading-4 text-[#fff] '>
      {banner}
    </div>
  </div>
);

// eslint-disable-next-line unused-imports/no-unused-vars
export const ItemTags = ({ data }: { data: string[] }) => (
  <div className='flex w-full flex-nowrap items-center justify-start overflow-hidden whitespace-nowrap'>
    {data.map((tag: string, index: number) => (
      <Fragment key={index}>
        <ItemTagText title={tag} />
        <SpacerItem index={index} length={data.length}>
          <ItemTagDot />
        </SpacerItem>
      </Fragment>
    ))}
  </div>
);

const ItemTagText = ({ title }: { title: string }) => (
  <div className='flex-shrink-0 overflow-hidden whitespace-nowrap'>
    <span className='overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal leading-5 text-[#545454]'>
      <div className='text-sm font-normal leading-5 text-[#6b6b6b]'>
        {title}
      </div>
    </span>
  </div>
);

const ItemTagDot = () => (
  <Typography as='span' variant='textDot'>
    &nbsp;•&nbsp;
  </Typography>
);

export const ItemRanking = ({
  ranking,
}: Pick<CityRestaurantItemProps, 'ranking'>) => (
  <div
    aria-hidden='true'
    className='flex h-7 flex-[0_0_28px] items-center justify-center rounded-[50%] bg-[#eee] text-xs font-medium leading-4'
  >
    {ranking}
  </div>
);

export const StoreItemTime = ({
  time,
  distance,
}: {
  time: string;
  distance: string;
}) => (
  <div className='flex w-full flex-nowrap items-center justify-start'>
    <Typography as='span' className='text-sm'>
      {time}
    </Typography>
    <Typography
      as='p'
      variant='small'
      className='inline-flex items-center text-gray-400'
    >
      &nbsp;•&nbsp;
    </Typography>
    <Typography as='span' className='text-sm'>
      {distance}
    </Typography>
  </div>
);

export const StoreItemImageContent = ({ svg }: any) => (
  <div className='absolute top-0 box-border flex w-full justify-between py-3'>
    <Spacer className='w-2' />
    <div className='flex'>
      <Spacer className='w-4' />
      <div className='relative'>
        <div className='absolute -left-[26px] -top-[38px] h-20 w-20 rounded-[50%] bg-gradient-rgba-center'></div>
        <button className='pointer-events-auto relative z-10 flex cursor-pointer'>
          {svg}
        </button>
      </div>
      <Spacer className='w-3' />
    </div>
  </div>
);
