import clsx from 'clsx';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';

import { Link, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { Spacer, SpacerItem } from '@/ui';
import { SvgHorizontalArrow } from '@/ui/icons';

export const HeadlineList = ({ data }: { data: HeadlineCityProps[] }) => (
  <div data-testid='ui-headline-list'>
    {data.map(({ title, subtitle }: HeadlineCityProps, index: number) => (
      <Fragment key={title}>
        <Typography as='h2' variant='4xl'>
          {title}
        </Typography>
        {subtitle ? <Spacer className='h-2' /> : null}
        <Typography as='div' variant='base' className='text-[#545454]'>
          {subtitle}
        </Typography>
        <SpacerItem index={index} length={data.length}>
          <Spacer className='h-4' />
        </SpacerItem>
      </Fragment>
    ))}
  </div>
);

export const Headline = ({
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
      <div>
        <Typography as='h2' variant='4xl'>
          {title}
        </Typography>
        {subtitle ? (
          <>
            <Spacer className='h-2' />
            <Typography as='div' variant='base' className='text-[#545454]'>
              {subtitle}
            </Typography>
          </>
        ) : null}
      </div>

      <div className='flex items-center'>
        {link ? (
          <Link
            ref={inputRef}
            className={clsxm(
              'cursor-pointer text-base font-medium leading-5 text-black underline'
            )}
            href={link.href}
          >
            {link.title}
          </Link>
        ) : null}
        {noArrow ? null : (
          <>
            <Spacer className='w-10' />
            <div className='hidden md:block'>
              <HeadlineArrows />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const HeadlineArrows = ({ onClick }: any) => (
  <div className='flex'>
    <ButtonIcon
      variant='btnNav'
      className={clsx('bg-[#f6f6f6] text-[#afafaf]')}
      disabled={true}
      svg={<SvgHorizontalArrow rotate />}
    />
    <div className='w-1'></div>
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
};

type HeadlineCityProps = { title: string; subtitle: string };
