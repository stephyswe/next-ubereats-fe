import clsx from 'clsx';
import { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { Button } from '@/components';

import { useDelivery } from '@/contexts';
import { LoadingInit, LoadingRound, Spacer } from '@/ui';
import { SvgCart, SvgModalClose } from '@/ui/icons';
import { SvgIcon } from '@/ui/icons/icons-new';

export const Cart = ({ size }: any) => {
  const [showCart, setShowCart] = useState(false);
  const { isComplete } = useDelivery();
  if (!isComplete)
    return (
      <LoadingInit w='300' h='48'>
        <LoadingRound w='80' />
      </LoadingInit>
    );

  function onClick() {
    setShowCart(!showCart);
  }
  return (
    <>
      <div className='flex flex-grow-0 items-center justify-end'>
        <div className='relative flex max-w-[300px] opacity-100 transition-width-opacity-400'>
          <div className='flex cursor-auto flex-row items-stretch overflow-hidden whitespace-nowrap rounded-[500px] bg-black text-base font-medium leading-5'>
            <Button onClick={onClick} variant='navCart' size={size}>
              <SvgCart size={size} />
              <Spacer className='w-2' />
              Varukorg • 0
            </Button>
          </div>
        </div>
      </div>
      <CartWindow onClose={setShowCart} show={showCart} />
    </>
  );
};

export const CartWindow = ({ show, onClose }: any) => {
  const ref = useRef(null);
  function closeDiv() {
    onClose();
  }
  useOnClickOutside(ref, closeDiv);

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
          <Button variant='modalDishClose' onClick={() => onClose()}>
            <div className=' h-[24px] w-[24px]'>
              <SvgModalClose />
            </div>
          </Button>
        </div>
        <div
          className={clsx(
            'flex flex-col items-center justify-center p-16',
            `before:flex-[1_0_48px] before:content-['']`,
            `after:flex-[1_0_48px] after:content-['']`
          )}
        >
          <SvgIcon size='lg' color='#afafaf' type='cart-window' />
          <div className='mt-4 text-center text-base leading-6'>
            Lägg till objekt från en restaurang eller butik för att öppna en ny
            varukorg
          </div>
        </div>
      </div>
    </div>
  );
};
