/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';

import { Link, Typography } from '@/components';

import { SpacerItem } from '@/ui';

const ClosedFigCaption = ({ closed }: { closed: boolean }) => (
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

export type CityRestaurantItemProps = {
  name: string;
  slug: string;
  category: any;
  coverImg: string;
  address: string;
  ranking: string | null;
  banner: string | null;
  closed?: boolean;
};

export const CityRestaurantItem = ({
  coverImg,
  name,
  slug,
  category,
  address,
  ranking,
  banner,
  closed,
}: CityRestaurantItemProps) => (
  <Link href={`/store/${slug}`} className='w-full'>
    <div className='relative flex w-full sm:flex-col'>
      <div className='relative h-[128px] overflow-hidden bg-[#f6f6f6] sm:w-full md:w-[200px]'>
        <div className='h-full'>
          <ItemImage image={coverImg} />
        </div>
        <ItemPromote banner={banner} />
        {closed ? <ClosedFigCaption closed={closed} /> : null}
      </div>
      <div className='flex flex-col items-start sm:pt-2 md:ml-4 md:w-[calc(100%-216px)]'>
        <ItemTitle name={name} ranking={ranking} closed={closed} />
        <ItemTags data={category} />
        <div className='h-2'></div>
        <span className='text-ellipsis text-sm text-[#6b6b6b] md:overflow-hidden'>
          {address}
        </span>
      </div>
    </div>
  </Link>
);

export const ItemImage = ({ image }: { image: string }) => (
  <picture>
    <source className='h-full w-full border-none object-cover' />
    <img
      className='h-full w-full border-none object-cover'
      alt=''
      src={image}
    />
  </picture>
);

const ItemTitle = ({
  name,
  ranking,
  closed,
}: Pick<CityRestaurantItemProps, 'name' | 'ranking' | 'closed'>) => (
  <div className='flex w-full items-center justify-between'>
    <Typography
      as='div'
      variant='large'
      className='w-full overflow-hidden text-ellipsis whitespace-nowrap'
    >
      {name}
    </Typography>
    {!closed && ranking ? <ItemRanking ranking={ranking} /> : null}
  </div>
);

export const ItemRanking = ({
  ranking,
}: Pick<CityRestaurantItemProps, 'ranking'>) => (
  <div
    aria-hidden='true'
    className='hidden h-7 flex-[0_0_28px] items-center justify-center rounded-[50%] bg-[#eee] text-xs font-medium leading-4 md:flex'
  >
    {ranking}
  </div>
);

const ItemPromote = ({ banner }: Pick<CityRestaurantItemProps, 'banner'>) => (
  <div className='absolute top-0 box-border flex w-full justify-between py-3 '>
    <div className='inline-block overflow-hidden text-ellipsis whitespace-nowrap rounded-[0_24px_24px_0] bg-[rgb(5,163,87)] py-1 px-3 text-sm font-medium leading-4 text-[#fff] '>
      {banner}
    </div>
  </div>
);

// eslint-disable-next-line unused-imports/no-unused-vars
const ItemTags = ({ data }: { data: string[] }) => (
  <div className='flex w-full flex-nowrap items-center justify-start'>
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
