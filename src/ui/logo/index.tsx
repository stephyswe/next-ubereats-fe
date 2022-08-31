/* eslint-disable @next/next/no-img-element */
import { Link } from '@/components';

export const Logo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <Link data-testid='ui-logo' href='/'>
    <img
      alt='Startsida för Uber&nbsp;Eats'
      src='/images/logo.svg'
      width='146'
      height='24'
      className='block h-6 max-h-[18px] w-auto max-w-[136px] md:max-h-[inherit] md:max-w-[inherit] '
    />
  </Link>
);
