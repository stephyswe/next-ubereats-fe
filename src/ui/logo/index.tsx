/* eslint-disable @next/next/no-img-element */
import { Link } from '@/components';

export const Logo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <Link aria-label='uber-home-link' href='/'>
    <img
      alt='uber-logo'
      src='/images/logo.svg'
      width='146'
      height='24'
      className='block h-6 max-h-[18px] w-auto max-w-[136px] md:max-h-[inherit] md:max-w-[inherit] '
    />
  </Link>
);
