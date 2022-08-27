import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { ButtonInput } from '@/components';
import { LinkLogin } from '@/components/links/NavLink';

import { useDelivery } from '@/contexts';
import { Spacer } from '@/ui';
import { Cart } from '@/ui/cart';
import { SvgMap } from '@/ui/icons';
import { NavButtonInput } from '@/ui/layout/nav/content/home';
import { NavItemDelivery, NavItemSearch } from '@/ui/layout/nav/items';
import { DiningToggler } from '@/ui/toggler';

export function NavCategoryContent({ auth, change, onScroll }: any) {
  const { isMobile } = useWindowSizeJs();
  const { isComplete } = useDelivery();

  if (isMobile) {
    return (
      <>
        {!change ? (
          <>
            <div className='flex-1'></div>
            <div className='flex flex-grow-0 items-center justify-end'>
              <LinkLogin plain size='small' />
            </div>
          </>
        ) : (
          <div className='w-full'>
            <ButtonInput
              svg={<SvgMap />}
              placeholder='Enter delivery address'
              className='bg-[#eee]'
              innerClassName='bg-[#eee]'
            />
          </div>
        )}
      </>
    );
  }

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
      <Spacer className='w-[128px]' />
      <div className={clsx('relative w-full max-w-[722px]')}>
        <NavButtonInput onScroll={onScroll} />
      </div>
      <Spacer className='w-4' />
      <div className='flex-1'></div>
      <div className='flex flex-grow-0 items-center justify-end'>
        <LinkLogin plain />
      </div>
    </>
  );
}
