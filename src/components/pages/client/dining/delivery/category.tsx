/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Fragment } from 'react';

import Typography from '@/components/typography';

import { Spacer } from '@/ui';

export const DeliveryBottomText = () => (
  <div className='flex flex-row pt-6'>
    <Link href='placeholder'>
      <span className='text-base'>
        Learn how Uber Eats references and ranks partners offers.{' '}
        <span className='underline'>Learn more</span>
      </span>
    </Link>
  </div>
);

export const DeliveryCategoryList = ({ data }: any) => (
  <nav className='flex justify-center'>
    <ul className='flex items-start justify-center'>
      {data.map(({ title, img }: any) => (
        <Fragment key={title}>
          <DeliveryCategoryItem key={title} title={title} img={img} />
          <Spacer className='w-4' />
        </Fragment>
      ))}
    </ul>
  </nav>
);

// TODO: Fix A to Link component.
const DeliveryCategoryItem = ({ title, img }: any) => (
  <li>
    <a
      href={`placeholder-${title}`}
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
      <Spacer className='h-2' />
      <Typography
        as='p'
        variant='small'
        weight='medium'
        className='w-full text-center leading-4'
      >
        {title}
      </Typography>
    </a>
  </li>
);
