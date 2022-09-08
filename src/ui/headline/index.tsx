/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';

import { Link, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { Spacer } from '@/ui';
import { SvgHorizontalArrow } from '@/ui/icons';

export const Headline = ({
  info,
  inputRef,
  title,
  subtitle,
  link,
  noArrow,
}: HeadlineProps) => {
  return (
    <div
      data-testid='ui-headline'
      className={clsx(
        'flex w-full justify-between',
        noArrow ? 'items-end' : 'mb-6 items-center'
      )}
    >
      <div className='space-y-2'>
        <div role='tooltip' className='group relative flex'>
          <Typography as='span' variant='4xl'>
            {title}
            {info ? (
              <img
                alt=''
                role='presentation'
                src='https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/Vector.png'
                width='14'
                height='14'
                className='ml-2'
              />
            ) : null}
          </Typography>
          {info ? <HeadlineInfoBox /> : null}
        </div>

        {subtitle ? (
          <Typography as='p' variant='base'>
            {subtitle}
          </Typography>
        ) : null}
      </div>

      <div className='flex items-center'>
        {link ? (
          <Link
            ref={inputRef}
            className={clsxm(
              'text-base font-medium leading-5 text-black underline'
            )}
            href={link.href}
          >
            {link.title}
          </Link>
        ) : null}
        {noArrow ? null : (
          <>
            <Spacer className='hidden w-10 md:block' />
            <div className='hidden md:block'>
              <HeadlineArrows />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const HeadlineInfoBox = () => (
  <div
    className={clsx(
      'opacity-0 clip-rect',
      'group-hover:opacity-100 group-hover:clip-auto',
      '-right-[165px] left-auto mt-0 w-[300px] border-[1px] border-solid border-[#f6f6f6] p-4 transition-all-50-150 ',
      'absolute top-full z-20 overflow-hidden bg-white box-shadow-sidebar-25-10'
    )}
  >
    <div className='font-uberMove text-xl font-bold text-black'>
      Information on how Uber Eats ranks offers
    </div>
    <div className='text-sm'>
      <div className='h-4 flex-shrink-0'></div>
      <div className='text-base'>
        <span>
          Click to find out how restaurants and other merchants are ranked in
          the Uber Eats app and website,{' '}
          <span className='underline'>
            <Link href='/'>Click here</Link>
          </span>
        </span>
      </div>
    </div>
  </div>
);

export const HeadlineArrows = ({ onClick }: any) => (
  <div className='flex'>
    <ButtonIcon
      variant='btnNav'
      className={clsx('bg-[#f6f6f6] text-[#afafaf]')}
      disabled={true}
      svg={<SvgHorizontalArrow rotate />}
    />
    <Spacer className='w-1' />
    <ButtonIcon
      variant='btnNav'
      onClick={onClick}
      className={clsx('bg-[#eee]')}
      svg={<SvgHorizontalArrow />}
    />
  </div>
);

export type HeadlineProps = {
  onClick?: () => void;
  inputRef?: any;
  title: string;
  subtitle?: string;
  link?: { href: string; title: string };
  noArrow?: boolean;
  info?: boolean;
};
