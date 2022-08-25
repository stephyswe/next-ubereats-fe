import clsx from 'clsx';

import { HomeNavigate } from '@/ui/layout/nav/header/init';

export const NavHomeHeader = ({ onSidebar, change, children }: any) => (
  <header>
    <div className={change ? 'h-0' : undefined}>
      <div className={change ? 'fixed top-0 left-0 z-30 w-full ' : undefined}>
        <div className='relative'>
          <div
            className={clsx(
              'right-0 left-0 top-0 m-auto box-border flex h-[96px] items-center justify-between px-4',
              'text-black transition-bg-ease-200 md:min-w-[1024px] md:px-10',
              change ? 'bg-white box-shadow-rgb-gray' : '',
              'absolute z-10'
            )}
          >
            <HomeNavigate onSidebar={onSidebar} change={change} />
            {children}
          </div>
        </div>
      </div>
    </div>
  </header>
);
