import { Link, NextImage, Typography } from '@/components';
import { LinkIcon } from '@/components/links/LinkIcon';

import { Spacer, StoreToggler } from '@/ui';
import { SvgPersonAdd, SvgSchedule } from '@/ui/icons';

type StoreDetailProps = {
  title: string;
  address: string;
  info: string;
  rating: string;
};

export const StoreDetail = ({
  data: { title, address, info, rating },
}: {
  data: StoreDetailProps;
}) => (
  <div>
    <Typography as='h2' variant='4xl' className='leading-[36px]'>
      {title}
    </Typography>
    <div className='h-1 md:h-2'></div>
    <div className='flex'>
      <div>
        <StoreDetailRating rating={rating} />
        <Spacer className='h-[2px]' />
        <Typography
          as='p'
          variant='small'
          className='hidden text-gray-400 md:block'
        >
          {address}
        </Typography>
        <Spacer className='h-[2px]' />
        {/* <Typography as='p' variant='small' className='text-gray-400'>
          {timeCost}
        </Typography> */}
        <Spacer className='h-[2px]' />
        <Link href='placeholder'>
          <Typography as='p' variant='small' className='text-gray-400'>
            {info}
          </Typography>
        </Link>
      </div>
    </div>
    {/* add toggle */}
    <div className='relative mt-4 h-[45px] md:hidden'>
      <StoreToggler />
    </div>

    <div className='flex min-h-[56px] items-end'>
      <LinkIcon href='placeholder' svg={<SvgPersonAdd />} title='Group Order' />
      <div className='w-2'></div>
      <LinkIcon href='placeholder' svg={<SvgSchedule />} title='Schedule' />
    </div>
  </div>
);

const StoreDetailRating = ({ rating }: any) => (
  <div className='flex'>
    <Link href='placeholder'>
      <div className='flex items-center gap-x-1'>
        <NextImage
          alt='something'
          src='/images/Star_Black_Eats_3.png'
          width='14'
          height='14'
        />
        <span className='text-sm font-medium leading-4'>{rating}</span>
      </div>
    </Link>
    <span className='hidden items-center text-sm font-medium leading-4 text-black md:inline-flex'>
      &nbsp;•&nbsp;
    </span>
    <Link
      rel='nofollow'
      className='hidden cursor-pointer text-sm font-medium leading-4 text-black underline md:block'
      href='placeholder'
    >
      More Info
    </Link>
  </div>
);
