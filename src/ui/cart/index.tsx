import clsx from 'clsx';
import router from 'next/router';
import { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { Button, Link, Typography } from '@/components';
import { LinkIcon } from '@/components/links/LinkIcon';

import { useCreateOrderMutation } from '@/__generated__/graphql';
import { useDelivery, useOrders } from '@/contexts';
import { LoadingInit, LoadingRound, Spacer } from '@/ui';
import { SvgCart, SvgDownArrow, SvgModalClose, SvgPersonAdd } from '@/ui/icons';
import { SvgIcon } from '@/ui/icons/icons-new';

export const Cart = ({ size }: any) => {
  const [showCart, setShowCart] = useState(false);
  const { isComplete } = useDelivery();
  const { orderItems } = useOrders();

  const [createOrderMutation, { loading: placingOrder }] =
    useCreateOrderMutation({
      onCompleted(data: any) {
        const {
          createOrder: { orderId },
        } = data;
        if (data.createOrder.ok) {
          router.push(`/client/order/${orderId}`);
        }
      },
    });

  const triggerConfirmOrder = () => {
    if (placingOrder) {
      return;
    }
    if (orderItems.length === 0) {
      alert("Can't place empty order");
      return;
    }

    createOrderMutation({
      variables: { input: { restaurantId: 1, items: orderItems } },
    });
  };

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
            <Button onClick={onClick} variant='btnCart' size={size}>
              <SvgCart size={size} />
              <Spacer className='w-2' />
              <div
                className={clsx(
                  'hidden md:block',
                  size === 'small' ? 'text-sm' : 'text-base'
                )}
              >
                Cart • {orderItems.length}
              </div>
            </Button>
          </div>
        </div>
      </div>
      <CartWindow
        onClose={setShowCart}
        show={showCart}
        orderItems={orderItems}
        onBuy={triggerConfirmOrder}
      />
    </>
  );
};

export const CartWindow = ({ onBuy, show, onClose, orderItems }: any) => {
  const ref = useRef(null);
  function closeDiv() {
    onClose();
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
          <Button variant='btnDish' onClick={() => onClose(false)}>
            <div className=' h-[24px] w-[24px]'>
              <SvgModalClose />
            </div>
          </Button>
        </div>

        {/* content */}
        {checkCartWindow()}
      </div>
    </div>
  );
};

const CartWindowsItems = ({ orderItems, onBuy }: any) => (
  <div className='p-[0px_24px]'>
    <Spacer className='h-6' />
    <Typography as='div' variant='4xl-normal'>
      McDonalds Avenyn
    </Typography>
    <div className='flex pt-4'>
      <Spacer className='h-6' />
      <LinkIcon
        size='small'
        svg={<SvgPersonAdd />}
        href='placeholder'
        title='Gruppbeställning'
      />
    </div>
    <Spacer className='h-9' />
    <ul>
      {orderItems.map((item: any, index: any) => (
        <CartItem key={index} data={item} />
      ))}
    </ul>
    <Spacer className='h-4' />
    <Spacer className='h-[104px]' />
    <div className='absolute bottom-0 right-0 left-0 p-6 bg-gradient-rgba-cart'>
      <Button variant='btnLg2' size='lg' onClick={onBuy}>
        <span>Gå till kassan</span>
        <span>&nbsp;•&nbsp;</span>
        <span aria-label='Delsumma'>62,00&nbsp;kr</span>
      </Button>
    </div>
  </div>
);

const CartWindowEmpty = () => (
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
);

const CartItem = ({ data }: any) => {
  const { name, price, options } = data;
  return (
    <li className={clsx('cart_li_item flex flex-row')}>
      <div>
        <CartItemSelect />
      </div>
      <Spacer className='w-4' />
      <Link
        href='placeholder'
        className='pointer-events-auto mt-1 flex flex-1 flex-row'
      >
        <div className='grow self-center'>
          <div className='flex flex-row justify-between'>
            <div className='text-base font-medium leading-5'>{name}</div>
            <Spacer className='w-2' />
            <div className='flex-grow-0 text-base font-bold'>
              {price}&nbsp;kr
            </div>
          </div>
          <div className='m-[8px_0px_4px_] text-sm font-bold'>
            Välj alternativ
          </div>

          <ul>
            {options.length > 0 &&
              options.map((option: any, index: any) => (
                <li key={index} className='text-sm font-bold text-[#545454]'>
                  QP Cheese
                </li>
              ))}
          </ul>
        </div>
      </Link>
    </li>
  );
};

const CartItemSelect = () => (
  <div className='relative flex w-full flex-row'>
    <select
      className={clsx(
        'h-9 w-[55px] cursor-pointer appearance-none whitespace-nowrap rounded-[500px] border-none',
        'bg-[#eee] p-[0px_12px_0px_16px] text-sm leading-4 outline-none',
        'font-medium'
      )}
    >
      <option value='1' className='bg-[#eee]'>
        1
      </option>
      <option value='2' className='bg-[#eee]'>
        2
      </option>
    </select>
    <div className='pointer-events-none absolute top-[calc(50%-12px)] right-[8px]'>
      <div className='h-6 w-6 leading-[1px]'>
        <SvgDownArrow />
      </div>
    </div>
  </div>
);
