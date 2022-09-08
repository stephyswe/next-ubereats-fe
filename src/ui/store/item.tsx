/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import { Link, NextImage, Typography } from '@/components';

import { Spacer } from '@/ui';
import { SvgLike } from '@/ui/icons';
import {
  ClosedFigCaption,
  ItemPromote,
  ItemRanking,
  ItemTags,
  StoreItemImageContent,
  StoreItemTime,
} from '@/ui/store/atom';

export type CityRestaurantItemProps = {
  title: string;
  slug: string;
  category: any;
  src: string;
  address: string;
  ranking: string | null;
  banner: string | null;
  closed?: boolean;
  time?: string;
  distance?: string;
  srcSet?: string;
};

/**
 * Not used but very customizable

const StoreItem = (props: any) => {
  return (
    <Link href='/client/store/1'>
      <div className={clsx('relative w-full', props.divClassName)}>
        <StoreItemImage className={clsx(props.imageClassName)} {...props} />
        <StoreItemDetail
          className={clsx(
            'sm:pt-2 md:ml-4 md:w-[calc(100%-216px)]',
            props.detailClassName
          )}
          {...props}
        />
      </div>
    </Link>
  );
};
 */

export const StoreItemWide = (props: any) => (
  <Link href='/client/store/1'>
    <div
      className={clsx('relative flex w-full sm:flex-col', props.divClassName)}
    >
      <StoreItemImage
        className={clsx('md:w-[200px]', props.imageClassName)}
        {...props}
      />
      <StoreItemDetail
        className={clsx(
          'sm:pt-2 md:ml-4 md:w-[calc(100%-216px)]',
          props.detailClassName
        )}
        {...props}
      />
    </div>
  </Link>
);

export const StoreItemDefault = (props: any) => (
  <Link href='/client/store/1'>
    <div className={clsx('relative w-full', props.divClassName)}>
      <StoreItemImage
        className={clsx('overflow-hidden', props.imageClassName)}
        {...props}
      />
      <StoreItemDetail
        className={clsx('mt-2', props.detailClassName)}
        {...props}
      />
    </div>
  </Link>
);

export const StoreItemImage = ({
  srcSet,
  banner,
  closed,
  className,
  src,
  like,
}: any) => {
  return (
    <div
      className={clsx(
        'relative h-[128px] w-full overflow-hidden bg-[#f6f6f6]',
        className
      )}
    >
      <picture>
        <source className='h-full w-full border-none object-cover' />
        {srcSet ? (
          <img
            alt=''
            src={src}
            srcSet={srcSet}
            className='block h-full w-full border-none object-cover'
          />
        ) : (
          <NextImage
            className='h-full w-full border-none object-cover'
            alt=''
            src={src}
            layout='fill'
          />
        )}
      </picture>
      {banner ? <ItemPromote banner={banner} /> : null}
      {closed ? <ClosedFigCaption closed={closed} /> : null}
      {like ? <StoreItemImageContent svg={<SvgLike />} /> : null}
    </div>
  );
};

export const StoreItemDetail = ({
  title,
  ranking,
  time,
  distance,
  address,
  category,
  closed,
  className,
}: any) => (
  <div className={clsx('flex flex-col items-start', className)}>
    <ItemTitle title={title} ranking={ranking} closed={closed} />
    {category ? <ItemTags data={category} /> : null}
    {time ? <StoreItemTime time={time} distance={distance} /> : null}
    <Spacer className='h-2' />
    <span className='w-full overflow-hidden text-ellipsis text-sm text-[#6b6b6b] sm:whitespace-nowrap'>
      {address}
    </span>
  </div>
);

export const ItemTitle = ({
  title,
  ranking,
  closed,
  className,
}: Pick<CityRestaurantItemProps, 'title' | 'ranking' | 'closed'> & {
  className?: string;
}) => (
  <div className={clsx('flex w-full items-center justify-between', className)}>
    <Typography
      as='div'
      variant='large'
      className='w-full overflow-hidden text-ellipsis whitespace-nowrap'
    >
      {title}
    </Typography>
    {!closed && ranking ? <ItemRanking ranking={ranking} /> : null}
  </div>
);
