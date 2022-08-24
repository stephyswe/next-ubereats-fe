import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useWindowScrollPosition } from 'rooks';

import { useOutsideAlerter } from '@/hooks/useOutside';
import { useWindowSize } from '@/hooks/useWindowSize';

import { ButtonInput } from '@/components';
import { NavButton } from '@/components/buttons/NavButton';
import { LinkLogin, LinkSignup } from '@/components/links/NavLink';

import { navHomeData } from '@/constant/pages/layout/nav-home.data';
import { NewLogo, Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';
import { Sidebar } from '@/ui/layout/sidebar';

export function HomeNav() {
  const size = useWindowSize();
  const isMobile = size.width && size.width < 768;
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
  const changePositionMobile = 200;
  const changePosition2 = position && position.scrollY > 400 && change;

  if (position && !isMobile) {
    if (position.scrollY > changePosition && !change) setChange(true);
    if (position.scrollY <= changePosition && change) setChange(false);
  }

  if (position && isMobile) {
    if (position.scrollY > changePositionMobile && !change) setChange(true);
    if (position.scrollY <= changePositionMobile && change) setChange(false);
  }

  function onClickSidebar() {
    if (stylesBody) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
    setStylesBody(!stylesBody);
  }

  if (isMobile)
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
                  {!change ? (
                    <>
                      <NavButton onClick={onClickSidebar} />
                      <Spacer className='w-[128px]' />
                      <NewLogo />
                      <Spacer className='w-[128px]' />
                      <div
                        className={clsx(
                          'relative w-full max-w-[722px]',
                          changePositionMobile ? '' : 'overflow-hidden'
                        )}
                      ></div>
                      <div className='flex-1'></div>
                      <AuthContent data={auth} change={change} />
                    </>
                  ) : (
                    <div className='w-full'>
                      <ButtonInput
                        svg={<SvgMap />}
                        placeholder='Ange leveransadress'
                        className='bg-[#eee]'
                        innerClassName='bg-[#eee]'
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );

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
                <Spacer className='w-[128px]' />
                <div
                  className={clsx(
                    'relative w-full max-w-[722px]',
                    changePosition2 ? '' : 'overflow-hidden'
                  )}
                >
                  <NavButtonInput changePosition2={changePosition2} />
                  <div
                    style={{
                      transformOrigin: 'right',
                      transition: 'transform 500ms',
                      transform: `${
                        changePosition2 ? 'scaleX(1)' : 'scaleX(0)'
                      }`,
                    }}
                    className='absolute bottom-0 top-0 left-0 z-30 bg-white'
                  ></div>
                </div>
                <div className='flex-1'></div>
                <Spacer className='w-6' />
                <AuthContent data={auth} change={change} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function NavButtonInput({ changePosition2 }: any) {
  return (
    <div
      style={{
        transformOrigin: 'left',
        transition: 'transform 500ms',
        transform: `${changePosition2 ? 'scaleX(1)' : 'scaleX(0)'}`,
      }}
      className='flex-1'
    >
      {changePosition2 ? (
        <ButtonInput
          svg={<SvgMap />}
          placeholder='Ange leveransadress'
          className='bg-[#eee]'
          innerClassName='bg-[#eee]'
        />
      ) : null}
    </div>
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
    <LinkLogin
      title={login.title}
      className={clsx(
        'bg-white p-[12px_14px] text-black hover:bg-[#ccc] md:p-[auto]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    />
    <Spacer className='w-[60px] md:w-4' />
    <LinkSignup
      title={register.title}
      className={clsx(
        'bg-black text-white hover:bg-[#333]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    />
  </>
);
