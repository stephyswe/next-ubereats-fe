import { LinkLogin } from '@/components/links/NavLink';

import { useDelivery } from '@/contexts';
import { Spacer } from '@/ui';
import { Cart } from '@/ui/cart';
import { NavItemDelivery, NavItemSearch } from '@/ui/layout/nav/items';
import { DiningToggler } from '@/ui/toggler';

export function NavbarCategoryContent({ auth }: any) {
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
      <div className='flex-1'></div>
      <div className='flex flex-grow-0 items-center justify-end'>
        <LinkLogin plain />
      </div>
    </>
  );
}
