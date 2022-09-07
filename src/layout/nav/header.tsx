import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NavButton } from '@/components/buttons/NavButton';

import { NavProps } from '@/layout/nav/nav';
import { Logo, Spacer } from '@/ui';

type NavHeaderProps = {
  children: JSX.Element;
  change: boolean;
  onSidebar: () => void;
  home: boolean;
} & Pick<NavProps, 'noBorder'>;

export const NavHeader = ({
  children,
  change,
  noBorder,
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
              change && !noBorder ? 'bg-white box-shadow-rgb-gray' : ''
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

  if (change && isMobile) return null;

  return (
    <>
      <NavButton onClick={onSidebar} />
      <Spacer className='pr-8 sm:pr-6' />
      <Logo />
      <Spacer className='p-5 md:hidden' />
    </>
  );
}
