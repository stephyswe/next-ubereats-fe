import { isBrowser, LOCALSTORAGE_TOKEN } from '@/lib/env';

import { LinkLogin } from '@/components/links/NavLink';

import { useDelivery } from '@/contexts';
import { NavItemDelivery, NavItemSearch } from '@/layout/nav/items';
import { Cart, DiningToggler, Spacer } from '@/ui';

export function NavbarStoreContent() {
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
        <NavItemSearch />
        <Spacer className='w-6' />
        <Cart />
      </>
    );

  return (
    <>
      <Spacer className='w-10' />
      <Spacer className='w-16' />
      <NavItemSearch />
      <Spacer className='flex-1' />
      <div className='flex flex-grow-0 items-center justify-end'>
        <Cart size='small' />
        <Spacer className='w-4' />
        <LinkLogin size='small' />
      </div>
    </>
  );
}
