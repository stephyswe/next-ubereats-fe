/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Fragment } from 'react';

import { DiningCategoryItem } from '@/pages/client/dining/item';
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

type DeliveryCategoryListProps = {
  title: string;
  img: string;
};

export const DeliveryCategoryList = ({
  data,
}: {
  data: DeliveryCategoryListProps[];
}) => (
  <nav className='flex justify-center'>
    <ul className='flex items-start justify-center'>
      {data.map(({ title, img }: DeliveryCategoryListProps) => (
        <Fragment key={title}>
          <DiningCategoryItem key={title} title={title} img={img} />
          <Spacer className='w-4' />
        </Fragment>
      ))}
    </ul>
  </nav>
);
