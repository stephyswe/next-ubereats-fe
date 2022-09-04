import { LinkLogin } from '@/components/links/NavLink';

import { isBrowser, LOCALSTORAGE_TOKEN } from '@/constant/env';
import { useDelivery } from '@/contexts';
import { NavItemDelivery, NavItemSearch } from '@/layout/nav/items';
import { Spacer } from '@/ui';
import { Cart } from '@/ui/cart';
import { DiningToggler } from '@/ui/toggler';

export const NavbarDiningContent = () => {
  let auth;
  if (isBrowser) {
    auth = localStorage.getItem(LOCALSTORAGE_TOKEN ? LOCALSTORAGE_TOKEN : '');
  }

  const { isComplete } = useDelivery();
  if (auth)
    return (
      <>
        <Spacer className='w-10' />
        {isComplete ? <DiningToggler /> : null}
        <Spacer className='w-4' />
        <NavItemDelivery />
        <Spacer className='w-16' />
        <NavItemSearch placeholder='Enter pickup address' />
        <Spacer className='w-6' />
        <Cart />
      </>
    );

  return (
    <>
      <Spacer className='w-10' />
      <DiningToggler size='small' />
      <Spacer className='w-4' />

      <NavItemSearch
        className='w-full max-w-[722px]'
        placeholder='Enter pickup address'
      />
      <Spacer className='flex-1' />
      <div className='flex flex-grow-0 items-center justify-end'>
        <LinkLogin plain />
      </div>
    </>
  );
};
