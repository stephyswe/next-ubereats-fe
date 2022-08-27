import clsx from 'clsx';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Link, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';
import { Clamp } from '@/components/clamp/clamp';

import { Spacer, SpacerItem } from '@/ui';
import { SvgHorizontalArrow } from '@/ui/icons';

export const Headline = ({
  inputRef,
  title,
  subtitle,
  link,
  noArrow,
}: HeadlineProps) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div className='mb-6 flex items-center justify-between'>
      <div>
        <Typography as='h2' variant='4xl'>
          {title}
        </Typography>
        <Typography as='div' variant='small' className='text-[#545454]'>
          {subtitle}
        </Typography>
      </div>

      <div className='flex items-center '>
        {link ? (
          <Link
            ref={inputRef}
            className={clsxm(
              'cursor-pointer text-base font-medium leading-5 text-black underline'
            )}
            href='/category/atlanta-ga'
          >
            {subtitle ? 'See all' : 'View all'}
          </Link>
        ) : null}
        {isMobile || noArrow ? null : (
          <>
            <Spacer className='w-10' />
            <HeadlineNavigate />
          </>
        )}
      </div>
    </div>
  );
};

export const HeadlineNavigate = ({ onClick }: any) => (
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

type HeadlineProps = {
  onClick?: () => void;
  inputRef?: any;
  title: string;
  subtitle?: string;
  link?: boolean;
  noArrow?: boolean;
};

type HeadlineCityProps = { title: string; subtitle: string };

export const HeadlineCity = ({ data }: { data: HeadlineCityProps[] }) => (
  <div>
    {data.map((item: HeadlineCityProps, index: number) => (
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

type HeadlineFoodProps = { title: string; subtitle: string; noClamp?: boolean };

export const HeadlineFood = ({
  title,
  subtitle,
  noClamp,
}: HeadlineFoodProps) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div>
      <Typography as='h1' variant='4xl'>
        {title} {noClamp ? 'Near Me' : ''}
      </Typography>
      <Spacer className='h-2' />

      {isMobile && !noClamp ? (
        <Clamp lines={2} withToggle>
          <Typography variant='base'>{subtitle}</Typography>
        </Clamp>
      ) : (
        <Typography variant='base'>{subtitle}</Typography>
      )}
    </div>
  );
};
