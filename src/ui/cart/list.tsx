import clsx from 'clsx';
import { useRef } from 'react';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { CloseButton } from '@/components/buttons/Buttons';

import { CartWindowEmpty, CartWindowsItems } from '@/ui/cart/item';

type CartWindowProps = {
  onBuy: () => void;
  show: boolean;
  onClose: (any: boolean) => void;
  orderItems: Array<any>;
};

export const CartWindow = ({
  onBuy,
  show,
  onClose,
  orderItems,
}: CartWindowProps) => {
  const ref = useRef(null);
  function closeDiv() {
    onClose(false);
  }
  useOnClickOutside(ref, closeDiv);

  function checkCartWindow() {
    if (orderItems.length === 0) return <CartWindowEmpty />;
    else return <CartWindowsItems orderItems={orderItems} onBuy={onBuy} />;
  }

  if (!show) return null;

  return (
    <div
      ref={ref}
      className={clsx(
        'fixed right-[82px] top-[62px] z-40 w-[432px] bg-white',
        'transition-opacity-ease-500 box-shadow-rgb-10',
        show ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className='max-h-[calc(100vh-150px)] overflow-y-scroll'>
        <div></div>
        <div className='sticky top-0 z-30 h-11 w-full'>
          <div className='absolute flex h-0 w-full items-center bg-white opacity-0 transition-height-opacity-300'></div>
          <CloseButton onClick={() => onClose(false)} />
        </div>

        {/* content */}
        {checkCartWindow()}
      </div>
    </div>
  );
};
