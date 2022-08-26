import clsx from 'clsx';

import { Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgLogin } from '@/ui/icons';

export const LinkLogin = ({
  className,
  title,
  plain,
  textHidden,
  size = 'normal',
}: any) => (
  <Link
    size={size}
    variant='linkBase1'
    href='placeholder'
    className={
      className ? className : 'bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
    }
  >
    {plain ? null : (
      <>
        <SvgLogin />
        <Spacer className={size === 'small' ? 'md:w-1' : 'md:w-1'} />
      </>
    )}

    <div
      className={clsx(
        textHidden ? 'hidden md:block' : 'md:block',
        size === 'small' ? 'text-sm' : 'text-base'
      )}
    >
      {title ? title : 'Sign in'}
    </div>
  </Link>
);

export const LinkSignup = ({ title, className, size = 'normal' }: any) => (
  <Link
    size={size}
    href='/'
    variant='linkBase1'
    className={
      className ? className : 'bg-[#eee] hover:bg-[#e2e2e2] active:bg-[#ddd]'
    }
  >
    <div
      className={clsx('md:block', size === 'small' ? 'text-sm' : 'text-base')}
    >
      {' '}
      {title ? title : 'Sign up'}
    </div>
  </Link>
);
