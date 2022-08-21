import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { windowCheck } from '@/lib/apollo';
import { useOutsideAlerter } from '@/hooks/useOutside';

import { Link } from '@/components';
import { NavButton } from '@/components/buttons/NavButton';

import { LOCALSTORAGE_TOKEN } from '@/constant/env';
import { useDelivery } from '@/contexts';
import {
  Cart,
  CartDelivery,
  CartSearch,
  LoadingInit,
  LoadingRound,
  NewLogo,
  Spacer,
} from '@/ui';
import { Sidebar } from '@/ui/layout/sidebar';
import { DiningToggler } from '@/ui/toggler';

export function CityNav({ noHoverBorder }: any) {
  const router = useRouter();

  const wrapperRef = useRef(null);

  const [stylesBody, setStylesBody] = useState(true);
  const [change, setChange] = useState(false);

  let position;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    position = useWindowScrollPosition();
  }

  useOutsideAlerter(wrapperRef, setStylesBody);

  const changePosition = 1;

  if (position) {
    if (position.scrollY > changePosition && !change) setChange(true);
    if (position.scrollY <= changePosition && change) setChange(false);
  }

  useEffect(() => {
    setChange(false);
  }, [router]);

  function onClickSidebar() {
    if (stylesBody) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    setStylesBody(!stylesBody);
  }

  return (
    <>
      <Sidebar stylesBody={stylesBody} wrapperRef={wrapperRef} />
      <header>
        <div className={change ? 'h-24' : undefined}>
          <div
            className={change ? 'fixed top-0 left-0 z-30 w-full ' : undefined}
          >
            <div className='relative'>
              <div
                className={clsx(
                  'right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4 text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10',
                  change && !noHoverBorder ? 'box-shadow-rgb-gray' : '',
                  'bg-white'
                )}
              >
                <Navigate onClickSidebar={onClickSidebar} />
                <NavigateDynamic />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const Navigate = ({ onClickSidebar }: any) => (
  <>
    <NavButton onClick={onClickSidebar} />
    <Spacer className='w-8' />
    <NewLogo />
  </>
);

function NavigateDynamic() {
  let auth;
  if (windowCheck) {
    auth = localStorage.getItem(LOCALSTORAGE_TOKEN ? LOCALSTORAGE_TOKEN : '');
  }

  const { isComplete } = useDelivery();
  if (auth)
    return (
      <>
        <Spacer className='w-10' />
        {isComplete ? <DiningToggler /> : null}
        <Spacer className='w-4' />
        <CartDelivery />
        <Spacer className='w-16' />
        <CartSearch />
        <Spacer className='w-6' />
        {isComplete ? (
          <Cart />
        ) : (
          <LoadingInit w='300' h='48'>
            <LoadingRound w='80' />
          </LoadingInit>
        )}
      </>
    );

  return (
    <>
      <Spacer className='w-10' />
      <DiningToggler />
      <div className='flex-1'></div>
      <Link
        href='/'
        variant='navLink'
        className='bg-[#eee] text-black hover:bg-[#e2e2e2]'
      >
        Sign in
      </Link>
    </>
  );
}
