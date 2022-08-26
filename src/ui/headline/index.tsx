import clsx from 'clsx';

import clsxm from '@/lib/clsxm';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Link, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { Spacer } from '@/ui';
import { SvgHorizontalArrow } from '@/ui/icons';

export const Headline = ({
  inputRef,
  title,
  subtitle,
  link,
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
        {isMobile ? null : (
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
};
