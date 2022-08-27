import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NavButton } from '@/components/buttons/NavButton';

import { NewLogo, Spacer } from '@/ui';

type NavHeaderProps = {
  children: JSX.Element;
  change: boolean;
  noHoverBorder: boolean;
  onSidebar: () => void;
  home: boolean;
};

export const NavHeader = ({
  children,
  change,
  noHoverBorder,
  onSidebar,
  home,
}: NavHeaderProps) => (
  <header>
    <div className={change ? (home ? 'h-0' : 'h-24') : undefined}>
      <div className={change ? 'fixed top-0 left-0 z-30 w-full ' : undefined}>
        <div className='relative'>
          <div
            className={clsx(
              'right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4',
              'text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10',
              home ? 'absolute z-10' : 'bg-white',
              change && !noHoverBorder ? 'bg-white box-shadow-rgb-gray' : ''
            )}
          >
            <Navigation onSidebar={onSidebar} change={change} />
            {children}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export function Navigation({
  onSidebar,
  change,
}: Pick<NavHeaderProps, 'onSidebar' | 'change'>) {
  const { isMobile } = useWindowSizeJs();

  if (isMobile) {
    return (
      <>
        {!change ? (
          <>
            <NavButton onClick={onSidebar} />
            <Spacer className='pr-6' />
            <NewLogo />
            <Spacer className='p-5' />
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <NavButton onClick={onSidebar} />
        <Spacer className='pr-8' />
        <NewLogo />
      </>
    );
  }
}
