import { Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgLogin } from '@/ui/icons';

export const LinkLogin = ({
  className,
  title,
  plain,
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
        <Spacer className='w-2' />
      </>
    )}

    <div className='hidden md:block'>{title ? title : 'Sign in'}</div>
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
    {title ? title : 'Sign up'}
  </Link>
);
