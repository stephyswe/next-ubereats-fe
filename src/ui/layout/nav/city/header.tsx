import clsx from 'clsx';

import { NavButton } from '@/components/buttons/NavButton';

import { NewLogo, Spacer } from '@/ui';

export function NavCityHeader({
  children,
  change,
  noHoverBorder,
  onClickSidebar,
}: any) {
  return (
    <header>
      <div className={change ? 'h-24' : undefined}>
        <div className={change ? 'fixed top-0 left-0 z-30 w-full ' : undefined}>
          <div className='relative'>
            <div
              className={clsx(
                'right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4 text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10',
                change && !noHoverBorder ? 'box-shadow-rgb-gray' : '',
                'bg-white'
              )}
            >
              <Navigate onClickSidebar={onClickSidebar} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const Navigate = ({ onClickSidebar }: any) => (
  <>
    <NavButton onClick={onClickSidebar} />
    <Spacer className='w-8' />
    <NewLogo />
  </>
);
