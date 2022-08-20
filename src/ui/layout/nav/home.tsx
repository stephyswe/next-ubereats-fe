import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';

import { Link } from '@/components';
import { NavButton } from '@/components/buttons/NavButton';

import { navHomeData } from '@/constant/pages/layout/nav-home.data';
import { NewLogo, Spacer } from '@/ui';
import { Sidebar } from '@/ui/layout/sidebar';

export function HomeNav() {
  const { auth } = navHomeData;
  const router = useRouter();
  const wrapperRef = useRef(null);
  const [stylesBody, setStylesBody] = useState(true);
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(false);
  }, [router]);

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

  function onClickSidebar() {
    if (stylesBody) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    setStylesBody(!stylesBody);
  }

  return (
    <>
      <Sidebar stylesBody={stylesBody} wrapperRef={wrapperRef} />
      <header>
        <div className={change ? 'h-0' : undefined}>
          <div
            className={change ? 'fixed top-0 left-0 z-30 w-full ' : undefined}
          >
            <div className='relative'>
              <div
                className={clsx(
                  'right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4',
                  'text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10',
                  change ? 'bg-white box-shadow-rgb-gray' : '',
                  'absolute z-10'
                )}
              >
                <NavButton onClick={onClickSidebar} />
                <Spacer className='w-4' />
                <NewLogo />
                <div className='flex-1'></div>
                <AuthContent data={auth} change={change} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

type AuthContentProps = {
  data: {
    register: { title: string; link: string };
    login: { title: string; svg: JSX.Element; link: string };
  };
  change: boolean;
};

const AuthContent = ({
  data: { login, register },
  change,
}: AuthContentProps) => (
  <>
    <Link
      variant='navLink'
      href={login.link}
      className={clsx(
        'bg-white text-black hover:bg-[#ccc]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    >
      {login.svg}
      <Spacer className='w-4' />
      <div className='hidden md:block'>{login.title}</div>
    </Link>
    <Spacer className='w-4' />
    <Link
      variant='navLink'
      href={register.link}
      className={clsx(
        'bg-black text-white hover:bg-[#333]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    >
      <div>{register.title}</div>
    </Link>
  </>
);
