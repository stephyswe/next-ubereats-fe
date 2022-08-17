import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';

import { Link } from '@/components';
import { NavButton } from '@/components/buttons/NavButton';

import { NewLogo, Spacer } from '@/ui';
import { Sidebar } from '@/ui/layout/sidebar';
import { DeliveryPickupToggler } from '@/ui/toggler';

export function CityNav() {
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
    if (stylesBody) document.body.classList.add('sb-hidden');
    else document.body.classList.remove('sb-hidden');
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
                  change ? 'box-shadow-rgb-gray' : '',
                  'bg-white'
                )}
              >
                <NavButton onClick={onClickSidebar} />
                <Spacer className='w-4' />
                <NewLogo />
                <Spacer className='w-10' />
                <DeliveryPickupToggler />
                <div className='flex-1'></div>
                {HeaderContentDefault()}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function HeaderContentDefault() {
  return (
    <>
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
