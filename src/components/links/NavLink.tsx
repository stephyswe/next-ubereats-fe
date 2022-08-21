import clsx from 'clsx';

import { Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgLogin } from '@/ui/icons';

export const LinkLogin = ({ plain, size = 'normal' }: any) => (
  <Link
    size={size}
    variant='navLink'
    href='placeholder'
    className={clsx('bg-[#eee] text-black hover:bg-[#ccc]')}
  >
    {plain ? null : (
      <>
        <SvgLogin />
        <Spacer className='w-2' />
      </>
    )}

    <div className='hidden md:block'>Sign in</div>
  </Link>
);

export const LinkSignup = ({ size = 'normal' }: any) => (
  <Link
    size={size}
    href='/'
    variant='navLink'
    className='bg-[#eee] text-black hover:bg-[#e2e2e2]'
  >
    Sign up
  </Link>
);
