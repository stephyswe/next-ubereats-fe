import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import {
  DiningToggleItemProps,
  DiningTogglerProps,
  ToggleItemProps,
  TogglerProps,
} from './types';

export const Toggler = ({ data }: TogglerProps) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative flex w-auto pb-6'>
      <div className='box-border flex h-12 w-full whitespace-nowrap rounded-[500px] bg-black08 p-1'>
        <ToggleItem onClick={() => setToggle(false)} title={data[0]} />
        <ToggleItem
          onClick={() => router.push('./client/dining/pickup')}
          title={data[1]}
        />
        <div
          className={clsx(
            `absolute z-0 h-[calc(100%-32px)] w-[107.0156px] rounded-[500px] bg-white transition-all-ease-400`,
            toggle ? 'translate-x-[107.0156px]' : 'translate-x-0'
          )}
        ></div>
      </div>
    </div>
  );
};

const ToggleItem = ({ title, onClick }: ToggleItemProps) => (
  <div onClick={onClick} className='z-10 flex w-1/2 justify-center'>
    <div
      role='radio'
      aria-checked='false'
      tabIndex={0}
      aria-label={title}
      className={clsx(
        'box-border flex h-full w-full cursor-pointer select-none items-center justify-center',
        'rounded-[500px] bg-inherit px-4 text-center text-sm font-medium leading-4 text-black transition-all-ease-400'
      )}
    >
      {title}
    </div>
  </div>
);

export const DiningToggler = ({ size }: DiningTogglerProps) => {
  const { pathname, push, reload } = useRouter();
  const routeName = pathname.split('/').pop();

  const initState = useCallback(() => {
    if (pathname === '/client/dining/pickup') {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [pathname]);

  function onClick(route: string) {
    if (pathname === '/client/dining/delivery' && route === 'delivery') return;
    else if (pathname === '/client/dining/pickup' && route === 'pickup') return;
    else push(`/client/dining/${route}`);
  }

  useEffect(() => {
    initState();
  }, [initState, reload]);

  const [toggle, setToggle] = useState(false);
  return (
    <div className='relative flex w-auto'>
      <div
        className={clsx(
          'box-border flex w-full whitespace-nowrap rounded-[500px] bg-[#eee] p-1',
          size === 'small' ? 'h-10' : 'h-12'
        )}
      >
        <DiningToggleItem
          onClick={() => onClick('delivery')}
          title='Delivery'
          path={routeName}
        />
        <DiningToggleItem
          onClick={() => onClick('pickup')}
          title='Pickup'
          path={routeName}
        />
        <div
          className={clsx(
            `h-[calc(100% - 8px)] absolute z-0 w-[81.0156px] bg-white transition-ease-400 rounded-500 h-calc-2`,
            toggle ? 'translate-x-[81.0156px]' : 'translate-x-0'
          )}
        ></div>
      </div>
    </div>
  );
};

const DiningToggleItem = ({ title, onClick, path }: DiningToggleItemProps) => (
  <div
    onClick={() => {
      if (title.toLowerCase() !== path) onClick();
    }}
    className='z-10 flex w-1/2 justify-center'
  >
    <div
      role='radio'
      aria-checked='false'
      tabIndex={0}
      aria-label={title}
      className={clsx(
        'bg-inherit px-4 text-center text-sm font-medium leading-4 transition-ease-400',
        'box-border flex h-full w-full cursor-pointer select-none items-center justify-center rounded-[500px]'
      )}
    >
      {title}
    </div>
  </div>
);
