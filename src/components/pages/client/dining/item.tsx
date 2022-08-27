/* eslint-disable @next/next/no-img-element */
import { DiningCategoryItemProps } from '@/components/pages/client/dining/pickup/category';
import Typography from '@/components/typography';

import { Spacer } from '@/ui';

export const DiningCategoryItem = ({ title, img }: DiningCategoryItemProps) => (
  <li>
    <a
      href='placeholder'
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
        as='div'
        variant='small'
        weight='medium'
        leading='4'
        className='w-full text-center'
      >
        <div className='overflow-hidden'>{title}</div>
      </Typography>
    </a>
  </li>
);
